/**
 * license-server.js — ModbusManager litsentsiserver (Standard + Pro)
 *
 * Salavõtmed loetakse KESKKONNAMUUTUJATEST — selles failis pole midagi
 * salajast, nii et see võib olla avalikus repos.
 *
 * Renderis seadista: Environment -> STD_SECRET, PRO_SECRET
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

const PRODUCTS = {
  standard: { secret: process.env.STD_SECRET, prefix: 'MBUS'  },
  pro:      { secret: process.env.PRO_SECRET, prefix: 'MBUSP' }
};

if (!PRODUCTS.standard.secret || !PRODUCTS.pro.secret) {
  console.error('VIGA: STD_SECRET ja/või PRO_SECRET keskkonnamuutuja puudub!');
  process.exit(1);
}

function generateKey(machineId, product) {
  const p = PRODUCTS[product];
  const h = crypto
    .createHash('sha256')
    .update(`${machineId.toUpperCase()}-${p.secret}`)
    .digest('hex')
    .toUpperCase();
  return `${p.prefix}-${h.slice(0,4)}-${h.slice(4,8)}-${h.slice(8,12)}`;
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
server.listen(PORT, () => console.log(`License server running on port ${PORT} (products: standard, pro)`));
