const { app, BrowserWindow, Tray, Menu, nativeImage, shell, ipcMain } = require('electron');
const path = require('path');
const { fork } = require('child_process');
const http = require('http');

let mainWindow = null;
let tray = null;
let serverProcess = null;
const PORT = 8765;

// ── Start embedded server ──────────────────────────────────────────────────
function startServer() {
  const serverPath = path.join(__dirname, '..', 'src', 'server.js');
  serverProcess = fork(serverPath, [], {
    env: { ...process.env, PORT: PORT, ELECTRON: '1' },
    silent: true
  });

  serverProcess.stdout.on('data', d => console.log('[Server]', d.toString().trim()));
  serverProcess.stderr.on('data', d => console.error('[Server ERR]', d.toString().trim()));

  serverProcess.on('exit', (code) => {
    console.log('[Server] exited with code', code);
  });
}

// ── Wait for server to be ready ────────────────────────────────────────────
function waitForServer(cb, attempts = 0) {
  if (attempts > 30) { console.error('Server did not start'); return; }
  http.get(`http://localhost:${PORT}/`, (res) => {
    if (res.statusCode === 200) cb();
    else setTimeout(() => waitForServer(cb, attempts + 1), 500);
  }).on('error', () => {
    setTimeout(() => waitForServer(cb, attempts + 1), 500);
  });
}

// ── Create main window ─────────────────────────────────────────────────────
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'ModScan',
    backgroundColor: '#0d1117',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icon.png'),
    show: false,
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(`http://localhost:${PORT}/`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('close', (e) => {
    if (!app.isQuiting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// ── Tray icon ──────────────────────────────────────────────────────────────
function createTray() {
  const iconPath = path.join(__dirname, 'icon.png');
  let icon;
  try {
    icon = nativeImage.createFromPath(iconPath);
  } catch(e) {
    icon = nativeImage.createEmpty();
  }

  tray = new Tray(icon.resize({ width: 16, height: 16 }));

  const menu = Menu.buildFromTemplate([
    { label: 'Open ModScan', click: () => { if (mainWindow) mainWindow.show(); } },
    { label: 'Open in browser', click: () => shell.openExternal(`http://localhost:${PORT}/`) },
    { type: 'separator' },
    { label: 'Quit', click: () => { app.isQuiting = true; app.quit(); } },
  ]);

  tray.setToolTip('ModScan');
  tray.setContextMenu(menu);
  tray.on('click', () => {
    if (mainWindow) {
      mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
    }
  });
}

// ── App lifecycle ──────────────────────────────────────────────────────────
app.whenReady().then(() => {
  startServer();
  waitForServer(() => {
    createWindow();
    createTray();
  });
});

app.on('window-all-closed', () => {
  // Keep running in tray
});

app.on('activate', () => {
  if (mainWindow) mainWindow.show();
});

app.on('before-quit', () => {
  app.isQuiting = true;
  if (serverProcess) serverProcess.kill();
});
