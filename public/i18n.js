/**
 * ModScan — tõlked (i18n)
 * 11 keelt: ET, EN, ZH, HI, ES, FR, AR, BN, RU, PT, UR
 */
const TRANSLATIONS = {

en: {
  name:'English', flag:'🇬🇧',
  connect:'Connect', disconnect:'Disconnect',
  start:'▶ Start', stop:'⏹ Stop',
  license:'🔑 License',
  notConnected:'Not connected', connected:'Connected', connecting:'Connecting...',
  address:'Address:', quantity:'Quantity:', slaveId:'Slave ID', interval:'Interval',
  tabRegisters:'Registers', tabChart:'Chart', tabWrite:'Write',
  colAddress:'Address', colOffset:'Offset', colDecimal:'Decimal', colHex:'Hex', colBinary:'Binary', colAscii:'ASCII', colDescription:'Description', colStatus:'Status',
  pollWindows:'Poll windows',
  savedSection:'💾 Saved',
  watchRegister:'Watch register:', name:'Name:',
  yMin:'Y min:', yMax:'Y max:',
  pause:'⏸ Pause', resume:'▶ Resume', crosshair:'✛ Cursor', clear:'Clear',
  logFile:'Log file:', startLog:'⏺ Start logging', stopLog:'⏹ Stop logging',
  download:'⬇ Download',
  writeTitle:'✏ Write Modbus register', function_:'Function:',
  regAddress:'Register address:', value:'Value (dec):', values:'Values (comma):',
  sendCmd:'Send command →',
  txrxLog:'TX/RX log', clearLog:'Clear',
  errors:'Errors', latency:'Latency', device:'Device',
  connSettings:'Connection settings',
  ipAddress:'IP address:', port:'Port:', timeout:'Timeout (ms):',
  serialPort:'Serial port:', baudRate:'Baud rate:', parity:'Parity:',
  dataBits:'Data bits:', stopBits:'Stop bits:',
  parityNone:'None (N)', parityEven:'Even (E)', parityOdd:'Odd (O)',
  tcpHint:'For Modbus TCP devices (PLC, drives, sensors over Ethernet)',
  rtuHint:'RS-485/RS-232 serial. Windows: COM3, Linux: /dev/ttyUSB0',
  asciiHint:'Modbus ASCII protocol',
  cancel:'Cancel', add:'Add', save:'Save',
  newWindow:'New poll window', editWindow:'Edit poll window', windowName:'Name:',
  paused:'⏸ PAUSED',
  fc05:'FC05 – Write single coil', fc06:'FC06 – Write single register', fc16:'FC16 – Write multiple registers',
  btnEdit:'Edit settings', btnSave:'Save', btnDelete:'Remove',
  btnLoad:'Add to open windows', btnDelSaved:'Delete saved',
  noSaved:'No saved windows',
  renamed:'renamed', updated:'settings updated',
  'wsOk':'WebSocket connected',
  'wsDisconn':'WebSocket disconnected. Reconnecting...',
  'wsError':'WebSocket error. Check server.',
  'notConn':'Not connected!',
  'logSaved':'Log file saved to server',
  'windowAdded':'New poll window added',
  'windowRemoved':'Window removed',
  'logEmpty':'Log is empty!',
  'connectedMode':'Connected',
  'newPollTitle':'New poll window',
  'editPollTitle':'✏ Edit poll window',
  'connCancel':'Cancel',
  'connOk':'Connect',
  'ascSlaveId':'Slave ID:',
  'titleTooltip':'Add new window',
  // Server log messages
  'srv.started':'Server started. ID: {id}',
  'srv.invalidMsg':'Invalid message to server',
  'srv.unknownCmd':'Unknown command: {cmd}',
  'conn.connectingTcp':'Connecting Modbus TCP: {host}:{port} (slave {slaveId})...',
  'conn.tcpOk':'✓ Modbus TCP connected: {host}:{port}',
  'conn.connectingRtu':'Connecting Modbus RTU: {port} @ {baud} baud...',
  'conn.rtuOk':'✓ Modbus RTU connected: {port} @ {baud}',
  'conn.connectingAscii':'Connecting Modbus ASCII: {port} @ {baud} baud...',
  'conn.asciiOk':'✓ Modbus ASCII connected: {port}',
  'conn.failed':'✗ Connection failed: {err}',
  'conn.closed':'Connection closed.',
  'conn.notConnected':'Not connected!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} regs OK ({latency}ms)',
  'write.notConnected':'Write failed: not connected!',
  'write.ok':'← RX [FC{fc}] Write OK',
  'save.failed':'Save failed: {err}',
  'load.failed':'Load failed: {err}',
  'win.saveFailed':'Window save failed: {err}',
  'win.loadFailed':'Window load failed: {err}',
  'win.deleteFailed':'Delete failed: {err}',
  'log.saveFailed':'Log save failed: {err}',
  'err.connRefused':'Connection refused - check IP and port',
  'err.connReset':'Connection reset',
  'err.hostUnreachable':'Host unreachable',
  addWindow:'+ Window',
  windowDefault:'Window 1',
  windowDefault2:'Window 2',
  addChart:'+ Add chart',
  clearAll:'Clear all',
  chartSlave:'Slave:',
  chartReg:'Reg:',
  chartFormat:'Format:',
  chartName:'Name:',
  chartYmin:'Y min:',
  chartYmax:'Y max:',
  chartLog:'Log:',
  chartLogStart:'⏺ Start',
  chartLogStop:'⏹ Stop',
  chartDownload:'⬇ Download',
  chartClear:'Clear',
  chartCursor:'✛ Cursor',
  chartWaiting:'Waiting for data...',
  chartRemove:'✕',
  writeFormat:'Format:',
  writeRegisters:'Registers:',
  namePlaceholder:'Name...',
  descPlaceholder:'Add description...',
  'chartEmpty':'Start polling to collect chart data...',
  'clearChart':'Clear',
  'error':'Error',
  'downloadLog':'⬇ Download',
  'langTitle':'Select language',
  'writeOk':'Write successful',
  'address':'address',
},


et: {
  name:'Eesti', flag:'🇪🇪',
  connect:'Ühenda', disconnect:'Katkesta',
  start:'▶ Alusta', stop:'⏹ Peata',
  license:'🔑 Litsents',
  notConnected:'Pole ühendatud', connected:'Ühendatud', connecting:'Ühendan...',
  address:'Algaadress:', quantity:'Kogus:', slaveId:'Slave ID', interval:'Intervall',
  tabRegisters:'Registrid', tabChart:'Graafik', tabWrite:'Kirjuta',
  colAddress:'Aadress', colOffset:'Offset', colDecimal:'Decimal', colHex:'Hex', colBinary:'Binary', colAscii:'ASCII', colDescription:'Kirjeldus', colStatus:'Staatus',
  pollWindows:'Pollimise aknad',
  savedSection:'💾 Salvestatud',
  watchRegister:'Jälgi registrit:', name:'Nimi:',
  yMin:'Y min:', yMax:'Y max:',
  pause:'⏸ Peata', resume:'▶ Jätka', crosshair:'✛ Kursor', clear:'Tühjenda',
  logFile:'Logi fail:', startLog:'⏺ Alusta logimist', stopLog:'⏹ Peata logimine',
  download:'⬇ Laadi alla',
  writeTitle:'✏ Kirjuta Modbus registrisse', function_:'Funktsioon:',
  regAddress:'Registri aadress:', value:'Väärtus (dec):', values:'Väärtused (komaga):',
  sendCmd:'Saada käsk →',
  txrxLog:'TX/RX logi', clearLog:'Tühjenda',
  errors:'Vead', latency:'Latentsi', device:'Seade',
  connSettings:'Ühenduse seaded',
  ipAddress:'IP aadress:', port:'Port:', timeout:'Timeout (ms):',
  serialPort:'Jadaport:', baudRate:'Baud rate:', parity:'Pariteetsus:',
  dataBits:'Andmebidid:', stopBits:'Stopbidid:',
  parityNone:'Puudub (N)', parityEven:'Paaris (E)', parityOdd:'Paaritu (O)',
  tcpHint:'Sobib Modbus TCP seadmetele (PLC, frekventsmuundurid, andurid üle Etherneti)',
  rtuHint:'RS-485/RS-232 jadaühendus. Windowsis COM3, Linuxis /dev/ttyUSB0',
  asciiHint:'Modbus ASCII protokoll',
  cancel:'Tühista', add:'Lisa', save:'Salvesta',
  newWindow:'Uus polliaken', editWindow:'Muuda polliakent', windowName:'Nimi:',
  paused:'⏸ PEATATUD',
  fc05:'FC05 – Kirjuta üks coil', fc06:'FC06 – Kirjuta üks register', fc16:'FC16 – Kirjuta mitu registrit',
  btnEdit:'Muuda seadeid', btnSave:'Salvesta', btnDelete:'Eemalda',
  btnLoad:'Lisa avatud akendesse', btnDelSaved:'Kustuta salvestus',
  noSaved:'Salvestatud aknaid pole',
  renamed:'ümbernimetatud', updated:'seaded uuendatud',
  'wsOk':'WebSocket ühendus loodud',
  'wsDisconn':'WebSocket katkes. Ühendun uuesti...',
  'wsError':'WebSocket viga. Kontrolli serverit.',
  'notConn':'Pole ühendatud!',
  'logSaved':'Logifail salvestatud serverisse',
  'windowAdded':'Lisatud uus polliaken',
  'windowRemoved':'Aken eemaldatud',
  'logEmpty':'Logi on tühi!',
  'connectedMode':'Ühendatud',
  'newPollTitle':'Uus polliaken',
  'editPollTitle':'✏ Muuda polliakent',
  'connCancel':'Tühista',
  'connOk':'Ühenda',
  'ascSlaveId':'Slave ID:',
  'chartEmpty':'Inicie o polling para coletar dados do gráfico...',
  'clearChart':'Limpar',
  'error':'Erro',
  'downloadLog':'⬇ Baixar',
  'langTitle':'Selecionar idioma',
  'writeOk':'Escrita bem-sucedida',
  'address':'endereço',
  'writeOk':'Kirjutamine õnnestus',
  'address':'aadress',
  'chartEmpty':'Käivita pollimine graafikuandmete kogumiseks...',
  'clearChart':'Tühjenda',
  'error':'Viga',
  'downloadLog':'⬇ Laadi alla',
  'langTitle':'Vali keel',
  'titleTooltip':'Lisa uus aken',
  // Server log messages
  'srv.started':'Server käivitatud. ID: {id}',
  'srv.invalidMsg':'Vigane sõnum serverile',
  'srv.unknownCmd':'Tundmatu käsk: {cmd}',
  'conn.connectingTcp':'Ühendan Modbus TCP: {host}:{port} (slave {slaveId})...',
  'conn.tcpOk':'✓ Modbus TCP ühendus loodud: {host}:{port}',
  'conn.connectingRtu':'Ühendan Modbus RTU: {port} @ {baud} baud...',
  'conn.rtuOk':'✓ Modbus RTU ühendus loodud: {port} @ {baud}',
  'conn.connectingAscii':'Ühendan Modbus ASCII: {port} @ {baud} baud...',
  'conn.asciiOk':'✓ Modbus ASCII ühendus loodud: {port}',
  'conn.failed':'✗ Ühendus ebaõnnestus: {err}',
  'conn.closed':'Ühendus suletud.',
  'conn.notConnected':'Pole ühendatud!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} väärtust OK ({latency}ms)',
  'write.notConnected':'Kirjutamine ebaõnnestus: pole ühendatud!',
  'write.ok':'← RX [FC{fc}] Kirjutamine õnnestus',
  'save.failed':'Salvestamine ebaõnnestus: {err}',
  'load.failed':'Laadimine ebaõnnestus: {err}',
  'win.saveFailed':'Akna salvestamine ebaõnnestus: {err}',
  'win.loadFailed':'Akna laadimine ebaõnnestus: {err}',
  'win.deleteFailed':'Kustutamine ebaõnnestus: {err}',
  'log.saveFailed':'Logifaili salvestamine ebaõnnestus: {err}',
  'err.connRefused':'Ühendus keeldutud - kontrolli IP ja porti',
  'err.connReset':'Ühendus läks katki',
  'err.hostUnreachable':'Host ei ole kättesaadav',
  addWindow:'+ Aken',
  windowDefault:'Aken 1',
  windowDefault2:'Aken 2',
  addChart:'+ Lisa graafik',
  clearAll:'Tühjenda kõik',
  chartSlave:'Slave:',
  chartReg:'Reg:',
  chartFormat:'Formaat:',
  chartName:'Nimi:',
  chartYmin:'Y min:',
  chartYmax:'Y max:',
  chartLog:'Logi:',
  chartLogStart:'⏺ Alusta',
  chartLogStop:'⏹ Peata',
  chartDownload:'⬇ Laadi',
  chartClear:'Tühjenda',
  chartCursor:'✛ Kursor',
  chartWaiting:'Ootab andmeid...',
  chartRemove:'✕',
  writeFormat:'Formaat:',
  writeRegisters:'Registrid:',
  namePlaceholder:'Nimi...',
  descPlaceholder:'Lisa kirjeldus...',
},

zh: {
  name:'中文', flag:'🇨🇳',
  connect:'连接', disconnect:'断开',
  start:'▶ 开始', stop:'⏹ 停止',
  license:'🔑 许可证',
  notConnected:'未连接', connected:'已连接', connecting:'连接中...',
  address:'地址:', quantity:'数量:', slaveId:'从机ID', interval:'间隔',
  tabRegisters:'寄存器', tabChart:'图表', tabWrite:'写入',
  colAddress:'地址', colOffset:'偏移', colDecimal:'十进制', colHex:'十六进制', colBinary:'二进制', colAscii:'ASCII', colDescription:'描述', colStatus:'状态',
  pollWindows:'轮询窗口',
  savedSection:'💾 已保存',
  watchRegister:'监视寄存器:', name:'名称:',
  yMin:'Y 最小:', yMax:'Y 最大:',
  pause:'⏸ 暂停', resume:'▶ 继续', crosshair:'✛ 光标', clear:'清除',
  logFile:'日志文件:', startLog:'⏺ 开始记录', stopLog:'⏹ 停止记录',
  download:'⬇ 下载',
  writeTitle:'✏ 写入Modbus寄存器', function_:'功能码:',
  regAddress:'寄存器地址:', value:'值 (十进制):', values:'值 (逗号分隔):',
  sendCmd:'发送命令 →',
  txrxLog:'TX/RX 日志', clearLog:'清除',
  errors:'错误', latency:'延迟', device:'设备',
  connSettings:'连接设置',
  ipAddress:'IP地址:', port:'端口:', timeout:'超时 (ms):',
  serialPort:'串口:', baudRate:'波特率:', parity:'奇偶校验:',
  dataBits:'数据位:', stopBits:'停止位:',
  parityNone:'无 (N)', parityEven:'偶 (E)', parityOdd:'奇 (O)',
  tcpHint:'适用于Modbus TCP设备（PLC、变频器、以太网传感器）',
  rtuHint:'RS-485/RS-232串行连接',
  asciiHint:'Modbus ASCII协议',
  cancel:'取消', add:'添加', save:'保存',
  newWindow:'新建轮询窗口', editWindow:'编辑轮询窗口', windowName:'名称:',
  paused:'⏸ 已暂停',
  fc05:'FC05 – 写单个线圈', fc06:'FC06 – 写单个寄存器', fc16:'FC16 – 写多个寄存器',
  btnEdit:'编辑设置', btnSave:'保存', btnDelete:'删除',
  btnLoad:'添加到打开的窗口', btnDelSaved:'删除保存',
  noSaved:'没有保存的窗口',
  renamed:'已重命名', updated:'设置已更新',
  'wsOk':'WebSocket已连接',
  'wsDisconn':'WebSocket断开。重新连接中...',
  'wsError':'WebSocket错误。检查服务器。',
  'notConn':'未连接！',
  'logSaved':'日志文件已保存到服务器',
  'windowAdded':'已添加新轮询窗口',
  'windowRemoved':'窗口已删除',
  'logEmpty':'日志为空！',
  'connectedMode':'已连接',
  'newPollTitle':'新建轮询窗口',
  'editPollTitle':'✏ 编辑轮询窗口',
  'connCancel':'取消',
  'connOk':'连接',
  'ascSlaveId':'从机ID:',
  'chartEmpty':'开始轮询以收集图表数据...',
  'clearChart':'清除',
  'error':'错误',
  'downloadLog':'⬇ 下载',
  'langTitle':'选择语言',
  'writeOk':'写入成功',
  'address':'地址',
  'titleTooltip':'添加新窗口',
  // Server log messages
  'srv.started':'服务器已启动。ID: {id}',
  'conn.connectingTcp':'正在连接 Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP 已连接: {host}:{port}',
  'conn.connectingRtu':'正在连接 Modbus RTU: {port} @ {baud}...',
  'conn.rtuOk':'✓ Modbus RTU 已连接: {port}',
  'conn.failed':'✗ 连接失败: {err}',
  'conn.closed':'连接已关闭。',
  'conn.notConnected':'未连接！',
  'poll.rxOk':'← RX [FC{fc}] {quantity} 寄存器 OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] 写入成功',
  'err.connRefused':'连接被拒绝 - 检查IP和端口',
  'err.connReset':'连接被重置',
  'err.hostUnreachable':'主机不可达',
  addWindow:'+ 窗口',
  windowDefault:'窗口 1',
  windowDefault2:'窗口 2',
  addChart:'+ 添加图表',
  clearAll:'清除全部',
  chartSlave:'从站:',
  chartReg:'寄存器:',
  chartFormat:'格式:',
  chartName:'名称:',
  chartYmin:'Y 最小:',
  chartYmax:'Y 最大:',
  chartLog:'日志:',
  chartLogStart:'⏺ 开始',
  chartLogStop:'⏹ 停止',
  chartDownload:'⬇ 下载',
  chartClear:'清除',
  chartCursor:'✛ 光标',
  chartWaiting:'等待数据...',
  chartRemove:'✕',
  writeFormat:'格式:',
  writeRegisters:'寄存器:',
  namePlaceholder:'名称...',
  descPlaceholder:'添加描述...',
},

hi: {
  name:'हिन्दी', flag:'🇮🇳',
  connect:'जोड़ें', disconnect:'डिस्कनेक्ट',
  start:'▶ शुरू', stop:'⏹ रोकें',
  license:'🔑 लाइसेंस',
  notConnected:'कनेक्ट नहीं', connected:'कनेक्टेड', connecting:'कनेक्ट हो रहा है...',
  address:'पता:', quantity:'मात्रा:', slaveId:'स्लेव ID', interval:'अंतराल',
  tabRegisters:'रजिस्टर', tabChart:'चार्ट', tabWrite:'लिखें',
  colAddress:'पता', colOffset:'ऑफसेट', colDecimal:'दशमलव', colHex:'हेक्स', colBinary:'बाइनरी', colAscii:'ASCII', colDescription:'विवरण', colStatus:'स्थिति',
  pollWindows:'पोल विंडो',
  savedSection:'💾 सहेजा गया',
  watchRegister:'रजिस्टर देखें:', name:'नाम:',
  yMin:'Y न्यूनतम:', yMax:'Y अधिकतम:',
  pause:'⏸ रोकें', resume:'▶ जारी', crosshair:'✛ कर्सर', clear:'साफ़',
  logFile:'लॉग फ़ाइल:', startLog:'⏺ लॉग शुरू', stopLog:'⏹ लॉग बंद',
  download:'⬇ डाउनलोड',
  writeTitle:'✏ Modbus रजिस्टर लिखें', function_:'फ़ंक्शन:',
  regAddress:'रजिस्टर पता:', value:'मान (दशमलव):', values:'मान (अल्पविराम):',
  sendCmd:'कमांड भेजें →',
  txrxLog:'TX/RX लॉग', clearLog:'साफ़',
  errors:'त्रुटियां', latency:'विलंब', device:'डिवाइस',
  connSettings:'कनेक्शन सेटिंग्स',
  ipAddress:'IP पता:', port:'पोर्ट:', timeout:'टाइमआउट (ms):',
  serialPort:'सीरियल पोर्ट:', baudRate:'बॉड रेट:', parity:'पैरिटी:',
  dataBits:'डेटा बिट:', stopBits:'स्टॉप बिट:',
  parityNone:'कोई नहीं (N)', parityEven:'सम (E)', parityOdd:'विषम (O)',
  tcpHint:'Modbus TCP उपकरणों के लिए',
  rtuHint:'RS-485/RS-232 सीरियल',
  asciiHint:'Modbus ASCII प्रोटोकॉल',
  cancel:'रद्द करें', add:'जोड़ें', save:'सहेजें',
  newWindow:'नई पोल विंडो', editWindow:'पोल विंडो संपादित करें', windowName:'नाम:',
  paused:'⏸ रुका हुआ',
  fc05:'FC05 – एकल कॉइल', fc06:'FC06 – एकल रजिस्टर', fc16:'FC16 – बहुविध रजिस्टर',
  btnEdit:'सेटिंग्स संपादित करें', btnSave:'सहेजें', btnDelete:'हटाएं',
  btnLoad:'खुली विंडो में जोड़ें', btnDelSaved:'सहेजा हुआ हटाएं',
  noSaved:'कोई सहेजी गई विंडो नहीं',
  renamed:'नाम बदला', updated:'सेटिंग्स अपडेट हुईं',
  'wsOk':'WebSocket जुड़ा',
  'wsDisconn':'WebSocket डिस्कनेक्ट। पुनः जोड़ रहे हैं...',
  'wsError':'WebSocket त्रुटि। सर्वर जांचें।',
  'notConn':'कनेक्ट नहीं!',
  'logSaved':'लॉग फ़ाइल सर्वर पर सहेजी गई',
  'windowAdded':'नई पोल विंडो जोड़ी गई',
  'windowRemoved':'विंडो हटाई गई',
  'logEmpty':'लॉग खाली है!',
  'connectedMode':'कनेक्टेड',
  'newPollTitle':'नई पोल विंडो',
  'editPollTitle':'✏ पोल विंडो संपादित करें',
  'connCancel':'रद्द करें',
  'connOk':'जोड़ें',
  'ascSlaveId':'स्लेव ID:',
  'chartEmpty':'चार्ट डेटा के लिए पोलिंग शुरू करें...',
  'clearChart':'साफ़',
  'downloadLog':'⬇ डाउनलोड',
  'langTitle':'भाषा चुनें',
  'writeOk':'लिखना सफल',
  'address':'पता',
  'titleTooltip':'नई विंडो जोड़ें',
  // Server log messages
  'conn.connectingTcp':'Modbus TCP से जोड़ रहे हैं: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP जुड़ा: {host}:{port}',
  'conn.failed':'✗ कनेक्शन विफल: {err}',
  'conn.closed':'कनेक्शन बंद।',
  'conn.notConnected':'कनेक्ट नहीं!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} रेजिस्टर OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] लिखना सफल',
  'err.connRefused':'कनेक्शन अस्वीकृत',
  addWindow:'+ विंडो',
  windowDefault:'विंडो 1',
  windowDefault2:'विंडो 2',
  addChart:'+ चार्ट जोड़ें',
  clearAll:'सब साफ करें',
  chartSlave:'स्लेव:',
  chartReg:'रजि.:',
  chartFormat:'प्रारूप:',
  chartName:'नाम:',
  chartYmin:'Y न्यून:',
  chartYmax:'Y अधि.:',
  chartLog:'लॉग:',
  chartLogStart:'⏺ शुरू',
  chartLogStop:'⏹ रोकें',
  chartDownload:'⬇ डाउनलोड',
  chartClear:'साफ करें',
  'error':'त्रुटि',
  chartCursor:'✛ कर्सर',
  chartWaiting:'डेटा की प्रतीक्षा...',
  chartRemove:'✕',
  writeFormat:'प्रारूप:',
  writeRegisters:'रजिस्टर:',
  namePlaceholder:'नाम...',
  descPlaceholder:'विवरण जोड़ें...',
},

es: {
  name:'Español', flag:'🇪🇸',
  connect:'Conectar', disconnect:'Desconectar',
  start:'▶ Iniciar', stop:'⏹ Detener',
  license:'🔑 Licencia',
  notConnected:'No conectado', connected:'Conectado', connecting:'Conectando...',
  address:'Dirección:', quantity:'Cantidad:', slaveId:'Slave ID', interval:'Intervalo',
  tabRegisters:'Registros', tabChart:'Gráfico', tabWrite:'Escribir',
  colAddress:'Dirección', colOffset:'Offset', colDecimal:'Decimal', colHex:'Hex', colBinary:'Binario', colAscii:'ASCII', colDescription:'Descripción', colStatus:'Estado',
  pollWindows:'Ventanas poll',
  savedSection:'💾 Guardado',
  watchRegister:'Ver registro:', name:'Nombre:',
  yMin:'Y mín:', yMax:'Y máx:',
  pause:'⏸ Pausar', resume:'▶ Reanudar', crosshair:'✛ Cursor', clear:'Limpiar',
  logFile:'Archivo log:', startLog:'⏺ Iniciar log', stopLog:'⏹ Detener log',
  download:'⬇ Descargar',
  writeTitle:'✏ Escribir registro Modbus', function_:'Función:',
  regAddress:'Dirección registro:', value:'Valor (dec):', values:'Valores (coma):',
  sendCmd:'Enviar comando →',
  txrxLog:'Log TX/RX', clearLog:'Limpiar',
  errors:'Errores', latency:'Latencia', device:'Dispositivo',
  connSettings:'Configuración conexión',
  ipAddress:'Dirección IP:', port:'Puerto:', timeout:'Tiempo espera (ms):',
  serialPort:'Puerto serie:', baudRate:'Velocidad:', parity:'Paridad:',
  dataBits:'Bits datos:', stopBits:'Bits parada:',
  parityNone:'Ninguna (N)', parityEven:'Par (E)', parityOdd:'Impar (O)',
  tcpHint:'Para dispositivos Modbus TCP (PLC, variadores, sensores Ethernet)',
  rtuHint:'Conexión serie RS-485/RS-232',
  asciiHint:'Protocolo Modbus ASCII',
  cancel:'Cancelar', add:'Añadir', save:'Guardar',
  newWindow:'Nueva ventana poll', editWindow:'Editar ventana poll', windowName:'Nombre:',
  paused:'⏸ EN PAUSA',
  fc05:'FC05 – Escribir bobina', fc06:'FC06 – Escribir registro', fc16:'FC16 – Escribir múltiples',
  btnEdit:'Editar ajustes', btnSave:'Guardar', btnDelete:'Eliminar',
  btnLoad:'Añadir a ventanas abiertas', btnDelSaved:'Eliminar guardado',
  noSaved:'No hay ventanas guardadas',
  renamed:'renombrado', updated:'ajustes actualizados',
  'wsOk':'WebSocket conectado',
  'wsDisconn':'WebSocket desconectado. Reconectando...',
  'wsError':'Error WebSocket. Verificar servidor.',
  'notConn':'¡No conectado!',
  'logSaved':'Archivo log guardado en servidor',
  'windowAdded':'Nueva ventana poll añadida',
  'windowRemoved':'Ventana eliminada',
  'logEmpty':'¡El log está vacío!',
  'connectedMode':'Conectado',
  'newPollTitle':'Nueva ventana poll',
  'editPollTitle':'✏ Editar ventana poll',
  'connCancel':'Cancelar',
  'connOk':'Conectar',
  'ascSlaveId':'Slave ID:',
  'titleTooltip':'Añadir nueva ventana',
  // Server log messages
  'conn.connectingTcp':'Conectando Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP conectado: {host}:{port}',
  'conn.failed':'✗ Conexión fallida: {err}',
  'conn.closed':'Conexión cerrada.',
  'conn.notConnected':'¡No conectado!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} regs OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] Escritura OK',
  'err.connRefused':'Conexión rechazada - verifica IP y puerto',
  'err.connReset':'Conexión reiniciada',
  'err.hostUnreachable':'Host inalcanzable',
  addWindow:'+ Ventana',
  windowDefault:'Ventana 1',
  windowDefault2:'Ventana 2',
  addChart:'+ Añadir gráfico',
  clearAll:'Borrar todo',
  chartSlave:'Esclavo:',
  chartReg:'Reg:',
  chartFormat:'Formato:',
  chartName:'Nombre:',
  chartYmin:'Y mín:',
  chartYmax:'Y máx:',
  chartLog:'Log:',
  chartLogStart:'⏺ Iniciar',
  chartLogStop:'⏹ Parar',
  chartDownload:'⬇ Descargar',
  chartClear:'Borrar',
  'error':'Error',
  chartCursor:'✛ Cursor',
  chartWaiting:'Esperando datos...',
  chartRemove:'✕',
  writeFormat:'Formato:',
  writeRegisters:'Registros:',
  namePlaceholder:'Nombre...',
  descPlaceholder:'Añadir descripción...',
  'chartEmpty':'Inicie el sondeo para recopilar datos del gráfico...',
  'clearChart':'Limpiar',
  'downloadLog':'⬇ Descargar',
  'langTitle':'Seleccionar idioma',
  'writeOk':'Escritura exitosa',
  'address':'dirección',
},

fr: {
  name:'Français', flag:'🇫🇷',
  connect:'Connecter', disconnect:'Déconnecter',
  start:'▶ Démarrer', stop:'⏹ Arrêter',
  license:'🔑 Licence',
  notConnected:'Non connecté', connected:'Connecté', connecting:'Connexion...',
  address:'Adresse:', quantity:'Quantité:', slaveId:'Slave ID', interval:'Intervalle',
  tabRegisters:'Registres', tabChart:'Graphique', tabWrite:'Écrire',
  colAddress:'Adresse', colOffset:'Offset', colDecimal:'Décimal', colHex:'Hex', colBinary:'Binaire', colAscii:'ASCII', colDescription:'Description', colStatus:'Statut',
  pollWindows:'Fenêtres poll',
  savedSection:'💾 Sauvegardé',
  watchRegister:'Surveiller:', name:'Nom:',
  yMin:'Y min:', yMax:'Y max:',
  pause:'⏸ Pause', resume:'▶ Reprendre', crosshair:'✛ Curseur', clear:'Effacer',
  logFile:'Fichier log:', startLog:'⏺ Démarrer log', stopLog:'⏹ Arrêter log',
  download:'⬇ Télécharger',
  writeTitle:'✏ Écrire registre Modbus', function_:'Fonction:',
  regAddress:'Adresse registre:', value:'Valeur (déc):', values:'Valeurs (virgule):',
  sendCmd:'Envoyer →',
  txrxLog:'Log TX/RX', clearLog:'Effacer',
  errors:'Erreurs', latency:'Latence', device:'Appareil',
  connSettings:'Paramètres connexion',
  ipAddress:'Adresse IP:', port:'Port:', timeout:'Timeout (ms):',
  serialPort:'Port série:', baudRate:'Débit:', parity:'Parité:',
  dataBits:'Bits données:', stopBits:'Bits arrêt:',
  parityNone:'Aucune (N)', parityEven:'Paire (E)', parityOdd:'Impaire (O)',
  tcpHint:'Pour appareils Modbus TCP (automates, variateurs, capteurs Ethernet)',
  rtuHint:'Liaison série RS-485/RS-232',
  asciiHint:'Protocole Modbus ASCII',
  cancel:'Annuler', add:'Ajouter', save:'Sauvegarder',
  newWindow:'Nouvelle fenêtre poll', editWindow:'Modifier fenêtre poll', windowName:'Nom:',
  paused:'⏸ EN PAUSE',
  fc05:'FC05 – Écrire bobine', fc06:'FC06 – Écrire registre', fc16:'FC16 – Écrire multiples',
  btnEdit:'Modifier paramètres', btnSave:'Sauvegarder', btnDelete:'Supprimer',
  btnLoad:'Ajouter aux fenêtres ouvertes', btnDelSaved:'Supprimer sauvegarde',
  noSaved:'Aucune fenêtre sauvegardée',
  renamed:'renommé', updated:'paramètres mis à jour',
  'wsOk':'WebSocket connecté',
  'wsDisconn':'WebSocket déconnecté. Reconnexion...',
  'wsError':'Erreur WebSocket. Vérifier serveur.',
  'notConn':'Non connecté !',
  'logSaved':'Fichier log sauvegardé sur serveur',
  'windowAdded':'Nouvelle fenêtre poll ajoutée',
  'windowRemoved':'Fenêtre supprimée',
  'logEmpty':'Le log est vide !',
  'connectedMode':'Connecté',
  'newPollTitle':'Nouvelle fenêtre poll',
  'editPollTitle':'✏ Modifier fenêtre poll',
  'connCancel':'Annuler',
  'connOk':'Connecter',
  'ascSlaveId':'Slave ID:',
  'titleTooltip':'Ajouter nouvelle fenêtre',
  // Server log messages
  'conn.connectingTcp':'Connexion Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP connecté: {host}:{port}',
  'conn.failed':'✗ Connexion échouée: {err}',
  'conn.closed':'Connexion fermée.',
  'conn.notConnected':'Non connecté !',
  'poll.rxOk':'← RX [FC{fc}] {quantity} regs OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] Écriture OK',
  'err.connRefused':'Connexion refusée - vérifiez IP et port',
  addWindow:'+ Fenêtre',
  windowDefault:'Fenêtre 1',
  windowDefault2:'Fenêtre 2',
  addChart:'+ Ajouter graphique',
  clearAll:'Tout effacer',
  chartSlave:'Esclave:',
  chartReg:'Reg:',
  chartFormat:'Format:',
  chartName:'Nom:',
  chartYmin:'Y min:',
  chartYmax:'Y max:',
  chartLog:'Journal:',
  chartLogStart:'⏺ Démarrer',
  chartLogStop:'⏹ Arrêter',
  chartDownload:'⬇ Télécharger',
  chartClear:'Effacer',
  chartCursor:'✛ Curseur',
  chartWaiting:'En attente de données...',
  chartRemove:'✕',
  writeFormat:'Format:',
  writeRegisters:'Registres:',
  namePlaceholder:'Nom...',
  descPlaceholder:'Ajouter description...',
  'chartEmpty':'Démarrez le sondage pour collecter les données du graphique...',
  'clearChart':'Effacer',
  'error':'Erreur',
  'downloadLog':'⬇ Télécharger',
  'langTitle':'Sélectionner la langue',
  'writeOk':'Écriture réussie',
  'address':'adresse',
},

ar: {
  name:'العربية', flag:'🇸🇦',
  connect:'اتصال', disconnect:'قطع الاتصال',
  start:'▶ بدء', stop:'⏹ إيقاف',
  license:'🔑 ترخيص',
  notConnected:'غير متصل', connected:'متصل', connecting:'جاري الاتصال...',
  address:'العنوان:', quantity:'الكمية:', slaveId:'معرف العبد', interval:'الفاصل الزمني',
  tabRegisters:'السجلات', tabChart:'الرسم البياني', tabWrite:'الكتابة',
  colAddress:'العنوان', colOffset:'الإزاحة', colDecimal:'عشري', colHex:'سداسي', colBinary:'ثنائي', colAscii:'ASCII', colDescription:'الوصف', colStatus:'الحالة',
  pollWindows:'نوافذ الاستطلاع',
  savedSection:'💾 محفوظ',
  watchRegister:'مراقبة السجل:', name:'الاسم:',
  yMin:'Y أدنى:', yMax:'Y أقصى:',
  pause:'⏸ إيقاف مؤقت', resume:'▶ استئناف', crosshair:'✛ مؤشر', clear:'مسح',
  logFile:'ملف السجل:', startLog:'⏺ بدء التسجيل', stopLog:'⏹ إيقاف التسجيل',
  download:'⬇ تنزيل',
  writeTitle:'✏ كتابة سجل Modbus', function_:'الدالة:',
  regAddress:'عنوان السجل:', value:'القيمة (عشري):', values:'القيم (فاصلة):',
  sendCmd:'إرسال الأمر →',
  txrxLog:'سجل TX/RX', clearLog:'مسح',
  errors:'أخطاء', latency:'الكمون', device:'الجهاز',
  connSettings:'إعدادات الاتصال',
  ipAddress:'عنوان IP:', port:'المنفذ:', timeout:'المهلة (ms):',
  serialPort:'المنفذ التسلسلي:', baudRate:'معدل الإرسال:', parity:'التكافؤ:',
  dataBits:'بتات البيانات:', stopBits:'بتات التوقف:',
  parityNone:'لا شيء (N)', parityEven:'زوجي (E)', parityOdd:'فردي (O)',
  tcpHint:'لأجهزة Modbus TCP',
  rtuHint:'اتصال تسلسلي RS-485/RS-232',
  asciiHint:'بروتوكول Modbus ASCII',
  cancel:'إلغاء', add:'إضافة', save:'حفظ',
  newWindow:'نافذة استطلاع جديدة', editWindow:'تعديل نافذة الاستطلاع', windowName:'الاسم:',
  paused:'⏸ متوقف',
  fc05:'FC05 – كتابة ملف', fc06:'FC06 – كتابة سجل', fc16:'FC16 – كتابة متعددة',
  btnEdit:'تعديل الإعدادات', btnSave:'حفظ', btnDelete:'حذف',
  btnLoad:'إضافة إلى النوافذ المفتوحة', btnDelSaved:'حذف المحفوظ',
  noSaved:'لا توجد نوافذ محفوظة',
  renamed:'تمت إعادة التسمية', updated:'تم تحديث الإعدادات',
  'wsOk':'تم الاتصال بـ WebSocket',
  'wsDisconn':'انقطع WebSocket. جاري إعادة الاتصال...',
  'wsError':'خطأ WebSocket. تحقق من الخادم.',
  'notConn':'غير متصل!',
  'logSaved':'تم حفظ ملف السجل على الخادم',
  'windowAdded':'تمت إضافة نافذة استطلاع جديدة',
  'windowRemoved':'تم حذف النافذة',
  'logEmpty':'السجل فارغ!',
  'connectedMode':'متصل',
  'newPollTitle':'نافذة استطلاع جديدة',
  'editPollTitle':'✏ تعديل نافذة الاستطلاع',
  'connCancel':'إلغاء',
  'connOk':'اتصال',
  'ascSlaveId':'معرف العبد:',
  'chartEmpty':'ابدأ الاستطلاع لجمع بيانات الرسم البياني...',
  'clearChart':'مسح',
  'error':'خطأ',
  'downloadLog':'⬇ تنزيل',
  'langTitle':'اختر اللغة',
  'writeOk':'نجح الكتابة',
  'address':'عنوان',
  'titleTooltip':'إضافة نافذة جديدة',
  // Server log messages
  'conn.connectingTcp':'جاري الاتصال بـ Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ تم الاتصال بـ Modbus TCP: {host}:{port}',
  'conn.failed':'✗ فشل الاتصال: {err}',
  'conn.closed':'تم إغلاق الاتصال.',
  'conn.notConnected':'غير متصل!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} سجلات OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] تمت الكتابة',
  addWindow:'+ نافذة',
  windowDefault:'نافذة 1',
  windowDefault2:'نافذة 2',
  addChart:'+ إضافة رسم',
  clearAll:'مسح الكل',
  chartSlave:'العبد:',
  chartReg:'سجل:',
  chartFormat:'تنسيق:',
  chartName:'اسم:',
  chartYmin:'Y أدنى:',
  chartYmax:'Y أقصى:',
  chartLog:'سجل:',
  chartLogStart:'⏺ بدء',
  chartLogStop:'⏹ إيقاف',
  chartDownload:'⬇ تحميل',
  chartClear:'مسح',
  chartCursor:'✛ مؤشر',
  chartWaiting:'في انتظار البيانات...',
  chartRemove:'✕',
  writeFormat:'تنسيق:',
  writeRegisters:'سجلات:',
  namePlaceholder:'الاسم...',
  descPlaceholder:'إضافة وصف...',
},

bn: {
  name:'বাংলা', flag:'🇧🇩',
  connect:'সংযোগ', disconnect:'বিচ্ছিন্ন',
  start:'▶ শুরু', stop:'⏹ থামুন',
  license:'🔑 লাইসেন্স',
  notConnected:'সংযুক্ত নয়', connected:'সংযুক্ত', connecting:'সংযোগ হচ্ছে...',
  address:'ঠিকানা:', quantity:'পরিমাণ:', slaveId:'স্লেভ ID', interval:'বিরতি',
  tabRegisters:'রেজিস্টার', tabChart:'চার্ট', tabWrite:'লিখুন',
  colAddress:'ঠিকানা', colOffset:'অফসেট', colDecimal:'দশমিক', colHex:'হেক্স', colBinary:'বাইনারি', colAscii:'ASCII', colDescription:'বিবরণ', colStatus:'অবস্থা',
  pollWindows:'পোল উইন্ডো',
  savedSection:'💾 সংরক্ষিত',
  watchRegister:'রেজিস্টার দেখুন:', name:'নাম:',
  yMin:'Y সর্বনিম্ন:', yMax:'Y সর্বোচ্চ:',
  pause:'⏸ বিরতি', resume:'▶ পুনরায়', crosshair:'✛ কার্সার', clear:'পরিষ্কার',
  logFile:'লগ ফাইল:', startLog:'⏺ লগ শুরু', stopLog:'⏹ লগ বন্ধ',
  download:'⬇ ডাউনলোড',
  writeTitle:'✏ Modbus রেজিস্টার লিখুন', function_:'ফাংশন:',
  regAddress:'রেজিস্টার ঠিকানা:', value:'মান (দশমিক):', values:'মান (কমা):',
  sendCmd:'কমান্ড পাঠান →',
  txrxLog:'TX/RX লগ', clearLog:'পরিষ্কার',
  errors:'ত্রুটি', latency:'বিলম্ব', device:'ডিভাইস',
  connSettings:'সংযোগ সেটিংস',
  ipAddress:'IP ঠিকানা:', port:'পোর্ট:', timeout:'টাইমআউট (ms):',
  serialPort:'সিরিয়াল পোর্ট:', baudRate:'বড রেট:', parity:'প্যারিটি:',
  dataBits:'ডেটা বিট:', stopBits:'স্টপ বিট:',
  parityNone:'কোনটি না (N)', parityEven:'জোড় (E)', parityOdd:'বিজোড় (O)',
  tcpHint:'Modbus TCP ডিভাইসের জন্য',
  rtuHint:'RS-485/RS-232 সিরিয়াল',
  asciiHint:'Modbus ASCII প্রোটোকল',
  cancel:'বাতিল', add:'যোগ করুন', save:'সংরক্ষণ',
  newWindow:'নতুন পোল উইন্ডো', editWindow:'পোল উইন্ডো সম্পাদনা', windowName:'নাম:',
  paused:'⏸ বিরতি',
  fc05:'FC05 – কয়েল লিখুন', fc06:'FC06 – রেজিস্টার লিখুন', fc16:'FC16 – একাধিক লিখুন',
  btnEdit:'সেটিংস সম্পাদনা', btnSave:'সংরক্ষণ', btnDelete:'মুছুন',
  btnLoad:'খোলা উইন্ডোতে যোগ করুন', btnDelSaved:'সংরক্ষিত মুছুন',
  noSaved:'কোনো সংরক্ষিত উইন্ডো নেই',
  renamed:'নাম পরিবর্তিত', updated:'সেটিংস আপডেট হয়েছে',
  'wsOk':'WebSocket সংযুক্ত',
  'wsDisconn':'WebSocket বিচ্ছিন্ন। পুনরায় সংযোগ হচ্ছে...',
  'wsError':'WebSocket ত্রুটি। সার্ভার পরীক্ষা করুন।',
  'notConn':'সংযুক্ত নয়!',
  'logSaved':'লগ ফাইল সার্ভারে সংরক্ষিত',
  'windowAdded':'নতুন পোল উইন্ডো যোগ হয়েছে',
  'windowRemoved':'উইন্ডো মুছে গেছে',
  'logEmpty':'লগ খালি!',
  'connectedMode':'সংযুক্ত',
  'newPollTitle':'নতুন পোল উইন্ডো',
  'editPollTitle':'✏ পোল উইন্ডো সম্পাদনা',
  'connCancel':'বাতিল',
  'connOk':'সংযোগ',
  'ascSlaveId':'স্লেভ ID:',
  'chartEmpty':'চার্ট ডেটা সংগ্রহ করতে পোলিং শুরু করুন...',
  'clearChart':'পরিষ্কার',
  'downloadLog':'⬇ ডাউনলোড',
  'langTitle':'ভাষা নির্বাচন করুন',
  'writeOk':'লেখা সফল',
  'address':'ঠিকানা',
  'titleTooltip':'নতুন উইন্ডো যোগ করুন',
  // Server log messages
  'conn.connectingTcp':'Modbus TCP সংযোগ হচ্ছে: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP সংযুক্ত: {host}:{port}',
  'conn.failed':'✗ সংযোগ ব্যর্থ: {err}',
  'conn.closed':'সংযোগ বন্ধ।',
  'conn.notConnected':'সংযুক্ত নয়!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} রেজিস্টার OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] লেখা সফল',
  addWindow:'+ উইন্ডো',
  windowDefault:'উইন্ডো 1',
  windowDefault2:'উইন্ডো 2',
  addChart:'+ চার্ট যোগ',
  clearAll:'সব মুছুন',
  chartSlave:'স্লেভ:',
  chartReg:'রেজি:',
  chartFormat:'ফরম্যাট:',
  chartName:'নাম:',
  chartYmin:'Y মিন:',
  chartYmax:'Y ম্যাক্স:',
  chartLog:'লগ:',
  chartLogStart:'⏺ শুরু',
  chartLogStop:'⏹ থামো',
  chartDownload:'⬇ ডাউনলোড',
  chartClear:'মুছুন',
  'error':'ত্রুটি',
  chartCursor:'✛ কার্সার',
  chartWaiting:'ডেটার অপেক্ষা...',
  chartRemove:'✕',
  writeFormat:'ফরম্যাট:',
  writeRegisters:'রেজিস্টার:',
  namePlaceholder:'নাম...',
  descPlaceholder:'বিবরণ যোগ করুন...',
},

ru: {
  name:'Русский', flag:'🇷🇺',
  connect:'Подключить', disconnect:'Отключить',
  start:'▶ Старт', stop:'⏹ Стоп',
  license:'🔑 Лицензия',
  notConnected:'Не подключено', connected:'Подключено', connecting:'Подключение...',
  address:'Адрес:', quantity:'Кол-во:', slaveId:'Slave ID', interval:'Интервал',
  tabRegisters:'Регистры', tabChart:'График', tabWrite:'Запись',
  colAddress:'Адрес', colOffset:'Смещение', colDecimal:'Десят.', colHex:'Hex', colBinary:'Бинарный', colAscii:'ASCII', colDescription:'Описание', colStatus:'Статус',
  pollWindows:'Окна опроса',
  savedSection:'💾 Сохранённые',
  watchRegister:'Следить:', name:'Имя:',
  yMin:'Y мин:', yMax:'Y макс:',
  pause:'⏸ Пауза', resume:'▶ Продолжить', crosshair:'✛ Курсор', clear:'Очистить',
  logFile:'Файл лога:', startLog:'⏺ Начать лог', stopLog:'⏹ Стоп лог',
  download:'⬇ Скачать',
  writeTitle:'✏ Запись регистра Modbus', function_:'Функция:',
  regAddress:'Адрес регистра:', value:'Значение (дек):', values:'Значения (запятая):',
  sendCmd:'Отправить →',
  txrxLog:'Лог TX/RX', clearLog:'Очистить',
  errors:'Ошибки', latency:'Задержка', device:'Устройство',
  connSettings:'Настройки соединения',
  ipAddress:'IP адрес:', port:'Порт:', timeout:'Таймаут (ms):',
  serialPort:'COM порт:', baudRate:'Скорость:', parity:'Чётность:',
  dataBits:'Биты данных:', stopBits:'Стоп биты:',
  parityNone:'Нет (N)', parityEven:'Чётная (E)', parityOdd:'Нечётная (O)',
  tcpHint:'Для устройств Modbus TCP (ПЛК, преобразователи, датчики)',
  rtuHint:'Последовательное RS-485/RS-232',
  asciiHint:'Протокол Modbus ASCII',
  cancel:'Отмена', add:'Добавить', save:'Сохранить',
  newWindow:'Новое окно опроса', editWindow:'Редактировать окно опроса', windowName:'Имя:',
  paused:'⏸ ПАУЗА',
  fc05:'FC05 – Запись катушки', fc06:'FC06 – Запись регистра', fc16:'FC16 – Запись нескольких',
  btnEdit:'Редактировать', btnSave:'Сохранить', btnDelete:'Удалить',
  btnLoad:'Добавить в открытые', btnDelSaved:'Удалить сохранение',
  noSaved:'Нет сохранённых окон',
  renamed:'переименовано', updated:'настройки обновлены',
  'wsOk':'WebSocket подключён',
  'wsDisconn':'WebSocket отключён. Переподключение...',
  'wsError':'Ошибка WebSocket. Проверьте сервер.',
  'notConn':'Не подключено!',
  'logSaved':'Файл лога сохранён на сервере',
  'windowAdded':'Новое окно опроса добавлено',
  'windowRemoved':'Окно удалено',
  'logEmpty':'Лог пустой!',
  'connectedMode':'Подключено',
  'newPollTitle':'Новое окно опроса',
  'editPollTitle':'✏ Редактировать окно опроса',
  'connCancel':'Отмена',
  'connOk':'Подключить',
  'ascSlaveId':'Slave ID:',
  'titleTooltip':'Добавить новое окно',
  // Server log messages
  'conn.connectingTcp':'Подключение Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP подключён: {host}:{port}',
  'conn.connectingRtu':'Подключение Modbus RTU: {port} @ {baud} бод...',
  'conn.rtuOk':'✓ Modbus RTU подключён: {port}',
  'conn.failed':'✗ Подключение не удалось: {err}',
  'conn.closed':'Соединение закрыто.',
  'conn.notConnected':'Не подключено!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} рег. OK ({latency}мс)',
  'write.ok':'← RX [FC{fc}] Запись успешна',
  'err.connRefused':'Подключение отклонено - проверьте IP и порт',
  'err.connReset':'Соединение сброшено',
  'err.hostUnreachable':'Хост недоступен',
  addWindow:'+ Окно',
  windowDefault:'Окно 1',
  windowDefault2:'Окно 2',
  addChart:'+ Добавить график',
  clearAll:'Очистить всё',
  chartSlave:'Slave:',
  chartReg:'Рег:',
  chartFormat:'Формат:',
  chartName:'Имя:',
  chartYmin:'Y мин:',
  chartYmax:'Y макс:',
  chartLog:'Лог:',
  chartLogStart:'⏺ Начать',
  chartLogStop:'⏹ Стоп',
  chartDownload:'⬇ Скачать',
  chartClear:'Очистить',
  chartCursor:'✛ Курсор',
  chartWaiting:'Ожидание данных...',
  chartRemove:'✕',
  writeFormat:'Формат:',
  writeRegisters:'Регистры:',
  namePlaceholder:'Имя...',
  descPlaceholder:'Добавить описание...',
  'chartEmpty':'Запустите опрос для сбора данных графика...',
  'clearChart':'Очистить',
  'error':'Ошибка',
  'downloadLog':'⬇ Скачать',
  'langTitle':'Выбрать язык',
  'writeOk':'Запись успешна',
  'address':'адрес',
},

pt: {
  name:'Português', flag:'🇵🇹',
  connect:'Conectar', disconnect:'Desconectar',
  start:'▶ Iniciar', stop:'⏹ Parar',
  license:'🔑 Licença',
  notConnected:'Não conectado', connected:'Conectado', connecting:'Conectando...',
  address:'Endereço:', quantity:'Quantidade:', slaveId:'Slave ID', interval:'Intervalo',
  tabRegisters:'Registros', tabChart:'Gráfico', tabWrite:'Escrever',
  colAddress:'Endereço', colOffset:'Offset', colDecimal:'Decimal', colHex:'Hex', colBinary:'Binário', colAscii:'ASCII', colDescription:'Descrição', colStatus:'Status',
  pollWindows:'Janelas poll',
  savedSection:'💾 Salvo',
  watchRegister:'Ver registro:', name:'Nome:',
  yMin:'Y mín:', yMax:'Y máx:',
  pause:'⏸ Pausar', resume:'▶ Retomar', crosshair:'✛ Cursor', clear:'Limpar',
  logFile:'Arquivo log:', startLog:'⏺ Iniciar log', stopLog:'⏹ Parar log',
  download:'⬇ Baixar',
  writeTitle:'✏ Escrever registro Modbus', function_:'Função:',
  regAddress:'Endereço registro:', value:'Valor (dec):', values:'Valores (vírgula):',
  sendCmd:'Enviar comando →',
  txrxLog:'Log TX/RX', clearLog:'Limpar',
  errors:'Erros', latency:'Latência', device:'Dispositivo',
  connSettings:'Config. conexão',
  ipAddress:'Endereço IP:', port:'Porta:', timeout:'Timeout (ms):',
  serialPort:'Porta serial:', baudRate:'Velocidade:', parity:'Paridade:',
  dataBits:'Bits dados:', stopBits:'Bits parada:',
  parityNone:'Nenhuma (N)', parityEven:'Par (E)', parityOdd:'Ímpar (O)',
  tcpHint:'Para dispositivos Modbus TCP',
  rtuHint:'Serial RS-485/RS-232',
  asciiHint:'Protocolo Modbus ASCII',
  cancel:'Cancelar', add:'Adicionar', save:'Salvar',
  newWindow:'Nova janela poll', editWindow:'Editar janela poll', windowName:'Nome:',
  paused:'⏸ PAUSADO',
  fc05:'FC05 – Escrever bobina', fc06:'FC06 – Escrever registro', fc16:'FC16 – Escrever múltiplos',
  btnEdit:'Editar configurações', btnSave:'Salvar', btnDelete:'Remover',
  btnLoad:'Adicionar às janelas abertas', btnDelSaved:'Excluir salvo',
  noSaved:'Nenhuma janela salva',
  renamed:'renomeado', updated:'configurações atualizadas',
  'wsOk':'WebSocket conectado',
  'wsDisconn':'WebSocket desconectado. Reconectando...',
  'wsError':'Erro WebSocket. Verificar servidor.',
  'notConn':'Não conectado!',
  'logSaved':'Arquivo log salvo no servidor',
  'windowAdded':'Nova janela poll adicionada',
  'windowRemoved':'Janela removida',
  'logEmpty':'Log está vazio!',
  'connectedMode':'Conectado',
  'newPollTitle':'Nova janela poll',
  'editPollTitle':'✏ Editar janela poll',
  'connCancel':'Cancelar',
  'connOk':'Conectar',
  'ascSlaveId':'Slave ID:',
  'titleTooltip':'Adicionar nova janela',
  // Server log messages
  'conn.connectingTcp':'Conectando Modbus TCP: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP conectado: {host}:{port}',
  'conn.failed':'✗ Conexão falhou: {err}',
  'conn.closed':'Conexão fechada.',
  'conn.notConnected':'Não conectado!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} regs OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] Escrita OK',
  'err.connRefused':'Conexão recusada - verifique IP e porta',
  addWindow:'+ Janela',
  windowDefault:'Janela 1',
  windowDefault2:'Janela 2',
  addChart:'+ Adicionar gráfico',
  clearAll:'Limpar tudo',
  chartSlave:'Escravo:',
  chartReg:'Reg:',
  chartFormat:'Formato:',
  chartName:'Nome:',
  chartYmin:'Y mín:',
  chartYmax:'Y máx:',
  chartLog:'Log:',
  chartLogStart:'⏺ Iniciar',
  chartLogStop:'⏹ Parar',
  chartDownload:'⬇ Baixar',
  chartClear:'Limpar',
  chartCursor:'✛ Cursor',
  chartWaiting:'Aguardando dados...',
  chartRemove:'✕',
  writeFormat:'Formato:',
  writeRegisters:'Registros:',
  namePlaceholder:'Nome...',
  descPlaceholder:'Adicionar descrição...',
},

ur: {
  name:'اردو', flag:'🇵🇰',
  connect:'جوڑیں', disconnect:'منقطع',
  start:'▶ شروع', stop:'⏹ روکیں',
  license:'🔑 لائسنس',
  notConnected:'منسلک نہیں', connected:'منسلک', connecting:'جوڑا جا رہا ہے...',
  address:'پتہ:', quantity:'مقدار:', slaveId:'سلیو ID', interval:'وقفہ',
  tabRegisters:'رجسٹر', tabChart:'چارٹ', tabWrite:'لکھیں',
  colAddress:'پتہ', colOffset:'آفسیٹ', colDecimal:'اعشاری', colHex:'ہیکس', colBinary:'بائنری', colAscii:'ASCII', colDescription:'تفصیل', colStatus:'حالت',
  pollWindows:'پول ونڈوز',
  savedSection:'💾 محفوظ شدہ',
  watchRegister:'رجسٹر دیکھیں:', name:'نام:',
  yMin:'Y کم:', yMax:'Y زیادہ:',
  pause:'⏸ توقف', resume:'▶ جاری', crosshair:'✛ کرسر', clear:'صاف',
  logFile:'لاگ فائل:', startLog:'⏺ لاگ شروع', stopLog:'⏹ لاگ بند',
  download:'⬇ ڈاؤنلوڈ',
  writeTitle:'✏ Modbus رجسٹر لکھیں', function_:'فنکشن:',
  regAddress:'رجسٹر پتہ:', value:'قدر (اعشاری):', values:'قدریں (کوما):',
  sendCmd:'کمانڈ بھیجیں →',
  txrxLog:'TX/RX لاگ', clearLog:'صاف',
  errors:'غلطیاں', latency:'تاخیر', device:'آلہ',
  connSettings:'کنکشن سیٹنگز',
  ipAddress:'IP پتہ:', port:'پورٹ:', timeout:'ٹائم آؤٹ (ms):',
  serialPort:'سیریل پورٹ:', baudRate:'بود ریٹ:', parity:'پیرٹی:',
  dataBits:'ڈیٹا بٹس:', stopBits:'اسٹاپ بٹس:',
  parityNone:'کوئی نہیں (N)', parityEven:'جفت (E)', parityOdd:'طاق (O)',
  tcpHint:'Modbus TCP آلات کے لیے',
  rtuHint:'RS-485/RS-232 سیریل',
  asciiHint:'Modbus ASCII پروٹوکول',
  cancel:'منسوخ', add:'شامل کریں', save:'محفوظ کریں',
  newWindow:'نئی پول ونڈو', editWindow:'پول ونڈو ترمیم', windowName:'نام:',
  paused:'⏸ رکا ہوا',
  fc05:'FC05 – کوائل لکھیں', fc06:'FC06 – رجسٹر لکھیں', fc16:'FC16 – متعدد لکھیں',
  btnEdit:'ترتیبات ترمیم', btnSave:'محفوظ کریں', btnDelete:'ہٹائیں',
  btnLoad:'کھلی ونڈو میں شامل کریں', btnDelSaved:'محفوظ حذف کریں',
  noSaved:'کوئی محفوظ ونڈو نہیں',
  renamed:'نام تبدیل ہوا', updated:'ترتیبات اپڈیٹ ہوئیں',
  'wsOk':'WebSocket منسلک',
  'wsDisconn':'WebSocket منقطع۔ دوبارہ جوڑا جا رہا ہے...',
  'wsError':'WebSocket خرابی۔ سرور چیک کریں۔',
  'notConn':'منسلک نہیں!',
  'logSaved':'لاگ فائل سرور پر محفوظ',
  'windowAdded':'نئی پول ونڈو شامل ہوئی',
  'windowRemoved':'ونڈو ہٹا دی گئی',
  'logEmpty':'لاگ خالی ہے!',
  'connectedMode':'منسلک',
  'newPollTitle':'نئی پول ونڈو',
  'editPollTitle':'✏ پول ونڈو ترمیم',
  'connCancel':'منسوخ',
  'connOk':'جوڑیں',
  'ascSlaveId':'سلیو ID:',
  'chartEmpty':'چارٹ ڈیٹا جمع کرنے کے لیے پولنگ شروع کریں...',
  'clearChart':'صاف',
  'downloadLog':'⬇ ڈاؤنلوڈ',
  'langTitle':'زبان منتخب کریں',
  'writeOk':'لکھنا کامیاب',
  'address':'پتہ',
  'titleTooltip':'نئی ونڈو شامل کریں',
  // Server log messages
  'conn.connectingTcp':'Modbus TCP سے جوڑ رہے ہیں: {host}:{port}...',
  'conn.tcpOk':'✓ Modbus TCP منسلک: {host}:{port}',
  'conn.failed':'✗ کنکشن ناکام: {err}',
  'conn.closed':'کنکشن بند۔',
  'conn.notConnected':'منسلک نہیں!',
  'poll.rxOk':'← RX [FC{fc}] {quantity} رجسٹر OK ({latency}ms)',
  'write.ok':'← RX [FC{fc}] لکھنا کامیاب',
  addWindow:'+ ونڈو',
  windowDefault:'ونڈو 1',
  windowDefault2:'ونڈو 2',
  addChart:'+ چارٹ شامل کریں',
  clearAll:'سب صاف کریں',
  chartSlave:'سلیو:',
  chartReg:'رجسٹر:',
  chartFormat:'فارمیٹ:',
  chartName:'نام:',
  chartYmin:'Y کم:',
  chartYmax:'Y زیادہ:',
  chartLog:'لاگ:',
  chartLogStart:'⏺ شروع',
  chartLogStop:'⏹ روکیں',
  chartDownload:'⬇ ڈاؤنلوڈ',
  chartClear:'صاف کریں',
  'error':'خطا',
  chartCursor:'✛ کرسر',
  chartWaiting:'ڈیٹا کا انتظار...',
  chartRemove:'✕',
  writeFormat:'فارمیٹ:',
  writeRegisters:'رجسٹر:',
  namePlaceholder:'نام...',
  descPlaceholder:'تفصیل شامل کریں...',
},

};

const RTL_LANGS = ['ar', 'ur'];
let currentLang = localStorage.getItem('modscan_lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS['et'])[key] || TRANSLATIONS['et'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('modscan_lang', lang);
  // Salvesta ka cookie-sse litsentsilehe jaoks
  document.cookie = 'modscan_lang=' + lang + ';path=/;max-age=31536000';
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  document.body.style.direction = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  applyTranslations();
}

function applyTranslations() {
  const L = TRANSLATIONS[currentLang] || TRANSLATIONS['et'];

  setText('connectBtn', L.connect);
  setText('disconnectBtn', L.disconnect);
  setLabel('lbl-address', L.address);
  setLabel('lbl-quantity', L.quantity);
  setLabel('lbl-slaveid', L.slaveId);
  setLabel('lbl-interval', L.interval);
  const pollBtn = document.getElementById('pollBtn');
  if (pollBtn) setText('pollBtn', pollBtn.textContent.includes('⏹') ? L.stop : L.start);
  setText('licenseBtn', L.license);

  setTabText('regs', L.tabRegisters);
  setTabText('chart', L.tabChart);
  setTabText('write', L.tabWrite);

  setTh(0, L.colAddress); setTh(1, L.colOffset); setTh(2, L.colDecimal);
  setTh(3, L.colHex); setTh(4, L.colBinary); setTh(5, L.colAscii);
  setTh(6, '32-bit Signed'); setTh(7, '32-bit Unsigned'); setTh(8, '64-bit Signed'); setTh(9, '64-bit Unsigned'); setTh(10, L.colDescription);

  setLabel('lbl-poll-windows', L.pollWindows);

  const savedHdr = document.getElementById('savedSectionTitle');
  if (savedHdr) savedHdr.textContent = L.savedSection;

  setLabel('lbl-watch-reg', L.watchRegister);
  setLabel('lbl-name', L.name);
  setLabel('lbl-ymin', L.yMin);
  setLabel('lbl-ymax', L.yMax);
  const pauseBtn = document.getElementById('chartPauseBtn');
  if (pauseBtn) setText('chartPauseBtn', pauseBtn.textContent.includes('▶') ? L.resume : L.pause);
  setLabel('lbl-logfile', L.logFile);
  updateLogBtn();

  setInnerHTML('writeTitle', L.writeTitle);
  setLabel('lbl-wfunction', L.function_);
  setLabel('lbl-waddr', L.regAddress);
  setLabel('lbl-wval', L.value);
  setLabel('lbl-wvals', L.values);
  setText('writeBtn', L.sendCmd);

  setLabel('lbl-txrx', L.txrxLog);
  setLabel('lbl-clearlog', L.clearLog);
  setLabel('lbl-st-errors', L.errors);
  setLabel('lbl-st-latency', L.latency);
  setLabel('lbl-st-device', L.device);

  setLabel('lbl-conn-settings', L.connSettings);
  setLabel('lbl-tcp-ip', L.ipAddress);
  setLabel('lbl-tcp-port', L.port);
  setLabel('lbl-tcp-slaveid', L.slaveId);
  setLabel('lbl-tcp-timeout', L.timeout);
  setLabel('lbl-rtu-port', L.serialPort);
  setLabel('lbl-rtu-baud', L.baudRate);
  setLabel('lbl-rtu-parity', L.parity);
  setLabel('lbl-rtu-data', L.dataBits);
  setLabel('lbl-rtu-stop', L.stopBits);
  setLabel('lbl-rtu-slaveid', L.slaveId);

  setOption('rtuParity', 'none', L.parityNone);
  setOption('rtuParity', 'even', L.parityEven);
  setOption('rtuParity', 'odd', L.parityOdd);

  setLabel('hint-tcp', L.tcpHint);
  setLabel('hint-rtu', L.rtuHint);
  setLabel('hint-ascii', L.asciiHint);

  setLabel('lbl-np-name', L.windowName);
  setLabel('lbl-np-fc', L.function_);
  setLabel('lbl-np-addr', L.address);
  setLabel('lbl-np-qty', L.quantity);

  setOption('wFc', '5', L.fc05);
  setOption('wFc', '6', L.fc06);
  setOption('wFc', '16', L.fc16);

  const connLabel = document.getElementById('connLabel');
  if (connLabel) {
    const isNotConn = Object.values(TRANSLATIONS).some(tr => tr.notConnected === connLabel.textContent);
    if (isNotConn) connLabel.textContent = L.notConnected;
  }

  // Edit modal labels
  setLabel('lbl-ep-name', L.windowName);
  setLabel('lbl-ep-fc', L.function_);
  setLabel('lbl-ep-addr', L.address);
  setLabel('lbl-ep-qty', L.quantity);
  setLabel('lbl-ep-slaveid', L.slaveId);
  setText('epCancelBtn', L.cancel);
  setText('epSaveBtn', L.save);
  setLabel('ep-modal-title', L.editWindow);

  // New poll modal buttons
  setText('npCancelBtn', L.cancel);
  setText('npAddBtn', L.add);

  // No saved text (re-render if visible)
  const noSavedEl = document.getElementById('noSavedText');
  if (noSavedEl) noSavedEl.textContent = L.noSaved;

  // Chart panel buttons
  const addChartBtn = document.getElementById('addChartBtn');
  if (addChartBtn) addChartBtn.textContent = L.addChart || '+ Add chart';
  const clearAllBtn = document.getElementById('clearAllChartsBtn');
  if (clearAllBtn) clearAllBtn.textContent = L.clearAll || 'Clear all';

  // Write panel
  setLabel('lbl-wformat', L.writeFormat || 'Format:');
  setLabel('lbl-wregs',   L.writeRegisters || 'Registers:');

  // Chart pause button
  updateChartPauseBtn();

  // Re-render chart series list to pick up new language
  if (typeof renderChartSeriesList === 'function') renderChartSeriesList();

  // Modal titles
  setText('np-modal-title', L.newPollTitle);
  setText('ep-modal-title', L.editPollTitle);

  // Connect modal buttons
  setText('connCancelBtn', L.connCancel);
  setText('connConnectBtn', L.connOk);

  // ASCII slave ID label
  setLabel('lbl-asc-slaveid', L.ascSlaveId);

  // Add window tooltip
  const addBtn = document.getElementById('addWindowBtn');
  if (addBtn) addBtn.title = L.titleTooltip;

  // Chart buttons
  setText('clearChartBtn', L.clearChart);
  setText('downloadBtn', L.downloadLog);
  setText('crosshairBtn', L.crosshair);

  // Chart pause button - check current state
  const pauseBtn2 = document.getElementById('chartPauseBtn');
  if (pauseBtn2) {
    const isPaused = pauseBtn2.textContent.includes('▶') ||
      Object.values(TRANSLATIONS).some(tr => tr.resume && pauseBtn2.textContent.includes(tr.resume.replace('▶ ','')));
    pauseBtn2.textContent = isPaused ? L.resume : L.pause;
  }

  // Log button - check current state
  updateLogBtn();

  // Poll button - check current state
  const pollBtn2 = document.getElementById('pollBtn');
  if (pollBtn2) {
    const isPolling = Object.values(TRANSLATIONS).some(tr => tr.stop && pollBtn2.textContent === tr.stop);
    if (isPolling) pollBtn2.textContent = L.stop;
    else {
      const isStart = Object.values(TRANSLATIONS).some(tr => tr.start && pollBtn2.textContent === tr.start);
      if (isStart) pollBtn2.textContent = L.start;
    }
  }

  // Lang selector title
  const langSel = document.getElementById('langSel');
  if (langSel) langSel.title = L.langTitle;

  // Edit poll cancel button
  setText('epCancelBtn', L.cancel);

  // Toolbar add window button
  setText('addWindowToolbarBtn', L.addWindow || '+ Window');

  // New poll modal default name placeholder
  const npNameInput = document.getElementById('npName');
  if (npNameInput) npNameInput.placeholder = L.namePlaceholder || 'Name...';

  // ASCII port label
  setLabel('lbl-asc-port', L.serialPort);

  // Write FC options
  setOption('wFc', '5', L.fc05);
  setOption('wFc', '6', L.fc06);
  setOption('wFc', '16', L.fc16);

  // Toolbar elements
  setText('writeBtn', L.sendCmd);
  setLabel('lbl-clearlog', L.clearLog);
  setLabel('lbl-watch-reg', L.watchRegister);
  setText('connectBtn', L.connect);

  // Connection status label
  const connLbl = document.getElementById('connLabel');
  if (connLbl) {
    if (typeof S !== 'undefined' && S.connected && S.connInfo) {
      // Ühendus aktiivne - uuenda koos keelega
      const modeLabels = {tcp:'TCP', rtu:'RTU', ascii:'ASCII'};
      connLbl.textContent = `${L.connectedMode || L.connected} (${modeLabels[S.connInfo.mode]||''})`;
    } else {
      // Pole ühendatud
      const allVals = Object.values(TRANSLATIONS);
      const isNotConn = allVals.some(tr => tr.notConnected === connLbl.textContent);
      if (isNotConn) connLbl.textContent = L.notConnected;
    }
  }

  // Joonista graafik uuesti kui see on nähtaval (chartEmpty tekst uueneb)
  setTimeout(() => {
    if (typeof drawChart === 'function') {
      const chartTab = document.getElementById('tab-chart');
      if (chartTab && !chartTab.classList.contains('hidden')) drawChart();
    }
    // Uuenda registrite kirjeldused tabelis
    if (typeof refreshTableDescs === 'function') refreshTableDescs();
  }, 0);
}

function setText(id, text) { const e = document.getElementById(id); if (e) e.textContent = text; }
function setInnerHTML(id, html) { const e = document.getElementById(id); if (e) e.innerHTML = html; }
function setLabel(id, text) { const e = document.getElementById(id); if (e) e.textContent = text; }
function setTabText(tab, text) { const e = document.querySelector(`[data-tab="${tab}"]`); if (e) e.textContent = text; }
function setTh(idx, text) { const ths = document.querySelectorAll('#tab-regs th'); if (ths[idx]) ths[idx].textContent = text; }
function setOption(selId, val, text) { const s = document.getElementById(selId); if (!s) return; const o = s.querySelector(`option[value="${val}"]`); if (o) o.textContent = text; }
function updateLogBtn() {
  const btn = document.getElementById('logStartBtn');
  if (!btn) return;
  const L = TRANSLATIONS[currentLang] || TRANSLATIONS['et'];
  btn.textContent = btn.classList.contains('red') ? L.stopLog : L.startLog;
}
