const http = require('http');
const crypto = require('crypto');

const APP_SECRET = 'ModbusManager2024!xK9#mB'; // SAMA mis license.js-is

function generateKey(machineId) {
  const input = `${machineId.toUpperCase()}-${APP_SECRET}`;
  const h = crypto.createHash('sha256').update(input).digest('hex').toUpperCase();
  return `MBUS-${h.slice(0,4)}-${h.slice(4,8)}-${h.slice(8,12)}`;
}

function extractMachineId(text) {
  if (!text) return null;

  // 1. Otsi MBUS- formaati (juba genereeritud võti - ignoreeri)
  // 2. Otsi puhast hex stringi (8-32 tähemärki, ainult tähed ja numbrid)
  const patterns = [
    /machine\s*id\s*[:\-]?\s*([A-Za-z0-9\-]{8,64})/i,  // "Machine ID: ABC123"
    /id\s*[:\-]\s*([A-Za-z0-9\-]{8,64})/i,               // "ID: ABC123"
    /\b([A-Fa-f0-9]{12,32})\b/,                           // puhas hex string
    /\b([A-Za-z0-9\-]{16,32})\b/                          // üldine ID formaat
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      const id = match[1].trim().replace(/\s+/g, '');
      // Ignoreeri kui see on juba MBUS võti
      if (!id.startsWith('MBUS-')) {
        return id;
      }
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST' && req.url === '/generate') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        
        // Proovi võtta machineId otse või ekstrakti tekstist
        let machineId = data.machineId;
        
        if (!machineId || machineId.length < 8) {
          // Proovi ekstraktida e-maili tekstist
          machineId = extractMachineId(data.machineId) || 
                      extractMachineId(data.emailBody) || 
                      extractMachineId(data.text);
        } else {
          // Proovi ekstraktida kui sisendis on pikk tekst
          if (machineId.length > 64 || machineId.includes(' ')) {
            machineId = extractMachineId(machineId) || machineId;
          }
        }

        if (!machineId || machineId.length < 8) {
          res.writeHead(400);
          res.end(JSON.stringify({ 
            error: 'Machine ID not found', 
            hint: 'Please send your Machine ID from ModbusManager License window'
          }));
          return;
        }

        const licenseKey = generateKey(machineId);
        console.log(`Generated key for Machine ID: ${machineId} -> ${licenseKey}`);
        res.writeHead(200);
        res.end(JSON.stringify({ licenseKey, machineId }));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`License server running on port ${PORT}`));
