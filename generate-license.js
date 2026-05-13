/**
 * generate-license.js
 * Käivita: node generate-license.js <MACHINE-ID>
 * Machine ID on näha litsentsi ekraanil.
 */
const crypto = require('crypto');
const APP_SECRET = 'ModScan2024!xK9#mB'; // peab olema sama mis license.js-s!

const id = (process.argv[2] || '').toUpperCase();
if (!id) {
  console.log('\nKasutamine: node generate-license.js <MACHINE-ID>\n');
  console.log('Machine ID leiad rakenduse litsentsi ekraanilt.\n');
  process.exit(0);
}
const h = crypto.createHash('sha256').update(`${id}-${APP_SECRET}`).digest('hex').toUpperCase();
const key = `MBUS-${h.slice(0,4)}-${h.slice(4,8)}-${h.slice(8,12)}`;
console.log(`\nMachine ID : ${id}\nVõti       : ${key}\n`);
