# ModbusPoll – Node.js WebSocket Bridge

Täisfunktsionaalne Modbus Poll tarkvara Node.js serveriga.
Toetab Modbus TCP/IP, RTU ja ASCII protokolle.

## Arhitektuur

```
Brauser (index.html)
    ↕ WebSocket (ws://localhost:8080)
Node.js Server (server.js)
    ↕ modbus-serial teek
Modbus seade (TCP / RTU / ASCII)
```

## Paigaldamine

### Eeldused
- Node.js v16 või uuem (https://nodejs.org)
- Windowsis: USB-RS485 adapter draiverid paigaldatud

### Sammud

```bash
# 1. Mine kausta
cd modbus-poll

# 2. Paigalda sõltuvused
npm install

# 3. Käivita server
npm start
```

### Ava brauseris
```
http://localhost:8080
```

## Kasutamine

### Modbus TCP/IP ühendus
1. Vajuta **"Ühenda"** nuppu
2. Vali **"Modbus TCP/IP"** sakk
3. Sisesta PLC/seadme IP-aadress (nt `192.168.1.100`)
4. Port on tavaliselt `502`
5. Slave ID on tavaliselt `1`
6. Vajuta **"Ühenda"**

### Modbus RTU ühendus (RS-485/RS-232)
1. Ühenda USB-RS485 adapter arvutiga
2. Vajuta **"Ühenda"** → vali **"Modbus RTU"**
3. Windowsis: `COM3`, `COM4` jne
4. Linuxis: `/dev/ttyUSB0`, `/dev/ttyS0` jne
5. Seadista baud rate, pariteetsus vastavalt seadmele
6. Vajuta **"Ühenda"**

### Pollimine
1. Vali funktsiooni kood (FC01–FC04)
2. Sisesta algaadress ja registrite kogus
3. Vajuta **"▶ Alusta"** – server küsitleb seadet automaatselt

### Registrisse kirjutamine
1. Ava **"Kirjuta"** sakk
2. Vali FC05/FC06/FC16
3. Sisesta registri aadress ja väärtus
4. Vajuta **"Saada käsk"**

### Graafik
1. Ava **"Graafik"** sakk
2. Sisesta jälgitava registri offset number
3. Käivita pollimine – graafik uuendab reaalajas

## Toetatud funktsioonikoodid

| Kood | Nimi | Toiming |
|------|------|---------|
| FC01 | Read Coils | Loe digitaalväljundeid |
| FC02 | Read Discrete Inputs | Loe digitaalsisendeid |
| FC03 | Read Holding Registers | Loe hoidregistreid |
| FC04 | Read Input Registers | Loe sisendregistreid |
| FC05 | Write Single Coil | Kirjuta üks digitaalväljund |
| FC06 | Write Single Register | Kirjuta üks register |
| FC16 | Write Multiple Registers | Kirjuta mitu registrit |

## Port muutmine

```bash
PORT=9090 npm start
```

## Veaotsing

**"ECONNREFUSED"** – Seade pole kättesaadav. Kontrolli IP-aadressi ja porti.

**"Timed out"** – Seade ei vasta. Kontrolli slave ID-d ja võrguühendust.

**"Modbus erind 2"** – Vale registri aadress. Seade ei toeta seda aadressi.

**COM-port ei avane** – Kontrolli, et port pole teises programmis avatud.

**Linuxis jadapordiviga** – Lisa kasutaja dialout gruppi:
```bash
sudo usermod -a -G dialout $USER
```
