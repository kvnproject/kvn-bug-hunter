//SCRIPT BY KVN PROJECT FOR FREE
const https = require('https');
const http = require('http');
const fs = require('fs');
const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rainbowColors = [
    '\x1b[31m', // Red
    '\x1b[33m', // Yellow
    '\x1b[32m', // Green
    '\x1b[36m', // Cyan
    '\x1b[34m', // Blue
    '\x1b[35m', // Magenta
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
    const matrixChars = "01101001 01010111 01101011 01110110 01101110 ⚡ KVN-DANGEROUS-SCAN 🗿🔥";
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;

        const barWidth = 30;
        const filled = Math.floor((progress / 100) * barWidth);
        const empty = barWidth - filled;
        const bar = '█'.repeat(filled) + '-'.repeat(empty);

        let randomNoise = '';
        for(let i=0; i<3; i++) {
            randomNoise += rainbowColors[Math.floor(Math.random() * rainbowColors.length)] + matrixChars.substring(Math.floor(Math.random()*20), Math.floor(Math.random()*40)) + ' ';
        }

        console.clear();
        console.log(bold + getRainbowText(logoAscii));
        console.log(dim + randomNoise + resetColor);
        console.log(rainbowColors[3] + `\n[~] Initializing Vulnerability Engine: [${bar}] ${progress}%` + resetColor);
        console.log(rainbowColors[2] + `✨ Loading Deep Recon & Exploit Payloads.... 🗿🔥` + resetColor);

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(callback, 800);
        }
    }, 70);
}

function showMenu() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(rainbowColors[4] + '        [ ⚡ KVN ULTIMATE DANGEROUS BUG HUNTER ⚡ ]\n' + resetColor);

    console.log(`${rainbowColors[1]}[1]${resetColor} Deep Danger Scan (Cek Celah Berbahaya & Sensitive Files)`);
    console.log(`${rainbowColors[2]}[2]${resetColor} Subdomain Enumeration (Scan Common Subdomains)`);
    console.log(`${rainbowColors[3]}[3]${resetColor} Port Scanner (Check Common Open Ports)`);
    console.log(`${rainbowColors[4]}[4]${resetColor} CMS Vulnerability Fingerprinter`);
    console.log(`${rainbowColors[5]}[5]${resetColor} Auto VDP Report Generator (Buat Draf Laporan Bug)`);
    console.log(`${rainbowColors[1]}[6]${resetColor} Credit`);
    console.log(`${rainbowColors[3]}[7]${resetColor} Ping Website`);
    console.log(`${rainbowColors[0]}[8]${resetColor} Close\n`);

    rl.question(getRainbowText('Pilih Menu [1-8]: '), (choice) => {
        switch(choice.trim()) {
            case '1': menuDeepDangerScan(); break;
            case '2': menuSubdomainEnum(); break;
            case '3': menuPortScanner(); break;
            case '4': menuCmsFingerprinter(); break;
            case '5': menuReportGenerator(); break;
            case '6': menuCredit(); break;
            case '7': menuPingWebsite(); break;
            case '8':
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

function menuDeepDangerScan() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 1. DEEP DANGER SCAN (CRITICAL & HIGH BUGS) ===\n') + resetColor);
    
    rl.question(rainbowColors[3] + 'Masukkan Link Target (contoh: https://target.go.id): ', (targetUrl) => {
        if (!targetUrl) { promptBackToMenu(); return; }

        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;

            console.log(rainbowColors[1] + `\n[+] Menjalankan Deep Danger Scan ke: ${urlObj.hostname}...`);
            console.log(rainbowColors[5] + `[~] Memeriksa Security Headers, Direktori Sensitif, dan File Konfigurasi Berbahaya...\n` + resetColor);

            const req = client.request(urlObj, { method: 'GET', timeout: 7000 }, (res) => {
                let foundBugs = [];
                const headers = res.headers;

                if (!headers['strict-transport-security']) foundBugs.push({ type: 'Low', name: 'Missing HSTS Header', desc: 'Raw Response: HSTS header tidak ditemukan.' });
                if (!headers['content-security-policy']) foundBugs.push({ type: 'Medium', name: 'Missing CSP (Cross-Site Scripting Risk)', desc: 'Raw Response: Header CSP kosong, rentan injeksi script.' });
                if (headers['x-powered-by']) foundBugs.push({ type: 'Medium', name: 'Information Disclosure (X-Powered-By)', desc: `Raw Response: X-Powered-By: ${headers['x-powered-by']}` });

                const dangerousPaths = [
                    '/robots.txt',
                    '/.env',
                    '/.git/config',
                    '/config.json',
                    '/phpinfo.php',
                    '/backup.sql',
                    '/server-status'
                ];

                let checkedCount = 0;

                dangerousPaths.forEach((path) => {
                    const testUrl = new URL(urlObj.toString());
                    testUrl.pathname = path;
                    const subClient = testUrl.protocol === 'https:' ? https : http;

                    subClient.get(testUrl, { timeout: 4000 }, (subRes) => {
                        let bodyData = '';
                        subRes.on('data', chunk => bodyData += chunk);
                        subRes.on('end', () => {
                            checkedCount++;

                            if (subRes.statusCode === 200 && bodyData.length > 0) {
                                if (!bodyData.toLowerCase().includes('not found') && !bodyData.toLowerCase().includes('404 error')) {
                                    foundBugs.push({
                                        type: path === '/.env' || path === '/backup.sql' || path === '/.git/config' ? 'CRITICAL 🔥' : 'High ⚠️',
                                        name: `Exposed Sensitive Path: ${path}`,
                                        desc: `Raw Log Response: HTTP Status 200 OK pada ${testUrl.href}\n    Snippet: ${bodyData.substring(0, 150).replace(/\n/g, ' ')}...`
                                    });
                                }
                            }

                            if (checkedCount === dangerousPaths.length) {
                                printScanResults(urlObj.hostname, res.statusCode, foundBugs);
                            }
                        });
                    }).on('error', () => {
                        checkedCount++;
                        if (checkedCount === dangerousPaths.length) {
                            printScanResults(urlObj.hostname, res.statusCode, foundBugs);
                        }
                    });
                });

            });

            req.on('error', (err) => {
                console.log(rainbowColors[0] + `[X] Gagal terhubung: ${err.message}` + resetColor);
                promptBackToMenu();
            });
            req.end();

        } catch (e) {
            console.log(rainbowColors[0] + `[X] URL tidak valid!` + resetColor);
            setTimeout(menuDeepDangerScan, 2000);
        }
    });
}

function printScanResults(host, statusCode, bugs) {
    console.log(bold + getRainbowText('\n==================================================') + resetColor);
    console.log(bold + getRainbowText(`           HASIL RAW LOG SCAN: ${host}             `) + resetColor);
    console.log(bold + getRainbowText('==================================================') + resetColor);
    console.log(`HTTP Status Code: ${statusCode}\n`);

    if (bugs.length > 0) {
        bugs.forEach((bug, index) => {
            console.log(rainbowColors[0] + `[!] TEMUAN BUG #${index + 1} [${bug.type}]` + resetColor);
            console.log(`    Nama Bug : ${bug.name}`);
            console.log(`    Detail   : ${bug.desc}\n`);
        });
        console.log(rainbowColors[2] + '✅ Log bahaya berhasil ditangkap langsung di Termux! Salin data ini untuk laporan VDP. 🗿🔥' + resetColor);
    } else {
        console.log(rainbowColors[2] + '[-] Tidak ditemukan file sensitif terbuka atau isu header kritikal pada sampel jalur utama.' + resetColor);
    }
    promptBackToMenu();
}

function menuSubdomainEnum() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 2. SUBDOMAIN ENUMERATION ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Domain Utama (contoh: kemenkes.go.id): ', (domain) => {
        if (!domain) { promptBackToMenu(); return; }
        const cleanDomain = domain.replace(/https?:\/\//, '').split('/')[0];
        const subs = ['admin', 'api', 'portal', 'login', 'vdp', 'csirt', 'mail', 'dev', 'staging', 'auth'];
        console.log(rainbowColors[1] + `\n[+] Scanning subdomains for ${cleanDomain}...\n` + resetColor);
        subs.forEach((sub) => {
            const targetSub = `https://${sub}.${cleanDomain}`;
            https.request(targetSub, { method: 'HEAD', timeout: 3000 }, (res) => {
                console.log(rainbowColors[2] + `[+] AKTIF : ${targetSub} (Status: ${res.statusCode})` + resetColor);
            }).on('error', () => {}).end();
        });
        setTimeout(promptBackToMenu, 4000);
    });
}

function menuPortScanner() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 3. PORT SCANNER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
        const cleanHost = host.replace(/https?:\/\//, '').split('/')[0];
        [80, 443, 21, 22, 8080, 3306].forEach(port => {
            const socket = new (require('net').Socket)();
            socket.setTimeout(2500);
            socket.connect(port, cleanHost, () => {
                console.log(rainbowColors[2] + `[OPEN] Port ${port}` + resetColor);
                socket.destroy();
            });
            socket.on('error', () => socket.destroy());
            socket.on('timeout', () => socket.destroy());
        });
        setTimeout(promptBackToMenu, 3500);
    });
}

function menuCmsFingerprinter() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 4. CMS VULNERABILITY FINGERPRINTER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;
            client.get(urlObj, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    console.log(bold + getRainbowText('\n--- FINGERPRINT RESULT ---') + '\n');
                    if (data.includes('wp-content')) {
                        console.log(rainbowColors[2] + '[+] WordPress terdeteksi! Periksa plugin/tema lama yang rentan.' + resetColor);
                    } else if (data.includes('joomla')) {
                        console.log(rainbowColors[2] + '[+] Joomla! terdeteksi!' + resetColor);
                    } else {
                        console.log(rainbowColors[3] + '[-] Framework kustom atau CMS tidak dikenal.' + resetColor);
                    }
                    promptBackToMenu();
                });
            }).on('error', promptBackToMenu);
        } catch(e) { promptBackToMenu(); }
    });
}

function menuReportGenerator() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 5. AUTO VDP REPORT GENERATOR ===\n') + resetColor);

    rl.question(rainbowColors[3] + 'Nama Target (contoh: target.go.id): ', (targetName) => {
        rl.question(rainbowColors[3] + 'Jenis Bug / Vulnerability (contoh: Exposed .env file / SQLi): ', (bugName) => {
            rl.question(rainbowColors[3] + 'Severity (Low / Medium / High / Critical): ', (severity) => {
                
                const reportContent = `# Vulnerability Disclosure Report
                
## Target Information
- **Target URL:** https://${targetName}
- **Date Discovered:** ${new Date().toLocaleDateString()}
- **Hunter / Researcher:** KvN Project

## Vulnerability Details
- **Vulnerability Type:** ${bugName}
- **Severity Level:** ${severity}

## Description & Impact
Ditemukan kerentanan berupa ${bugName} pada sistem target. Hal ini memungkinkan pihak luar untuk mengakses informasi sensitif atau memanipulasi alur aplikasi.

## Steps to Reproduce (PoC / Raw Log)
1. Lakukan pemindaian direktori menggunakan KvN Bug Hunter Tool di Termux.
2. Akses endpoint terkait dan verifikasi respons data mentah.

## Remediation / Suggested Fix
Segera tutup akses publik ke file sensitif dan terapkan validasi ketat pada server web.

---
*Generated automatically by KvN Bug Hunter Tool (Termux Edition)*
`;

                const fileName = `vdp_report_${targetName.replace(/[^a-z0-9]/gi, '_')}.md`;
                fs.writeFileSync(fileName, reportContent);

                console.log(rainbowColors[2] + `\n[+] Sukses! Laporan berhasil disimpan: ${fileName}` + resetColor);
                promptBackToMenu();
            });
        });
    });
}

function menuCredit() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 6. CREDIT KVN PROJECT ===\n') + resetColor);
    console.log(`${rainbowColors[1]}1. Tiktok    :${resetColor} @kvnproject`);
    console.log(`${rainbowColors[2]}2. Instagram :${resetColor} @kvnproject`);
    console.log(`${rainbowColors[3]}3. Email     :${resetColor} kvnproject@gmail.com\n`);
    promptBackToMenu();
}

function menuPingWebsite() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 7. PING WEBSITE ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
        exec(`ping -c 4 ${host.replace(/https?:\/\//, '').split('/')[0]}`, (err, stdout) => {
            console.log(err ? 'Gagal ping' : stdout);
            promptBackToMenu();
        });
    });
}

function promptBackToMenu() {
    rl.question('\nTekan [Enter] untuk kembali ke menu utama...', () => {
        showMenu();
    });
}

startLoading(showMenu);
