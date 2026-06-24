/**
 * license-server.js — ModbusManager litsentsiserver (Standard + Pro)
 *
 * Ed25519 ALLKIRJASTAMINE. Privaatvõtmed loetakse KESKKONNAMUUTUJATEST —
 * selles failis pole midagi salajast, nii et see võib olla avalikus repos.
 *
 * Renderis seadista: Environment ->
 *     STD_PRIVATE_KEY   (base64, pkcs8/der — vt generate-keypair.js väljund)
 *     PRO_PRIVATE_KEY   (base64, pkcs8/der)
 *
 * POST /generate                          -> Standard võti (MBUS-)
 * POST /generate?product=pro              -> Pro võti (MBUSP-)
 * POST /generate  body: {"product":"pro"} -> Pro võti (MBUSP-)
 *
 * Body: { "machineId": "ABCD1234EFGH5678" }  (või emailBody/text, kust ID ekstraktitakse)
 * Vastus: { "licenseKey": "...", "machineId": "...", "product": "standard|pro" }
 */

const http = require('http');
const crypto = require('crypto');

// ── Laadi privaatvõtmed env-ist ja tee neist KeyObject'id ────────────────────
function loadPrivateKey(b64, name) {
  if (!b64) return null;
  try {
    return crypto.createPrivateKey({
      key: Buffer.from(b64.trim(), 'base64'),
      format: 'der',
      type: 'pkcs8'
    });
  } catch (e) {
    console.error(`VIGA: ${name} ei ole kehtiv Ed25519 privaatvõti (${e.message})`);
    return null;
  }
}

const PRODUCTS = {
  standard: { key: loadPrivateKey(process.env.STD_PRIVATE_KEY, 'STD_PRIVATE_KEY'), prefix: 'MBUS',  code: 'std' },
  pro:      { key: loadPrivateKey(process.env.PRO_PRIVATE_KEY, 'PRO_PRIVATE_KEY'), prefix: 'MBUSP', code: 'pro' }
};

if (!PRODUCTS.standard.key || !PRODUCTS.pro.key) {
  console.error('VIGA: STD_PRIVATE_KEY ja/või PRO_PRIVATE_KEY keskkonnamuutuja puudub või vigane!');
  process.exit(1);
}

// ── base64url abifunktsioonid ────────────────────────────────────────────────
function b64url(buf) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// ── Genereeri Ed25519-allkirjastatud võti ────────────────────────────────────
// Formaat (Variant A — kõik võtmes):  PREFIX-<payload>.<signature>
//   payload   = base64url( JSON {m: machineId, p: "pro"|"std", v: 1} )
//   signature = base64url( Ed25519(payload-baidid) )
function generateKey(machineId, product) {
  const p = PRODUCTS[product];
  const payloadBuf = Buffer.from(
    JSON.stringify({ m: machineId.toUpperCase(), p: p.code, v: 1 }),
    'utf8'
  );
  const sig = crypto.sign(null, payloadBuf, p.key);
  return `${p.prefix}-${b64url(payloadBuf)}.${b64url(sig)}`;
}

// Leia 16-kohaline tähtnumbriline Machine ID vabast tekstist (nt e-kirjast)
function extractMachineId(text) {
  if (!text || typeof text !== 'string') return null;
  const m = text.toUpperCase().match(/\b[A-Z0-9]{16}\b/);
  return m ? m[0] : null;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url.startsWith('/generate')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');

        const urlProduct = (req.url.match(/[?&]product=(\w+)/) || [])[1];
        const product = (data.product || urlProduct || 'standard').toLowerCase();
        if (!PRODUCTS[product]) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'Unknown product', valid: ['standard','pro'] }));
          return;
        }

        let machineId = data.machineId;
        if (!machineId || machineId.length < 8) {
          machineId = extractMachineId(data.machineId) ||
                      extractMachineId(data.emailBody) ||
                      extractMachineId(data.text);
        } else if (machineId.length > 64 || machineId.includes(' ')) {
          machineId = extractMachineId(machineId) || machineId;
        }

        if (!machineId || machineId.length < 8) {
          res.writeHead(400);
          res.end(JSON.stringify({
            error: 'Machine ID not found',
            hint: 'Please send your Machine ID from the ModbusManager License window'
          }));
          return;
        }

        const licenseKey = generateKey(machineId, product);
        console.log(`[${product}] Machine ID: ${machineId} -> ${licenseKey}`);
        res.writeHead(200);
        res.end(JSON.stringify({ licenseKey, machineId, product }));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
  } else if (req.method === 'GET' && (req.url === '/' || req.url === '/health')) {
    // Renderi health-check / uptime-ping
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`License server running on port ${PORT} (Ed25519; products: standard, pro)`));
