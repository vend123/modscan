/**
 * ModScan - Node.js WebSocket Bridge Server
 * Brauserist -> WebSocket -> Node.js -> Modbus TCP/RTU -> Seade
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');
const ModbusRTU = require('modbus-serial');
const license = require('./license');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 8080;

app.use(express.json());

// ── Litsentsi API ──────────────────────────────────────────────────────────
app.get('/api/license', (req, res) => {
  res.json(license.getStatus());
});

app.post('/api/license/activate', (req, res) => {
  const { key } = req.body || {};
  if (!key) return res.json({ success: false, message: 'Võti puudub!' });
  res.json(license.activate(key));
});

// ── Litsentsi ekraan ───────────────────────────────────────────────────────
app.get('/license', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  const status = license.getStatus();

  // Kõik tõlked serveris - keel loetakse cookie kaudu
  const TEXTS = {
    et: {
      title:'⚡ ModScan — Litsents',
      sub:'Sisesta litsentsivõti jätkamiseks',
      statusLabel:'Staatus:',
      machineLabel:'Arvuti ID:',
      copy:'📋 Kopeeri', copied:'✓ Kopeeritud!',
      activate:'Aktiveeri litsents',
      trialBtn:'Jätka triaaliga',
      trialDaysLeft:'päeva jäänud',
      back:'← Tagasi pealehele',
      noKey:'Palun sisesta litsentsivõti!',
      serverErr:'Serveriviga. Proovi uuesti.',
      statusTrial:'Trial',
      statusLicensed:'Litsentseeritud',
      statusExpired:'Lõppenud',
      noteExpired:'Trial on lõppenud. Saada Arvuti ID arendajale litsentsivõtme saamiseks.',
      noteTrial:'Trial lõpeb ${daysLeft} päeva pärast. Aktiveeri litsents igal ajal.',
      noteLicensed:'✓ Tarkvara on litsentseeritud. Aitäh!',
    },
    en: {
      title:'⚡ ModScan — License',
      sub:'Enter your license key to continue',
      statusLabel:'Status:',
      machineLabel:'Machine ID:',
      copy:'📋 Copy', copied:'✓ Copied!',
      activate:'Activate license',
      trialBtn:'Continue trial',
      trialDaysLeft:'day(s) left',
      back:'← Back to main page',
      noKey:'Please enter a license key!',
      serverErr:'Server error. Try again.',
      statusTrial:'Trial',
      statusLicensed:'Licensed',
      statusExpired:'Expired',
      noteExpired:'Trial expired. Send your Machine ID to the developer.',
      noteTrial:'Trial expires in ${daysLeft} day(s). Activate your license at any time.',
      noteLicensed:'✓ This software is fully licensed. Thank you!',
    },
    zh: {
      title:'⚡ ModScan — 许可证', sub:'输入许可证密钥以继续',
      statusLabel:'状态:', machineLabel:'机器ID:',
      copy:'📋 复制', copied:'✓ 已复制!',
      activate:'激活许可证', trialBtn:'继续试用', trialDaysLeft:'天剩余',
      back:'← 返回主页', noKey:'请输入许可证密钥！', serverErr:'服务器错误，请重试。',
      statusTrial:'试用', statusLicensed:'已授权', statusExpired:'已过期',
      noteExpired:'试用期已过期。请将机器ID发送给开发者。',
      noteTrial:'试用期将在 ${daysLeft} 天后到期。',
      noteLicensed:'✓ 软件已完全授权。谢谢！',
    },
    hi: {
      title:'⚡ ModScan — लाइसेंस', sub:'जारी रखने के लिए लाइसेंस कुंजी दर्ज करें',
      statusLabel:'स्थिति:', machineLabel:'मशीन ID:',
      copy:'📋 कॉपी', copied:'✓ कॉपी हो गया!',
      activate:'लाइसेंस सक्रिय करें', trialBtn:'परीक्षण जारी रखें', trialDaysLeft:'दिन शेष',
      back:'← मुख्य पृष्ठ पर वापस', noKey:'कृपया लाइसेंस कुंजी दर्ज करें!', serverErr:'सर्वर त्रुटि।',
      statusTrial:'परीक्षण', statusLicensed:'लाइसेंसीकृत', statusExpired:'समाप्त',
      noteExpired:'परीक्षण समाप्त हो गया। डेवलपर को मशीन ID भेजें।',
      noteTrial:'परीक्षण ${daysLeft} दिनों में समाप्त होगा।',
      noteLicensed:'✓ सॉफ्टवेयर पूरी तरह से लाइसेंस प्राप्त है। धन्यवाद!',
    },
    es: {
      title:'⚡ ModScan — Licencia', sub:'Ingrese su clave de licencia para continuar',
      statusLabel:'Estado:', machineLabel:'ID de máquina:',
      copy:'📋 Copiar', copied:'✓ ¡Copiado!',
      activate:'Activar licencia', trialBtn:'Continuar prueba', trialDaysLeft:'día(s) restantes',
      back:'← Volver a la página principal', noKey:'¡Ingrese una clave de licencia!', serverErr:'Error del servidor.',
      statusTrial:'Prueba', statusLicensed:'Licenciado', statusExpired:'Expirado',
      noteExpired:'Prueba expirada. Envíe su ID de máquina al desarrollador.',
      noteTrial:'La prueba expira en ${daysLeft} día(s).',
      noteLicensed:'✓ Software completamente licenciado. ¡Gracias!',
    },
    fr: {
      title:'⚡ ModScan — Licence', sub:'Entrez votre clé de licence pour continuer',
      statusLabel:'Statut:', machineLabel:'ID machine:',
      copy:'📋 Copier', copied:'✓ Copié!',
      activate:'Activer la licence', trialBtn:"Continuer l'essai", trialDaysLeft:'jour(s) restants',
      back:'← Retour à la page principale', noKey:'Veuillez entrer une clé de licence!', serverErr:'Erreur serveur.',
      statusTrial:'Essai', statusLicensed:'Licencié', statusExpired:'Expiré',
      noteExpired:"Essai expiré. Envoyez votre ID machine au développeur.",
      noteTrial:"L'essai expire dans ${daysLeft} jour(s).",
      noteLicensed:'✓ Logiciel entièrement licencié. Merci!',
    },
    ar: {
      title:'⚡ ModScan — ترخيص', sub:'أدخل مفتاح الترخيص للمتابعة',
      statusLabel:'الحالة:', machineLabel:'معرف الجهاز:',
      copy:'📋 نسخ', copied:'✓ تم النسخ!',
      activate:'تفعيل الترخيص', trialBtn:'متابعة التجربة', trialDaysLeft:'يوم متبقي',
      back:'← العودة إلى الصفحة الرئيسية', noKey:'الرجاء إدخال مفتاح الترخيص!', serverErr:'خطأ في الخادم.',
      statusTrial:'تجربة', statusLicensed:'مرخص', statusExpired:'منتهي',
      noteExpired:'انتهت فترة التجربة. أرسل معرف جهازك إلى المطور.',
      noteTrial:'تنتهي التجربة في ${daysLeft} يوم.',
      noteLicensed:'✓ البرنامج مرخص بالكامل. شكراً!',
    },
    bn: {
      title:'⚡ ModScan — লাইসেন্স', sub:'চালিয়ে যেতে লাইসেন্স কী দিন',
      statusLabel:'অবস্থা:', machineLabel:'মেশিন ID:',
      copy:'📋 কপি', copied:'✓ কপি হয়েছে!',
      activate:'লাইসেন্স সক্রিয় করুন', trialBtn:'ট্রায়াল চালিয়ে যান', trialDaysLeft:'দিন বাকি',
      back:'← মূল পাতায় ফিরুন', noKey:'লাইসেন্স কী দিন!', serverErr:'সার্ভার ত্রুটি।',
      statusTrial:'ট্রায়াল', statusLicensed:'লাইসেন্সপ্রাপ্ত', statusExpired:'মেয়াদ শেষ',
      noteExpired:'ট্রায়াল শেষ। মেশিন ID ডেভেলপারকে পাঠান।',
      noteTrial:'ট্রায়াল ${daysLeft} দিন পর শেষ হবে।',
      noteLicensed:'✓ সফটওয়্যার সম্পূর্ণ লাইসেন্সপ্রাপ্ত। ধন্যবাদ!',
    },
    ru: {
      title:'⚡ ModScan — Лицензия', sub:'Введите лицензионный ключ для продолжения',
      statusLabel:'Статус:', machineLabel:'ID компьютера:',
      copy:'📋 Копировать', copied:'✓ Скопировано!',
      activate:'Активировать лицензию', trialBtn:'Продолжить пробный период', trialDaysLeft:'дней осталось',
      back:'← На главную страницу', noKey:'Введите лицензионный ключ!', serverErr:'Ошибка сервера.',
      statusTrial:'Пробный', statusLicensed:'Лицензирован', statusExpired:'Истёк',
      noteExpired:'Пробный период истёк. Отправьте ID компьютера разработчику.',
      noteTrial:'Пробный период истекает через ${daysLeft} дней.',
      noteLicensed:'✓ Программа полностью лицензирована. Спасибо!',
    },
    pt: {
      title:'⚡ ModScan — Licença', sub:'Digite sua chave de licença para continuar',
      statusLabel:'Status:', machineLabel:'ID da máquina:',
      copy:'📋 Copiar', copied:'✓ Copiado!',
      activate:'Ativar licença', trialBtn:'Continuar avaliação', trialDaysLeft:'dia(s) restantes',
      back:'← Voltar à página principal', noKey:'Insira uma chave de licença!', serverErr:'Erro do servidor.',
      statusTrial:'Avaliação', statusLicensed:'Licenciado', statusExpired:'Expirado',
      noteExpired:'Avaliação expirada. Envie seu ID de máquina ao desenvolvedor.',
      noteTrial:'A avaliação expira em ${daysLeft} dia(s).',
      noteLicensed:'✓ Software totalmente licenciado. Obrigado!',
    },
    ur: {
      title:'⚡ ModScan — لائسنس', sub:'جاری رکھنے کے لیے لائسنس کی درج کریں',
      statusLabel:'حالت:', machineLabel:'مشین ID:',
      copy:'📋 کاپی', copied:'✓ کاپی ہو گیا!',
      activate:'لائسنس فعال کریں', trialBtn:'آزمائش جاری رکھیں', trialDaysLeft:'دن باقی',
      back:'← مرکزی صفحہ پر واپس', noKey:'لائسنس کی درج کریں!', serverErr:'سرور خرابی۔',
      statusTrial:'آزمائش', statusLicensed:'لائسنس یافتہ', statusExpired:'ختم',
      noteExpired:'آزمائش ختم ہو گئی۔ مشین ID ڈویلپر کو بھیجیں۔',
      noteTrial:'آزمائش ${daysLeft} دنوں میں ختم ہو گی۔',
      noteLicensed:'✓ سافٹ ویئر مکمل لائسنس یافتہ ہے۔ شکریہ!',
    },
  };

  // Keel loetakse Cookie-st (Express loeb seda)
  const langCookie = req.headers.cookie || '';
  const match = langCookie.match(/modscan_lang=([^;]+)/);
  const lang = (match && TEXTS[match[1]]) ? match[1] : 'et';
  const T = TEXTS[lang];
  const isRTL = ['ar','ur'].includes(lang);

  const daysLeft = status.daysLeft || 0;
  const statusText = status.type === 'licensed' ? T.statusLicensed
                   : status.type === 'trial'    ? T.statusTrial + ': ' + daysLeft + ' ' + T.trialDaysLeft
                   : T.statusExpired;
  const noteText = status.type === 'expired'  ? T.noteExpired
                 : status.type === 'trial'    ? T.noteTrial.replace('\${daysLeft}', daysLeft)
                 : status.type === 'licensed' ? T.noteLicensed
                 : '';
  const noteClass = status.type === 'expired' ? 'note note-err'
                  : status.type === 'trial'   ? 'note note-warn'
                  : 'note note-ok';

  const html = `<!DOCTYPE html>
<html lang="${lang}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${T.title}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0d1117;color:#e6edf3;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh;direction:${isRTL?'rtl':'ltr'}}
.card{background:#161b22;border:1px solid #30363d;border-radius:8px;padding:32px;width:440px;max-width:95vw}
h2{color:#58a6ff;font-size:17px;margin-bottom:6px}
.sub{color:#8b949e;font-size:12px;margin-bottom:22px}
.info{background:#21262d;border-radius:6px;padding:14px;margin-bottom:18px}
.row{display:flex;justify-content:space-between;margin-bottom:7px;font-size:12px;align-items:center}
.lbl{color:#8b949e}
.val{color:#e6edf3;font-weight:700}
.trial-val{color:#d29922}
.expired-val{color:#f85149}
.licensed-val{color:#3fb950}
.note{font-size:11px;margin-top:10px;padding:10px;border-radius:4px;line-height:1.5}
.note-warn{background:#3a2a10;border:1px solid #d29922;color:#d29922}
.note-err{background:#3a1a1a;border:1px solid #f85149;color:#f85149}
.note-ok{background:#1a3a1f;border:1px solid #3fb950;color:#3fb950}
input{width:100%;background:#21262d;border:1px solid #30363d;color:#e6edf3;padding:10px 12px;border-radius:6px;font-family:monospace;font-size:14px;margin-bottom:10px;letter-spacing:2px;text-align:center}
input:focus{outline:none;border-color:#58a6ff}
.btn{width:100%;padding:11px;border-radius:6px;font-family:monospace;font-size:13px;font-weight:700;cursor:pointer;border:1.5px solid;margin-top:8px}
.btn-activate{background:#1a3a1f;border-color:#3fb950;color:#3fb950;margin-top:0}
.btn-activate:hover{background:#3fb950;color:#000}
.btn-trial{background:#21262d;border-color:#d29922;color:#d29922}
.btn-trial:hover{background:#d29922;color:#000}
.btn-back{background:#21262d;border-color:#444;color:#8b949e}
.btn-back:hover{background:#58a6ff;border-color:#58a6ff;color:#000}
.copy-btn{background:#21262d;border:1px solid #30363d;color:#8b949e;padding:3px 8px;border-radius:4px;font-size:11px;cursor:pointer;margin-left:8px}
.copy-btn:hover{border-color:#58a6ff;color:#58a6ff}
.copy-btn.copied{border-color:#3fb950;color:#3fb950}
.msg{margin-top:12px;padding:10px;border-radius:4px;font-size:12px;text-align:center;display:none}
.msg-ok{background:#1a3a1f;border:1px solid #3fb950;color:#3fb950}
.msg-err{background:#3a1a1a;border:1px solid #f85149;color:#f85149}
</style>
</head>
<body>
<div class="card">
  <h2>${T.title}</h2>
  <p class="sub">${T.sub}</p>
  <div class="info">
    <div class="row">
      <span class="lbl">${T.statusLabel}</span>
      <span class="val ${status.type}-val">${statusText}</span>
    </div>
    <div class="row">
      <span class="lbl">${T.machineLabel}</span>
      <span style="display:flex;align-items:center;gap:4px">
        <span style="font-size:11px;letter-spacing:1px;font-weight:700" id="mid">${status.machineId}</span>
        <button class="copy-btn" id="copyBtn" onclick="copyId()">${T.copy}</button>
      </span>
    </div>
    ${noteText ? '<div class="' + noteClass + '">' + noteText + '</div>' : ''}
  </div>
  <input type="text" id="keyInput" placeholder="MBUS-XXXX-XXXX-XXXX" maxlength="19" autocomplete="off">
  <button class="btn btn-activate" onclick="activate()">${T.activate}</button>
  ${status.type === 'trial' ? '<button class="btn btn-trial" onclick="goHome()">' + T.trialBtn + ' (' + daysLeft + ' ' + T.trialDaysLeft + ')</button>' : ''}
  <button class="btn btn-back" onclick="goHome()">${T.back}</button>
  <div id="msg" class="msg"></div>
</div>
<script>
const COPIED = ${JSON.stringify(T.copied)};
const NO_KEY = ${JSON.stringify(T.noKey)};
const SRV_ERR = ${JSON.stringify(T.serverErr)};

function goHome() {
  // Sulge popup aken (kui avati window.open kaudu)
  if (window.opener) {
    window.close();
  } else {
    window.location.href = '/';
  }
}

function copyId() {
  const id = document.getElementById('mid').textContent;
  const btn = document.getElementById('copyBtn');
  const done = () => {
    btn.textContent = COPIED; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = ${JSON.stringify(T.copy)}; btn.classList.remove('copied'); }, 2000);
  };
  navigator.clipboard ? navigator.clipboard.writeText(id).then(done).catch(fb) : fb();
  function fb() {
    const el = document.createElement('textarea');
    el.value = id; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el); done();
  }
}

async function activate() {
  const key = document.getElementById('keyInput').value.trim();
  if (!key) return showMsg(NO_KEY, false);
  try {
    const r = await fetch('/api/license/activate', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({key})
    });
    const d = await r.json();
    showMsg(d.message, d.success);
    if (d.success) setTimeout(() => location.href='/', 1800);
  } catch(e) { showMsg(SRV_ERR, false); }
}

function showMsg(msg, ok) {
  const el = document.getElementById('msg');
  el.textContent = msg; el.style.display = 'block';
  el.className = 'msg ' + (ok ? 'msg-ok' : 'msg-err');
}

document.getElementById('keyInput').addEventListener('input', function() {
  let v = this.value.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
  let f = v.slice(0,4);
  if (v.length>4) f+='-'+v.slice(4,8);
  if (v.length>8) f+='-'+v.slice(8,12);
  if (v.length>12) f+='-'+v.slice(12,16);
  this.value = f;
});
document.addEventListener('keydown', e => { if(e.key==='Enter') activate(); });

// Salvesta keel cookie-sse ka (juhuks kui localStorage ei tööta)
try {
  const lsLang = localStorage.getItem('modscan_lang');
  if (lsLang) document.cookie = 'modscan_lang=' + lsLang + ';path=/;max-age=31536000';
} catch(e) {}
</script>
</body>
</html>`;
  res.send(html);
});

// ── Litsentsi kontroll — kõik teised lehed ─────────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/api/license') || req.path === '/license') return next();
  const status = license.getStatus();
  if (!status.valid) return res.redirect('/license');
  next();
});

// ── Serve static frontend files ────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Store active Modbus clients per WebSocket connection
const clients = new Map();

function log(ws, type, msg, msgKey, params) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: 'log', logType: type, message: msg, msgKey, params }));
  }
}

function send(ws, data) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}

wss.on('connection', (ws, req) => {
  const clientId = Date.now().toString(36);
  console.log(`[${new Date().toISOString()}] Uus brauser ühendus: ${clientId}`);
  
  clients.set(ws, {
    id: clientId,
    modbus: null,
    pollTimer: null,
    connected: false,
    tx: 0,
    rx: 0,
    err: 0
  });

  log(ws,'info',`Server started. ID: ${clientId}`,'srv.started',{id:clientId});

  ws.on('message', async (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch(e) {
      log(ws,'err','Invalid message','srv.invalidMsg');
      return;
    }

    const ctx = clients.get(ws);
    if (!ctx) return;

    switch (msg.action) {
      case 'connect':
        await handleConnect(ws, ctx, msg);
        break;
      case 'disconnect':
        await handleDisconnect(ws, ctx);
        break;
      case 'poll':
        await handlePoll(ws, ctx, msg);
        break;
      case 'startAutoPolling':
        startAutoPolling(ws, ctx, msg);
        break;
      case 'stopAutoPolling':
        stopAutoPolling(ctx);
        break;
      case 'chartPoll':
        handleChartPoll(ws, ctx, msg);
        break;
      case 'updateChartPolls':
        handleUpdateChartPolls(ws, ctx, msg);
        break;
      case 'write':
        await handleWrite(ws, ctx, msg);
        break;
      case 'saveLog':
        handleSaveLog(ws, msg);
        break;
      case 'saveProfiles':
        handleSaveProfiles(ws, msg);
        break;
      case 'loadProfiles':
        handleLoadProfiles(ws);
        break;
      case 'saveSingleProfile':
        handleSaveSingleProfile(ws, msg);
        break;
      case 'loadSingleProfile':
        handleLoadSingleProfile(ws, msg);
        break;
      case 'listSavedProfiles':
        handleListSavedProfiles(ws);
        break;
      case 'deleteSavedProfile':
        handleDeleteSavedProfile(ws, msg);
        break;
      default:
        log(ws,'err',`Unknown command: ${msg.action}`,'srv.unknownCmd',{cmd:msg.action});
    }
  });

  ws.on('close', async () => {
    const ctx = clients.get(ws);
    if (ctx) {
      stopAutoPolling(ctx);
      if (ctx.modbus && ctx.connected) {
        try { await ctx.modbus.close(); } catch(e) {}
      }
      clients.delete(ws);
      console.log(`[${new Date().toISOString()}] Brauser lahkus: ${clientId}`);
    }
  });

  ws.on('error', (err) => {
    console.error(`WebSocket viga ${clientId}:`, err.message);
  });
});

// ─── CONNECT ────────────────────────────────────────────────────────────────

async function handleConnect(ws, ctx, msg) {
  if (ctx.connected) {
    await handleDisconnect(ws, ctx);
  }

  const { mode, host, port, slaveId, serialPort, baudRate, parity, dataBits, stopBits } = msg;

  ctx.modbus = new ModbusRTU();
  ctx.modbus.setID(slaveId || 1);

  try {
    if (mode === 'tcp') {
      log(ws,'info',`Connecting TCP: ${host}:${port}`,'conn.connectingTcp',{host,port,slaveId});
      await ctx.modbus.connectTCP(host, { port: port || 502 });
      ctx.connected = true;
      log(ws,'rx',`✓ TCP connected: ${host}:${port}`,'conn.tcpOk',{host,port});
      send(ws, { type: 'connected', mode: 'tcp', host, port, slaveId });
    } else if (mode === 'rtu') {
      log(ws,'info',`Connecting RTU: ${serialPort} @ ${baudRate}`,'conn.connectingRtu',{port:serialPort,baud:baudRate});
      await ctx.modbus.connectRTUBuffered(serialPort, {
        baudRate: baudRate || 9600,
        parity: parity || 'none',
        dataBits: dataBits || 8,
        stopBits: stopBits || 1
      });
      ctx.connected = true;
      log(ws,'rx',`✓ RTU connected: ${serialPort} @ ${baudRate}`,'conn.rtuOk',{port:serialPort,baud:baudRate});
      send(ws, { type: 'connected', mode: 'rtu', serialPort, baudRate, slaveId });
    } else if (mode === 'ascii') {
      log(ws,'info',`Connecting ASCII: ${serialPort} @ ${baudRate}`,'conn.connectingAscii',{port:serialPort,baud:baudRate});
      await ctx.modbus.connectAsciiSerial(serialPort, {
        baudRate: baudRate || 9600,
        parity: parity || 'none',
        dataBits: dataBits || 7,
        stopBits: stopBits || 1
      });
      ctx.connected = true;
      log(ws,'rx',`✓ ASCII connected: ${serialPort}`,'conn.asciiOk',{port:serialPort});
      send(ws, { type: 'connected', mode: 'ascii', serialPort, slaveId });
    } else {
      throw new Error(`Tundmatu režiim: ${mode}`);
    }

    ctx.modbus.setTimeout(msg.timeout || 3000);

  } catch (err) {
    ctx.err++;
    ctx.connected = false;
    log(ws,'err',`✗ Connect failed: ${err.message}`,'conn.failed',{err:err.message});
    send(ws, { type: 'disconnected', error: err.message });
  }
}

// ─── DISCONNECT ─────────────────────────────────────────────────────────────

async function handleDisconnect(ws, ctx) {
  stopAutoPolling(ctx);
  if (ctx.modbus && ctx.connected) {
    try {
      await ctx.modbus.close();
      log(ws,'info','Disconnected.','conn.closed');
    } catch(e) {
      log(ws, 'err', `Sulgemise viga: ${e.message}`);
    }
  }
  ctx.connected = false;
  ctx.modbus = null;
  send(ws, { type: 'disconnected' });
}

// ─── SINGLE POLL ────────────────────────────────────────────────────────────

async function handlePoll(ws, ctx, msg) {
  if (!ctx.connected || !ctx.modbus) {
    log(ws,'err','Not connected!','conn.notConnected');
    send(ws, { type: 'pollError', error: 'Not connected' });
    return;
  }

  const { fc, address, quantity, slaveId } = msg;
  if (slaveId) ctx.modbus.setID(slaveId);

  const t0 = Date.now();
  ctx.tx++;
  log(ws, 'tx', `→ TX [FC${String(fc).padStart(2,'0')}] Addr:${address} Qty:${quantity} (slave ${slaveId||1})`);

  try {
    let result;
    switch (fc) {
      case 1: result = await ctx.modbus.readCoils(address, quantity); break;
      case 2: result = await ctx.modbus.readDiscreteInputs(address, quantity); break;
      case 3: result = await ctx.modbus.readHoldingRegisters(address, quantity); break;
      case 4: result = await ctx.modbus.readInputRegisters(address, quantity); break;
      default: throw new Error(`Toetamata funktsioonikood: FC${fc}`);
    }

    const latency = Date.now() - t0;
    ctx.rx++;
    const data = result.data || result.buffer;
    log(ws,'rx',`← RX [FC${String(fc).padStart(2,'0')}] ${quantity} regs OK (${latency}ms)`,'poll.rxOk',{fc,quantity,latency});

    send(ws, {
      type: 'pollResult',
      fc, address, quantity,
      slaveId: msg.slaveId || 1,
      data: Array.from(data),
      latency,
      tx: ctx.tx, rx: ctx.rx, err: ctx.err,
      timestamp: Date.now()
    });

  } catch (err) {
    const latency = Date.now() - t0;
    ctx.err++;
    const errMsg = parseModbusError(err);
    log(ws, 'err', `✗ Viga [FC${String(fc).padStart(2,'0')}] ${errMsg} (${latency}ms)`);
    send(ws, {
      type: 'pollError',
      fc, address,
      error: errMsg,
      latency,
      tx: ctx.tx, rx: ctx.rx, err: ctx.err
    });
  }
}

// ─── AUTO POLLING ───────────────────────────────────────────────────────────

function startAutoPolling(ws, ctx, msg) {
  stopAutoPolling(ctx);
  const interval = msg.interval || 1000;
  log(ws, 'info', `Automaatne pollimine alustatud (${interval}ms intervall)`);

  async function doPoll() {
    if (!ctx.connected) return;
    // 1. Main poll
    await handlePoll(ws, ctx, msg);
    // 2. Chart extra polls — sequentially, one at a time
    if (ctx.chartExtraPolls && ctx.chartExtraPolls.length > 0) {
      for (const cp of ctx.chartExtraPolls) {
        if (!ctx.connected) break;
        await handleChartPoll(ws, ctx, cp);
      }
    }
  }

  doPoll();
  ctx.pollTimer = setInterval(doPoll, interval);
}

function stopAutoPolling(ctx) {
  if (ctx.pollTimer) {
    clearInterval(ctx.pollTimer);
    ctx.pollTimer = null;
  }
}

// Chart-only poll — called sequentially inside the main poll cycle
async function handleChartPoll(ws, ctx, msg) {
  if (!ctx.connected || !ctx.modbus) return;
  try {
    const { fc, address, quantity, slaveId } = msg;
    ctx.modbus.setID(slaveId || 1);
    let data;
    if (fc === 1)      data = await ctx.modbus.readCoils(address, quantity);
    else if (fc === 2) data = await ctx.modbus.readDiscreteInputs(address, quantity);
    else if (fc === 3) data = await ctx.modbus.readHoldingRegisters(address, quantity);
    else if (fc === 4) data = await ctx.modbus.readInputRegisters(address, quantity);
    else return;
    send(ws, {
      type: 'chartPollResult',
      fc, address, quantity,
      slaveId: slaveId || 1,
      data: Array.from(data.data),
      timestamp: Date.now()
    });
  } catch(e) { /* silent */ }
}

// Update chart extra polls list from client
function handleUpdateChartPolls(ws, ctx, msg) {
  ctx.chartExtraPolls = msg.polls || [];
}

// ─── WRITE ──────────────────────────────────────────────────────────────────

async function handleWrite(ws, ctx, msg) {
  if (!ctx.connected || !ctx.modbus) {
    log(ws,'err','Write failed: not connected!','write.notConnected');
    return;
  }

  const { fc, address, value, values, slaveId } = msg;
  if (slaveId) ctx.modbus.setID(slaveId);

  ctx.tx++;
  log(ws, 'tx', `→ TX [FC${String(fc).padStart(2,'0')}] Kirjuta aadress:${address} = ${JSON.stringify(value ?? values)}`);

  try {
    switch (fc) {
      case 5:
        await ctx.modbus.writeCoil(address, value ? true : false);
        break;
      case 6:
        await ctx.modbus.writeRegister(address, value);
        break;
      case 15:
        await ctx.modbus.writeCoils(address, values.map(v => v ? true : false));
        break;
      case 16:
        await ctx.modbus.writeRegisters(address, values);
        break;
      default:
        throw new Error(`Kirjutamine FC${fc} ei ole toetatud`);
    }

    ctx.rx++;
    log(ws,'rx',`← RX [FC${String(fc).padStart(2,'0')}] Write OK`,'write.ok',{fc});
    send(ws, { type: 'writeResult', fc, address, success: true, tx: ctx.tx, rx: ctx.rx, err: ctx.err });

  } catch (err) {
    ctx.err++;
    const errMsg = parseModbusError(err);
    log(ws, 'err', `✗ Kirjutamise viga [FC${String(fc).padStart(2,'0')}]: ${errMsg}`);
    send(ws, { type: 'writeResult', fc, address, success: false, error: errMsg, tx: ctx.tx, rx: ctx.rx, err: ctx.err });
  }
}

// ─── SAVE / LOAD PROFILES ───────────────────────────────────────────────────

const PROFILES_FILE = path.join(__dirname, '../profiles.json');
const PROFILES_DIR  = path.join(__dirname, '../profiles');

function ensureProfilesDir() {
  if (!fs.existsSync(PROFILES_DIR)) fs.mkdirSync(PROFILES_DIR, { recursive: true });
}

function safeName(name) {
  return name.replace(/[^a-zA-Z0-9_\-\u00C0-\u024F\u0400-\u04FF]/g, '_').slice(0, 60);
}

function handleSaveProfiles(ws, msg) {
  try {
    fs.writeFileSync(PROFILES_FILE, JSON.stringify(msg.profiles, null, 2), 'utf8');
    log(ws, 'rx', `✓ Polliakende seaded salvestatud (${msg.profiles.length} akent)`);
    send(ws, { type: 'profilesSaved', count: msg.profiles.length });
  } catch (err) {
    log(ws,'err',`Save failed: ${err.message}`,'save.failed',{err:err.message});
  }
}

function handleLoadProfiles(ws) {
  try {
    if (!fs.existsSync(PROFILES_FILE)) { send(ws, { type: 'profilesLoaded', profiles: [] }); return; }
    const profiles = JSON.parse(fs.readFileSync(PROFILES_FILE, 'utf8'));
    log(ws, 'info', `Laaditud ${profiles.length} polliakna seaded`);
    send(ws, { type: 'profilesLoaded', profiles });
  } catch (err) {
    log(ws,'err',`Load failed: ${err.message}`,'load.failed',{err:err.message});
    send(ws, { type: 'profilesLoaded', profiles: [] });
  }
}

function handleSaveSingleProfile(ws, msg) {
  try {
    ensureProfilesDir();
    const name = safeName(msg.profile.name || 'aken');
    const file = path.join(PROFILES_DIR, `${name}.json`);
    fs.writeFileSync(file, JSON.stringify(msg.profile, null, 2), 'utf8');
    log(ws, 'rx', `✓ Aken "${msg.profile.name}" salvestatud`);
    send(ws, { type: 'singleProfileSaved', name: msg.profile.name });
  } catch (err) {
    log(ws,'err',`Window save failed: ${err.message}`,'win.saveFailed',{err:err.message});
  }
}

function handleLoadSingleProfile(ws, msg) {
  try {
    ensureProfilesDir();
    const name = safeName(msg.name);
    const file = path.join(PROFILES_DIR, `${name}.json`);
    if (!fs.existsSync(file)) {
      log(ws, 'err', `Akent "${msg.name}" ei leitud`);
      return;
    }
    const profile = JSON.parse(fs.readFileSync(file, 'utf8'));
    send(ws, { type: 'singleProfileLoaded', profile });
  } catch (err) {
    log(ws,'err',`Window load failed: ${err.message}`,'win.loadFailed',{err:err.message});
  }
}

function handleListSavedProfiles(ws) {
  try {
    ensureProfilesDir();
    const files = fs.readdirSync(PROFILES_DIR).filter(f => f.endsWith('.json'));
    const profiles = files.map(f => {
      try { return JSON.parse(fs.readFileSync(path.join(PROFILES_DIR, f), 'utf8')); }
      catch { return null; }
    }).filter(Boolean);
    send(ws, { type: 'savedProfilesList', profiles });
  } catch (err) {
    send(ws, { type: 'savedProfilesList', profiles: [] });
  }
}

function handleDeleteSavedProfile(ws, msg) {
  try {
    const name = safeName(msg.name);
    const file = path.join(PROFILES_DIR, `${name}.json`);
    if (fs.existsSync(file)) fs.unlinkSync(file);
    log(ws, 'info', `Kustutatud salvestus: ${msg.name}`);
    send(ws, { type: 'savedProfileDeleted', name: msg.name });
  } catch (err) {
    log(ws,'err',`Delete failed: ${err.message}`,'win.deleteFailed',{err:err.message});
  }
}



function handleSaveLog(ws, msg) {
  try {
    const safeName = path.basename(msg.filename || 'modbus_log.txt').replace(/[^a-zA-Z0-9_\-\.]/g, '_');
    const logsDir = path.join(__dirname, '../logs');
    if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
    const filePath = path.join(logsDir, safeName);
    fs.writeFileSync(filePath, msg.content, 'utf8');
    const lines = (msg.content.match(/\n/g)||[]).length;
    log(ws, 'rx', `✓ Logifail salvestatud: logs/${safeName} (${lines} rida)`);
    send(ws, { type: 'logSaved', filename: safeName, path: filePath });
    console.log(`[LOG] Salvestatud: ${filePath}`);
  } catch (err) {
    log(ws,'err',`Log save failed: ${err.message}`,'log.saveFailed',{err:err.message});
  }
}

// ─── HELPERS ────────────────────────────────────────────────────────────────

function parseModbusError(err) {
  if (err.modbusCode !== undefined) {
    const codes = {
      1: 'Ebaseaduslik funktsioon (FC01)',
      2: 'Ebaseaduslik andme-aadress',
      3: 'Ebaseaduslik andmeväärtus',
      4: 'Slave seadme tõrge',
      5: 'Kinnitamine (töötleb...)',
      6: 'Slave on hõivatud',
      8: 'Pariteediviga mälus',
      10: 'Värav tee puudub',
      11: 'Värav sihttõrge'
    };
    return `Modbus erind ${err.modbusCode}: ${codes[err.modbusCode] || 'Tundmatu viga'}`;
  }
  if (err.message.includes('Timed out')) return 'Aegus (timeout) - seade ei vasta';
  if (err.message.includes('ECONNREFUSED')) return '__err.connRefused__';
  if (err.message.includes('ECONNRESET')) return '__err.connReset__';
  if (err.message.includes('EHOSTUNREACH')) return '__err.hostUnreachable__';
  return err.message;
}

// ─── START ──────────────────────────────────────────────────────────────────

server.listen(PORT, () => {
  console.log('╔════════════════════════════════════════╗');
  console.log(`║   ModScan Server käivitatud         ║`);
  console.log(`║   http://localhost:${PORT}              ║`);
  console.log(`║   WebSocket: ws://localhost:${PORT}     ║`);
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log('Toetab: Modbus TCP, RTU ja ASCII');
  console.log('Vajuta Ctrl+C serveri peatamiseks\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} on kasutusel. Muuda PORT env muutujat.`);
  } else {
    console.error('Serveri viga:', err.message);
  }
  process.exit(1);
});
