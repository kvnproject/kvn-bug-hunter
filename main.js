process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const http = require('http');
const dns = require('dns');
const readline = require('readline');
const { exec } = require('child_process');
const os = require('os');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rainbowColors = [
    '\x1b[31m', 
    '\x1b[33m', 
    '\x1b[32m', 
    '\x1b[36m', 
    '\x1b[34m', 
    '\x1b[35m', 
];
const resetColor = '\x1b[0m';
const bold = '\x1b[1m';
const dim = '\x1b[2m';

function getRainbowText(text) {
    return text.split('').map((char, index) => {
        const color = rainbowColors[index % rainbowColors.length];
        return `${color}${char}`;
    }).join('') + resetColor;
}

const logoAscii = `
  _  __          _   _ _____           _           _   
 | |/ /         | \ | |  __ \         (_)         | |  
 | ' /___  _ __ |  \| | |__) | __ ___  _  ___  ___| |_ 
 |  < / _ \| '_ \| . \ |  ___/ '__/ _ \| |/ _ \/ __| __|
 | . \ (_) | | | | |\  | |   | | | (_) | |  __/ (__| |_ 
 |_|\_\___/|_| |_|_| \_|_|   |_|  \___/| |\___|\___|\__|
                                      _/ |              
                                     |__/               
`;

function startLoading(callback) {
    console.clear();
    let progress = 0;
    const matrixChars = "01101001 01010111 01101011 01110110 01101110 ⚡ KVN-ULTIMATE-30 🗿🔥";
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 4) + 2; 
        if (progress > 100) progress = 100;

        const barWidth = 30;
        const filled = Math.floor((progress / 100) * barWidth);
        const empty = barWidth - filled;
        const bar = '█'.repeat(filled) + '-'.repeat(empty);

        let randomNoise = '';
        for(let i = 0; i < 3; i++) {
            randomNoise += rainbowColors[Math.floor(Math.random() * rainbowColors.length)] + matrixChars.substring(Math.floor(Math.random() * 20), Math.floor(Math.random() * 40)) + ' ';
        }

        console.clear();
        console.log(bold + getRainbowText(logoAscii));
        console.log(dim + randomNoise + resetColor);
        console.log(rainbowColors[3] + `\n[~] Initializing 30 Pro Modules: [${bar}] ${progress}%` + resetColor);
        console.log(rainbowColors[2] + `✨ Loading Ultimate Security Engine & Rich View.... 🗿🔥` + resetColor);

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(callback, 1000);
        }
    }, 150);
}

function showMenu() {
    console.clear();
    const currentTime = new Date().toLocaleTimeString();
    const deviceName = os.hostname() || 'Termux-Device';
    const platformName = os.platform();

    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(rainbowColors[4] + '╔════════════════════════════════════════════════════════════════╗' + resetColor);
    console.log(rainbowColors[4] + '║       ⚡ KVN ULTIMATE BUG HUNTER [v2.0 30 PRO MODULES] ⚡      ║' + resetColor);
    console.log(rainbowColors[4] + '╠════════════════════════════════════════════════════════════════╣' + resetColor);
    console.log(rainbowColors[2] + `║ Device : ${deviceName.padEnd(20)} | Time: ${currentTime.padEnd(12)} ║` + resetColor);
    console.log(rainbowColors[2] + `║ OS     : ${platformName.padEnd(20)} | Ver : v2.0 ULTIMATE     ║` + resetColor);
    console.log(rainbowColors[4] + '╚════════════════════════════════════════════════════════════════╝\n' + resetColor);

    console.log(`${rainbowColors[1]}[1]${resetColor} Deep Danger Scan          -> ${dim}Scan file sensitif (.env, .git) anti false-positive${resetColor}`);
    console.log(`${rainbowColors[2]}[2]${resetColor} Advanced Directory Brute  -> ${dim}Cek direktori tersembunyi (Admin/Panel)${resetColor}`);
    console.log(`${rainbowColors[3]}[3]${resetColor} Security Headers & Cookie -> ${dim}Analisis HSTS, CSP, dan keamanan Cookie${resetColor}`);
    console.log(`${rainbowColors[4]}[4]${resetColor} Subdomain Enumeration     -> ${dim}Pindai subdomain aktif target secara akurat${resetColor}`);
    console.log(`${rainbowColors[5]}[5]${resetColor} Multi-Port Scanner        -> ${dim}Cek port terbuka (Web, Database, SSH)${resetColor}`);
    console.log(`${rainbowColors[1]}[6]${resetColor} CMS & Framework Detector  -> ${dim}Identifikasi WordPress, Laravel, Joomla, dll${resetColor}`);
    console.log(`${rainbowColors[2]}[7]${resetColor} Domain Availability Check -> ${dim}Cek status domain aktif atau bisa dibeli${resetColor}`);
    console.log(`${rainbowColors[3]}[8]${resetColor} HTTP Request & Tracer     -> ${dim}Lacak status kode, redirect, & tipe konten${resetColor}`);
    console.log(`${rainbowColors[4]}[9]${resetColor} Robots.txt Extractor      -> ${dim}Sedot isi file robots.txt target${resetColor}`);
    console.log(`${rainbowColors[5]}[10]${resetColor} IP & Subnet Lookup        -> ${dim}Resolusi DNS & cek alamat IP server${resetColor}`);
    console.log(`${rainbowColors[1]}[11]${resetColor} SSL Certificate Inspector -> ${dim}Periksa masa aktif & penerbit sertifikat SSL${resetColor}`);
    console.log(`${rainbowColors[2]}[12]${resetColor} HTTP Methods Permitted    -> ${dim}Cek metode HTTP yang diizinkan (GET, POST, PUT)${resetColor}`);
    console.log(`${rainbowColors[3]}[13]${resetColor} Clickjacking Risk Checker -> ${dim}Cek proteksi frame iframe target${resetColor}`);
    console.log(`${rainbowColors[4]}[14]${resetColor} Email Header Leak Checker -> ${dim}Cek informasi pembocor email server${resetColor}`);
    console.log(`${rainbowColors[5]}[15]${resetColor} Backup File Hunter        -> ${dim}Cek file arsip (.zip, .bak, .tar.gz) nyasar${resetColor}`);
    console.log(`${rainbowColors[1]}[16]${resetColor} API Endpoint Fuzzing      -> ${dim}Cek jalur API umum (/api/v1, /graphql)${resetColor}`);
    console.log(`${rainbowColors[2]}[17]${resetColor} Server Software Fingerprint-> ${dim}Deteksi jenis web server (Nginx, Apache, IIS)${resetColor}`);
    console.log(`${rainbowColors[3]}[18]${resetColor} Cloudflare Detection      -> ${dim}Cek apakah target dilindungi Cloudflare WAF${resetColor}`);
    console.log(`${rainbowColors[4]}[19]${resetColor} CORS Misconfiguration Scan-> ${dim}Cek kerentanan Cross-Origin Resource Sharing${resetColor}`);
    console.log(`${rainbowColors[5]}[20]${resetColor} Security TXT Extractor    -> ${dim}Cek file /security.txt untuk kontak VDP${resetColor}`);
    console.log(`${rainbowColors[1]}[21]${resetColor} HTTP Response Time Checker-> ${dim}Uji kecepatan respons server dalam milidetik${resetColor}`);
    console.log(`${rainbowColors[2]}[22]${resetColor} Subresource Integrity Scan-> ${dim}Cek atribut integrity pada tag eksternal script${resetColor}`);
    console.log(`${rainbowColors[3]}[23]${resetColor} Host Header Injection Scan-> ${dim}Uji kerentanan manipulasi header Host${resetColor}`);
    console.log(`${rainbowColors[4]}[24]${resetColor} Web Framework Version Scan-> ${dim}Cek versi framework lewat header/meta tag${resetColor}`);
    console.log(`${rainbowColors[5]}[25]${resetColor} Open Redirect Detector    -> ${dim}Cek parameter pengalihan URL yang tidak aman${resetColor}`);
    console.log(`${rainbowColors[1]}[26]${resetColor} Source Code Leak Finder   -> ${dim}Cek file cadangan editor (.swp, ~)\\${resetColor}`);
    console.log(`${rainbowColors[2]}[27]${resetColor} Favicon Hash Analyzer     -> ${dim}Identifikasi teknologi target via hash favicon${resetColor}`);
    console.log(`${rainbowColors[3]}[28]${resetColor} Ping Website              -> ${dim}Uji latensi / koneksi server target${resetColor}`);
    console.log(`${rainbowColors[4]}[29]${resetColor} Credit & About            -> ${dim}Informasi pembuat tool${resetColor}`);
    console.log(`${rainbowColors[0]}[30]${resetColor} Close Application         -> ${dim}Keluar dari program${resetColor}\n`);

    rl.question(getRainbowText('Pilih Menu [1-30]: '), (choice) => {
        console.clear();
        switch(choice.trim()) {
            case '1': menuDeepDangerScan(); break;
            case '2': menuDirectoryBruter(); break;
            case '3': menuHeadersAnalyzer(); break;
            case '4': menuSubdomainEnum(); break;
            case '5': menuPortScanner(); break;
            case '6': menuCmsFingerprinter(); break;
            case '7': menuDomainChecker(); break;
            case '8': menuRequestTracer(); break;
            case '9': menuRobotsExtractor(); break;
            case '10': menuIpLookup(); break;
            case '11': menuSslChecker(); break;
            case '12': menuHttpMethods(); break;
            case '13': menuClickjackingChecker(); break;
            case '14': menuEmailHeaderLeak(); break;
            case '15': menuBackupHunter(); break;
            case '16': menuApiFuzzing(); break;
            case '17': menuServerFingerprint(); break;
            case '18': menuCloudflareDetect(); break;
            case '19': menuCorsScan(); break;
            case '20': menuSecurityTxt(); break;
            case '21': menuResponseTime(); break;
            case '22': menuSriScan(); break;
            case '23': menuHostHeaderInjection(); break;
            case '24': menuFrameworkVersion(); break;
            case '25': menuOpenRedirect(); break;
            case '26': menuSourceLeak(); break;
            case '27': menuFaviconHash(); break;
            case '28': menuPingWebsite(); break;
            case '29': menuCredit(); break;
            case '30':
                console.log(rainbowColors[2] + '\nTerima kasih sudah pakai KvN Bug Hunter! Stay safe & ethical! 🗿✌️\n' + resetColor);
                rl.close();
                process.exit(0);
                break;
            default:
                console.log(rainbowColors[0] + '\nPilihan tidak valid bro! Coba lagi.' + resetColor);
                setTimeout(showMenu, 1500);
        }
    });
}

function renderBox(title, contentFunction) {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(rainbowColors[4] + `╔════════════════════════════════════════════════════════════════╗` + resetColor);
    console.log(rainbowColors[4] + `║ ${title.padEnd(62)} ║` + resetColor);
    console.log(rainbowColors[4] + `╚════════════════════════════════════════════════════════════════╝\n` + resetColor);
    try {
        contentFunction();
    } catch(err) {
        console.log(rainbowColors[0] + `[X] Terjadi kesalahan eksekusi: ${err.message}` + resetColor);
        promptBackToMenu();
    }
}

function menuDeepDangerScan() {
    renderBox('=== 1. DEEP DANGER SCAN (ANTI FALSE POSITIVE) ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Link Target (contoh: https://target.go.id): ', (targetUrl) => {
            if (!targetUrl) { promptBackToMenu(); return; }
            try {
                const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                console.log(rainbowColors[1] + `\n[+] Menjalankan Deep Danger Scan ke: ${urlObj.hostname}...`);
                console.log(rainbowColors[5] + `[~] Memeriksa file sensitif dengan validasi konten mendalam...\n` + resetColor);

                const req = client.request(urlObj, { method: 'GET', timeout: 7000 }, (res) => {
                    let foundBugs = [];
                    const headers = res.headers;
                    if (!headers['strict-transport-security']) foundBugs.push({ type: 'Low', name: 'Missing HSTS Header', desc: 'HSTS header tidak ditemukan.' });
                    if (!headers['content-security-policy']) foundBugs.push({ type: 'Medium', name: 'Missing CSP', desc: 'Header CSP kosong, rentan XSS.' });

                    const dangerousPaths = ['/robots.txt', '/.env', '/.git/config', '/config.json', '/phpinfo.php', '/backup.sql'];
                    let checkedCount = 0;

                    dangerousPaths.forEach((path) => {
                        const testUrl = new URL(urlObj.toString());
                        testUrl.pathname = path;
                        const subClient = testUrl.protocol === 'https:' ? https : http;
                        const subReq = subClient.get(testUrl, { timeout: 4000 }, (subRes) => {
                            let bodyData = '';
                            subRes.on('data', chunk => bodyData += chunk);
                            subRes.on('end', () => {
                                checkedCount++;
                                if (subRes.statusCode === 200 && bodyData.length > 0) {
                                    const lowerBody = bodyData.toLowerCase();
                                    const isHtml = lowerBody.includes('<!doctype html>') || lowerBody.includes('<html');
                                    const isNotFound = lowerBody.includes('not found') || lowerBody.includes('404 error');
                                    if (!isHtml && !isNotFound) {
                                        foundBugs.push({ type: 'CRITICAL 🔥', name: `Exposed Path: ${path}`, desc: `Valid HTTP 200 pada ${testUrl.href}` });
                                    }
                                }
                                if (checkedCount === dangerousPaths.length) printScanResults(urlObj.hostname, res.statusCode, foundBugs);
                            });
                        });
                        subReq.on('error', () => {
                            checkedCount++;
                            if (checkedCount === dangerousPaths.length) printScanResults(urlObj.hostname, res.statusCode, foundBugs);
                        });
                        subReq.end();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function printScanResults(host, statusCode, bugs) {
    console.log(`\n[ Hasil Scan: ${host} | Status: ${statusCode} ]`);
    if (bugs.length > 0) {
        bugs.forEach((b, i) => {
            console.log(rainbowColors[0] + `\n[!] TEMUAN #${i+1} [${b.type}]` + resetColor);
            console.log(`    Nama : ${b.name}`);
            console.log(`    Info : ${b.desc}`);
        });
    } else {
        console.log(rainbowColors[2] + '\n[-] Aman! Tidak ada file sensitif terekspos.' + resetColor);
    }
    promptBackToMenu();
}

function menuDirectoryBruter() {
    renderBox('=== 2. ADVANCED DIRECTORY BRUTE-FORCER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
            if (!targetUrl) { promptBackToMenu(); return; }
            try {
                const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const dirs = ['/admin', '/login', '/dashboard', '/api', '/uploads', '/secret', '/panel'];
                console.log(rainbowColors[1] + `\n[+] Scanning directories for ${urlObj.hostname}...\n` + resetColor);
                let checked = 0;
                dirs.forEach(dir => {
                    const testUrl = new URL(urlObj.toString());
                    testUrl.pathname = dir;
                    const req = client.get(testUrl, { timeout: 3000 }, (res) => {
                        let body = '';
                        res.on('data', chunk => body += chunk);
                        res.on('end', () => {
                            checked++;
                            if (res.statusCode === 200 || res.statusCode === 403) {
                                console.log(rainbowColors[2] + `[FOUND] ${testUrl.href} (Status: ${res.statusCode})` + resetColor);
                            }
                            if (checked === dirs.length) promptBackToMenu();
                        });
                    });
                    req.on('error', () => { checked++; if (checked === dirs.length) promptBackToMenu(); });
                    req.end();
                });
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuHeadersAnalyzer() {
    renderBox('=== 3. SECURITY HEADERS & COOKIE ANALYZER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
            if (!targetUrl) { promptBackToMenu(); return; }
            try {
                const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.get(urlObj, { timeout: 5000 }, (res) => {
                    const h = res.headers;
                    console.log(`- HSTS : ${h['strict-transport-security'] || '❌ Tidak Ada'}`);
                    console.log(`- CSP  : ${h['content-security-policy'] || '❌ Tidak Ada'}`);
                    console.log(`- XFrame: ${h['x-frame-options'] || '❌ Tidak Ada'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuSubdomainEnum() {
    renderBox('=== 4. SUBDOMAIN ENUMERATION ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Domain Utama: ', (domain) => {
            if (!domain) { promptBackToMenu(); return; }
            const clean = domain.replace(/https?:\/\//, '').split('/')[0];
            const subs = ['admin', 'api', 'portal', 'login', 'dev', 'mail'];
            let done = 0;
            subs.forEach(sub => {
                const target = `https://${sub}.${clean}`;
                const req = https.request(target, { method: 'HEAD', timeout: 3000 }, (res) => {
                    done++;
                    console.log(rainbowColors[2] + `[AKTIF] ${target} (${res.statusCode})` + resetColor);
                    if (done === subs.length) promptBackToMenu();
                });
                req.on('error', () => { done++; if (done === subs.length) promptBackToMenu(); });
                req.end();
            });
        });
    });
}

function menuPortScanner() {
    renderBox('=== 5. MULTI-PORT SCANNER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
            const clean = host.replace(/https?:\/\//, '').split('/')[0];
            const ports = [80, 443, 21, 22, 3306, 8080];
            let scanned = 0;
            ports.forEach(p => {
                const socket = new (require('net').Socket)();
                socket.setTimeout(2000);
                socket.connect(p, clean, () => {
                    scanned++;
                    console.log(rainbowColors[2] + `[OPEN] Port ${p}` + resetColor);
                    socket.destroy();
                    if (scanned === ports.length) promptBackToMenu();
                });
                socket.on('error', () => { scanned++; socket.destroy(); if (scanned === ports.length) promptBackToMenu(); });
                socket.on('timeout', () => { scanned++; socket.destroy(); if (scanned === ports.length) promptBackToMenu(); });
            });
        });
    });
}

function menuCmsFingerprinter() {
    renderBox('=== 6. CMS & FRAMEWORK DETECTOR ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.get(urlObj, (res) => {
                    let d = '';
                    res.on('data', c => d += c);
                    res.on('end', () => {
                        if (d.includes('wp-content')) console.log(rainbowColors[2] + '[+] WordPress Terdeteksi!' + resetColor);
                        else if (d.includes('laravel')) console.log(rainbowColors[2] + '[+] Laravel Framework Terdeteksi!' + resetColor);
                        else console.log('[-] CMS tidak dikenali.');
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuDomainChecker() {
    renderBox('=== 7. DOMAIN AVAILABILITY CHECKER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Domain: ', (domain) => {
            if (!domain) { promptBackToMenu(); return; }
            const clean = domain.replace(/https?:\/\//, '').split('/')[0];
            dns.lookup(clean, (err) => {
                if (err) console.log(rainbowColors[2] + `🟢 TERSEDIA: ${clean}` + resetColor);
                else console.log(rainbowColors[0] + `❌ DIAMBIL ORANG: ${clean}` + resetColor);
                promptBackToMenu();
            });
        });
    });
}

function menuRequestTracer() {
    renderBox('=== 8. HTTP REQUEST & TRACER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.get(urlObj, (res) => {
                    console.log(`Status : ${res.statusCode}`);
                    console.log(`Content: ${res.headers['content-type']}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuRobotsExtractor() {
    renderBox('=== 9. ROBOTS.TXT EXTRACTOR ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                urlObj.pathname = '/robots.txt';
                const req = https.get(urlObj, (res) => {
                    let data = '';
                    res.on('data', c => data += c);
                    res.on('end', () => {
                        console.log(data.length > 0 ? data : '[-] Kosong.');
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuIpLookup() {
    renderBox('=== 10. IP / SUBNET LOOKUP ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
            const clean = host.replace(/https?:\/\//, '').split('/')[0];
            dns.resolve4(clean, (err, addrs) => {
                if (err) console.log('Gagal resolve IP.');
                else addrs.forEach(ip => console.log(`- IP: ${ip}`));
                promptBackToMenu();
            });
        });
    });
}

function menuSslChecker() {
    renderBox('=== 11. SSL CERTIFICATE INSPECTOR ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Domain (cth: google.com): ', (domain) => {
            const clean = domain.replace(/https?:\/\//, '').split('/')[0];
            const req = https.request({ host: clean, port: 443, method: 'GET' }, (res) => {
                const cert = res.socket.getPeerCertificate();
                if (cert && cert.valid_to) {
                    console.log(`- Issuer : ${cert.issuer.O || 'Unknown'}`);
                    console.log(`- Expired: ${cert.valid_to}`);
                } else {
                    console.log('[-] SSL info tidak ditemukan.');
                }
                promptBackToMenu();
            });
            req.on('error', () => { console.log('[-] Gagal cek SSL.'); promptBackToMenu(); });
            req.end();
        });
    });
}

function menuHttpMethods() {
    renderBox('=== 12. HTTP METHODS PERMITTED ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.request(urlObj, { method: 'OPTIONS' }, (res) => {
                    console.log(`- Allowed Methods: ${res.headers['allow'] || 'Tidak dibatasi header'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuClickjackingChecker() {
    renderBox('=== 13. CLICKJACKING RISK CHECKER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    const xFrame = res.headers['x-frame-options'];
                    console.log(`- X-Frame-Options: ${xFrame || '❌ Rentan Clickjacking (Header Tidak Ada)'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuEmailHeaderLeak() {
    renderBox('=== 14. EMAIL HEADER LEAK CHECKER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    const powered = res.headers['x-powered-by'] || res.headers['server'];
                    console.log(`- Server/Powered-By Disclosure: ${powered || 'Aman (Disembunyikan)'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuBackupHunter() {
    renderBox('=== 15. BACKUP FILE HUNTER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const backups = ['/backup.zip', '/backup.tar.gz', '/site.bak', '/db.sql'];
                let checked = 0;
                backups.forEach(b => {
                    const testUrl = new URL(urlObj.toString());
                    testUrl.pathname = b;
                    const req = https.get(testUrl, { timeout: 3000 }, (res) => {
                        checked++;
                        if (res.statusCode === 200) console.log(rainbowColors[2] + `[FOUND] ${testUrl.href}` + resetColor);
                        if (checked === backups.length) promptBackToMenu();
                    });
                    req.on('error', () => { checked++; if (checked === backups.length) promptBackToMenu(); });
                    req.end();
                });
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuApiFuzzing() {
    renderBox('=== 16. API ENDPOINT FUZZING ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const apis = ['/api/v1', '/api/users', '/graphql', '/swagger-ui.html'];
                let checked = 0;
                apis.forEach(api => {
                    const testUrl = new URL(urlObj.toString());
                    testUrl.pathname = api;
                    const req = https.get(testUrl, { timeout: 3000 }, (res) => {
                        checked++;
                        if (res.statusCode === 200 || res.statusCode === 401) {
                            console.log(rainbowColors[2] + `[ENDPOINT] ${testUrl.href} (${res.statusCode})` + resetColor);
                        }
                        if (checked === apis.length) promptBackToMenu();
                    });
                    req.on('error', () => { checked++; if (checked === apis.length) promptBackToMenu(); });
                    req.end();
                });
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuServerFingerprint() {
    renderBox('=== 17. SERVER SOFTWARE FINGERPRINT ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    console.log(`- Web Server Software: ${res.headers['server'] || 'Tidak Diketahui'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuCloudflareDetect() {
    renderBox('=== 18. CLOUDFLARE DETECTION ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    const server = (res.headers['server'] || '').toLowerCase();
                    const cfRay = res.headers['cf-ray'];
                    if (server.includes('cloudflare') || cfRay) {
                        console.log(rainbowColors[2] + '[+] Target dilindungi oleh Cloudflare WAF!' + resetColor);
                    } else {
                        console.log('[-] Cloudflare tidak terdeteksi.');
                    }
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuCorsScan() {
    renderBox('=== 19. CORS MISCONFIGURATION SCAN ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.request(urlObj, { headers: { 'Origin': 'https://evil.com' } }, (res) => {
                    const acao = res.headers['access-control-allow-origin'];
                    if (acao === '*' || acao === 'https://evil.com') {
                        console.log(rainbowColors[0] + `[!] RENTAN CORS: Access-Control-Allow-Origin diset ke '${acao}'` + resetColor);
                    } else {
                        console.log(rainbowColors[2] + '[-] CORS Aman / Dibatasi dengan benar.' + resetColor);
                    }
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuSecurityTxt() {
    renderBox('=== 20. SECURITY TXT EXTRACTOR ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                urlObj.pathname = '/.well-known/security.txt';
                const req = https.get(urlObj, (res) => {
                    let data = '';
                    res.on('data', c => data += c);
                    res.on('end', () => {
                        if (res.statusCode === 200 && data.length > 0) {
                            console.log(rainbowColors[2] + '[+] Security.txt Ditemukan:\n' + resetColor + data);
                        } else {
                            console.log('[-] File security.txt tidak tersedia.');
                        }
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuResponseTime() {
    renderBox('=== 21. HTTP RESPONSE TIME CHECKER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const start = Date.now();
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.get(urlObj, (res) => {
                    const duration = Date.now() - start;
                    console.log(`- Response Time: ${duration} ms (Status: ${res.statusCode})`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuSriScan() {
    renderBox('=== 22. SUBRESOURCE INTEGRITY SCAN ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    let html = '';
                    res.on('data', c => html += c);
                    res.on('end', () => {
                        const hasSri = html.includes('integrity=');
                        if (hasSri) {
                            console.log(rainbowColors[2] + '[+] Atribut SRI (Subresource Integrity) terdeteksi.' + resetColor);
                        } else {
                            console.log(rainbowColors[0] + '[-] Tidak ditemukan atribut SRI pada resource eksternal.' + resetColor);
                        }
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuHostHeaderInjection() {
    renderBox('=== 23. HOST HEADER INJECTION SCAN ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const client = urlObj.protocol === 'https:' ? https : http;
                const req = client.request(urlObj, { headers: { 'Host': 'evil-spoofed-host.com' } }, (res) => {
                    let body = '';
                    res.on('data', c => body += c);
                    res.on('end', () => {
                        if (body.includes('evil-spoofed-host.com')) {
                            console.log(rainbowColors[0] + '[!] POTENSI BUG: Host Header tercermin dalam respons!' + resetColor);
                        } else {
                            console.log(rainbowColors[2] + '[-] Aman dari pantulan Host Header.' + resetColor);
                        }
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuFrameworkVersion() {
    renderBox('=== 24. WEB FRAMEWORK VERSION SCAN ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const req = https.get(urlObj, (res) => {
                    const generator = res.headers['x-generator'] || res.headers['x-powered-by'];
                    console.log(`- Generator / Framework Header: ${generator || 'Tidak terekspos di header'}`);
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuOpenRedirect() {
    renderBox('=== 25. OPEN REDIRECT DETECTOR ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target (cth: https://target.com/redirect?url=): ', (url) => {
            try {
                const testUrl = new URL(url + 'https://evil.com');
                const req = https.get(testUrl, { timeout: 4000 }, (res) => {
                    if (res.statusCode >= 300 && res.statusCode < 400) {
                        const loc = res.headers['location'] || '';
                        if (loc.includes('evil.com')) {
                            console.log(rainbowColors[0] + `[!] POTENSI OPEN REDIRECT: Redirect ke ${loc}` + resetColor);
                        } else {
                            console.log(rainbowColors[2] + '[-] Redirect aman (tidak melompat ke domain luar).' + resetColor);
                        }
                    } else {
                        console.log('[-] Tidak ada respons redirect aktif.');
                    }
                    promptBackToMenu();
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuSourceLeak() {
    renderBox('=== 26. SOURCE CODE LEAK FINDER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                const files = ['/index.php.swp', '/index.php~', '/package.json', '/composer.json'];
                let checked = 0;
                files.forEach(f => {
                    const testUrl = new URL(urlObj.toString());
                    testUrl.pathname = f;
                    const req = https.get(testUrl, { timeout: 3000 }, (res) => {
                        checked++;
                        if (res.statusCode === 200) console.log(rainbowColors[2] + `[FOUND] ${testUrl.href}` + resetColor);
                        if (checked === files.length) promptBackToMenu();
                    });
                    req.on('error', () => { checked++; if (checked === files.length) promptBackToMenu(); });
                    req.end();
                });
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuFaviconHash() {
    renderBox('=== 27. FAVICON HASH ANALYZER ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (url) => {
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                urlObj.pathname = '/favicon.ico';
                const req = https.get(urlObj, (res) => {
                    let data = Buffer.alloc(0);
                    res.on('data', chunk => data = Buffer.concat([data, chunk]));
                    res.on('end', () => {
                        if (res.statusCode === 200 && data.length > 0) {
                            const crypto = require('crypto');
                            const hash = crypto.createHash('md5').update(data).digest('hex');
                            console.log(rainbowColors[2] + `[+] Favicon MD5 Hash: ${hash}` + resetColor);
                        } else {
                            console.log('[-] Favicon tidak ditemukan.');
                        }
                        promptBackToMenu();
                    });
                });
                req.on('error', () => promptBackToMenu());
                req.end();
            } catch(e) { promptBackToMenu(); }
        });
    });
}

function menuPingWebsite() {
    renderBox('=== 28. PING WEBSITE ===', () => {
        rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
            const clean = host.replace(/https?:\/\//, '').split('/')[0];
            exec(`ping -c 3 ${clean}`, (err, stdout) => {
                console.log(err ? 'Gagal ping' : stdout);
                promptBackToMenu();
            });
        });
    });
}

function menuCredit() {
    renderBox('=== 29. CREDIT & ABOUT ===', () => {
        console.log(rainbowColors[5] + 'KvN Ultimate Bug Hunter Engine v2.0 ULTIMATE\n' + resetColor);
        console.log('- Creator : KvN Project');
        console.log('- TikTok  : @kvnprojectrealaccount');
        console.log('- Status  : Professional Ethical Pentesting Tool (30 Features)\n');
        promptBackToMenu();
    });
}

function promptBackToMenu() {
    rl.question('\nTekan [Enter] untuk kembali ke menu utama...', () => {
        process.stdout.write('\x1b[2J\x1b[3J\x1b[H');
        setTimeout(() => {
            showMenu();
        }, 50);
    });
}

startLoading(showMenu);
