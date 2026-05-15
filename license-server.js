const http = require('http');
const crypto = require('crypto');

const APP_SECRET = 'ModScan2024!xK9#mB'; // SAMA mis license.js-is

function generateKey(machineId) {
  const input = `${machineId.toUpperCase()}-${APP_SECRET}`;
  const h = crypto.createHash('sha256').update(input).digest('hex').toUpperCase();
  return `MBUS-${h.slice(0,4)}-${h.slice(4,8)}-${h.slice(8,12)}`;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST' && req.url === '/generate') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { machineId } = JSON.parse(body);
        if (!machineId || machineId.length < 8) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'Invalid Machine ID' }));
          return;
        }
        const licenseKey = generateKey(machineId);
        res.writeHead(200);
        res.end(JSON.stringify({ licenseKey }));
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
