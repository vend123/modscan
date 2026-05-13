/**
 * license.js — ModScan litsentsihaldur
 * 14-päeva trial + litsentsivõtme aktiveerimine
 */

const fs   = require('fs');
const path = require('path');
const os   = require('os');
const crypto = require('crypto');

const TRIAL_DAYS  = 14;
const APP_SECRET  = 'ModScan2024!xK9#mB'; // MUUDA UNIKAALSEKS!

const LICENSE_DIR  = path.join(
  process.env.APPDATA || os.homedir(),
  'ModScan'
);
const LICENSE_FILE = path.join(LICENSE_DIR, 'license.dat');

// ── Arvuti unikaalne ID ────────────────────────────────────────────────────
function getMachineId() {
  const parts = [
    os.hostname(),
    os.platform(),
    os.arch(),
    (os.cpus()[0] || {}).model || ''
  ];
  return crypto
    .createHash('sha256')
    .update(parts.join('|'))
    .digest('hex')
    .slice(0, 16)
    .toUpperCase();
}

// ── Võtme genereerimine ────────────────────────────────────────────────────
function generateKey(machineId) {
  const h = crypto
    .createHash('sha256')
    .update(`${machineId.toUpperCase()}-${APP_SECRET}`)
    .digest('hex')
    .toUpperCase();
  return `MBUS-${h.slice(0,4)}-${h.slice(4,8)}-${h.slice(8,12)}`;
}

// ── Võtme kontroll ─────────────────────────────────────────────────────────
function validateKey(key) {
  return key.trim().toUpperCase() === generateKey(getMachineId());
}

// ── Faili lugemine / kirjutamine ───────────────────────────────────────────
function load() {
  try {
    if (!fs.existsSync(LICENSE_FILE)) return null;
    return JSON.parse(Buffer.from(fs.readFileSync(LICENSE_FILE, 'utf8'), 'base64').toString());
  } catch { return null; }
}

function save(data) {
  if (!fs.existsSync(LICENSE_DIR)) fs.mkdirSync(LICENSE_DIR, { recursive: true });
  fs.writeFileSync(LICENSE_FILE, Buffer.from(JSON.stringify(data)).toString('base64'));
}

// ── Staatus ────────────────────────────────────────────────────────────────
function getStatus() {
  let data = load();
  if (!data) {
    data = { firstRun: new Date().toISOString(), licensed: false, key: null };
    save(data);
  }

  const machineId = getMachineId();

  if (data.licensed && data.key && validateKey(data.key)) {
    return { valid: true, type: 'licensed', message: 'Licensed', machineId };
  }

  const daysLeft = TRIAL_DAYS - Math.floor((Date.now() - new Date(data.firstRun)) / 86400000);

  if (daysLeft > 0) {
    return { valid: true, type: 'trial', daysLeft, message: `Trial: ${daysLeft}d`, machineId };
  }

  return { valid: false, type: 'expired', daysLeft: 0, message: 'Trial expired', machineId };
}

// ── Aktiveerimine ──────────────────────────────────────────────────────────
function activate(key) {
  if (!validateKey(key)) return { success: false, message: 'Invalid license key!' };
  const data = load() || {};
  data.licensed    = true;
  data.key         = key.trim().toUpperCase();
  data.activatedAt = new Date().toISOString();
  save(data);
  return { success: true, message: 'License activated! Thank you!' };
}

module.exports = { getStatus, activate, getMachineId, generateKey };
