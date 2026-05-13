# ModScan — EXE Ehitamine

## Eeldused
- Node.js 18 LTS (https://nodejs.org)
- Windows 10/11 x64

## Sammud

### 1. Paigalda sõltuvused
```
npm install
```

### 2a. Käivita arendusrežiimis (ilma EXE-ta)
```
npm run electron
```

### 2b. Ehita installer EXE (soovitatud)
```
npm run build-installer
```
Tulemus: `dist/ModScan Setup 1.0.0.exe`

### 2c. Ehita portable EXE (üks fail, ei vaja installimist)
```
npm run build-portable
```
Tulemus: `dist/ModScan-portable.exe`

## Märkused
- Esimene `npm install` võtab ~2-5 minutit (laadib Electroni ~150MB)
- EXE ehitamine võtab ~1-2 minutit
- Lõplik installer on ~80-120MB
- Portable EXE on ~150-200MB

## Veebiversiooni käivitamine (ilma Electronita)
```
npm start
```
Ava brauser: http://localhost:8765
