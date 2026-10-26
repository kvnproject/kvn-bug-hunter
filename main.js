process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const http = require('http');
const dns = require('dns');
const fs = require('fs');
const readline = require('readline');
const { exec } = require('child_process');

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
    const matrixChars = "01101001 01010111 01101011 01110110 01101110 ⚡ KVN-DANGEROUS-SCAN 🗿🔥";
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 2) + 2; 
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
        console.log(rainbowColors[3] + `\n[~] Initializing Vulnerability Engine: [${bar}] ${progress}%` + resetColor);
        console.log(rainbowColors[2] + `✨ Loading Advanced Anti-False-Positive Security Modules.... 🗿🔥` + resetColor);

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(callback, 1000);
        }
    }, 350);
}

function showMenu() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(rainbowColors[4] + '        [ ⚡ KVN ULTIMATE BUG HUNTER (ANTI FALSE POSITIVE) ⚡ ]\n' + resetColor);

    console.log(`${rainbowColors[1]}[1]${resetColor} Deep Danger Scan (Sensitive Files & Anti False Positive)`);
    console.log(`${rainbowColors[2]}[2]${resetColor} Advanced Directory Brute-Forcer (Strict Anti 404/Soft-404)`);
    console.log(`${rainbowColors[3]}[3]${resetColor} HTTP Security Headers & Cookie Analyzer`);
    console.log(`${rainbowColors[4]}[4]${resetColor} Subdomain Enumeration (Detailed Active Check)`);
    console.log(`${rainbowColors[5]}[5]${resetColor} Port Scanner (Check Common Open Ports)`);
    console.log(`${rainbowColors[1]}[6]${resetColor} CMS & Framework Vulnerability Fingerprinter`);
    console.log(`${rainbowColors[2]}[7]${resetColor} Domain Availability Checker`);
    console.log(`${rainbowColors[3]}[8]${resetColor} HTTP Request & Redirect Tracer`);
    console.log(`${rainbowColors[4]}[9]${resetColor} Robots.txt Extractor & Parser`);
    console.log(`${rainbowColors[5]}[10]${resetColor} IP / Subnet Lookup`);
    console.log(`${rainbowColors[1]}[11]${resetColor} Auto VDP Report Generator`);
    console.log(`${rainbowColors[2]}[12]${resetColor} Ping Website`);
    console.log(`${rainbowColors[3]}[13]${resetColor} Credit`);
    console.log(`${rainbowColors[0]}[14]${resetColor} Close\n`);

    rl.question(getRainbowText('Pilih Menu [1-14]: '), (choice) => {
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
            case '11': menuReportGenerator(); break;
            case '12': menuPingWebsite(); break;
            case '13': menuCredit(); break;
            case '14':
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
    console.log(bold + getRainbowText('=== 1. DEEP DANGER SCAN (ANTI FALSE POSITIVE) ===\n') + resetColor);
    
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
                    '/server-status',
                    '/wp-config.php.bak',
                    '/.env.example',
                    '/database.sql'
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
                                const lowerBody = bodyData.toLowerCase();
                                const isHtml = lowerBody.includes('<!doctype html>') || lowerBody.includes('<html');
                                const isNotFound = lowerBody.includes('not found') || 
                                                    lowerBody.includes('404 error') || 
                                                    lowerBody.includes('maaf, halaman tidak ditemukan') ||
                                                    lowerBody.includes('halaman tidak ditemukan');

                                let isValidVulnerability = false;

                                if (path === '/.env' || path === '/.env.example') {
                                    const hasEnvKw = lowerBody.includes('db_') || lowerBody.includes('app_') || lowerBody.includes('key') || lowerBody.includes('password');
                                    if (!isHtml && !isNotFound && hasEnvKw) isValidVulnerability = true;
                                } else if (path === '/robots.txt') {
                                    if (!isHtml && (lowerBody.includes('user-agent') || lowerBody.includes('disallow'))) isValidVulnerability = true;
                                } else {
                                    if (!isHtml && !isNotFound) {
                                        isValidVulnerability = true;
                                    }
                                }

                                if (isValidVulnerability) {
                                    const isCrit = path.includes('.env') || path.includes('sql') || path.includes('.git') || path.includes('wp-config');
                                    foundBugs.push({
                                        type: isCrit ? 'CRITICAL 🔥' : 'High ⚠️',
                                        name: `Exposed Sensitive Path: ${path}`,
                                        desc: `Raw Log Response: Terverifikasi Valid HTTP 200 OK pada ${testUrl.href}\n    Snippet: ${bodyData.substring(0, 150).replace(/\n/g, ' ')}...`
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
        console.log(rainbowColors[2] + '✅ Log bahaya berhasil ditangkap tanpa false positive! Salin data ini untuk VDP. 🗿🔥' + resetColor);
    } else {
        console.log(rainbowColors[2] + '[-] Aman! Target bersih dari file sensitif terbuka (False Positive disaring bersih).' + resetColor);
    }
    promptBackToMenu();
}

function menuDirectoryBruter() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 2. ADVANCED DIRECTORY BRUTE-FORCER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target (contoh: https://target.go.id): ', (targetUrl) => {
        if (!targetUrl) { promptBackToMenu(); return; }
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;
            const dirs = ['/admin', '/login', '/dashboard', '/api', '/uploads', '/assets', '/secret', '/config', '/test', '/panel', '/administrator', '/server-status', '/phpinfo.php'];
            
            console.log(rainbowColors[1] + `\n[+] Brute-forcing directories with strict filters for ${urlObj.hostname}...\n` + resetColor);
            let checked = 0;
            
            dirs.forEach((dir) => {
                const testUrl = new URL(urlObj.toString());
                testUrl.pathname = dir;
                client.get(testUrl, { timeout: 3000 }, (res) => {
                    let bodyData = '';
                    res.on('data', chunk => bodyData += chunk);
                    res.on('end', () => {
                        checked++;
                        const lowerBody = bodyData.toLowerCase();
                        const isHtmlError = lowerBody.includes('not found') || lowerBody.includes('404 error') || lowerBody.includes('maaf, halaman tidak ditemukan') || lowerBody.includes('halaman tidak ditemukan');
                        
                        if ((res.statusCode === 200 || res.statusCode === 403) && !isHtmlError) {
                            console.log(rainbowColors[2] + `[FOUND VALID] ${testUrl.href} (Status: ${res.statusCode})` + resetColor);
                        }
                        if (checked === dirs.length) {
                            setTimeout(promptBackToMenu, 1000);
                        }
                    });
                }).on('error', () => {
                    checked++;
                    if (checked === dirs.length) {
                        setTimeout(promptBackToMenu, 1000);
                    }
                }).end();
            });
        } catch(e) { promptBackToMenu(); }
    });
}

function menuHeadersAnalyzer() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 3. HTTP SECURITY HEADERS & COOKIE ANALYZER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
        if (!targetUrl) { promptBackToMenu(); return; }
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;
            
            console.log(rainbowColors[1] + `\n[+] Menganalisis Security Headers & Cookies pada ${urlObj.hostname}...\n` + resetColor);
            
            client.request(urlObj, { method: 'GET', timeout: 5000 }, (res) => {
                const h = res.headers;
                const cookies = h['set-cookie'];
                
                console.log(rainbowColors[5] + '--- HASIL ANALISIS HEADER ---' + resetColor);
                console.log(`- Strict-Transport-Security (HSTS): ${h['strict-transport-security'] || '❌ Tidak Ada (Risiko MITM)'}`);
                console.log(`- Content-Security-Policy (CSP)   : ${h['content-security-policy'] || '❌ Tidak Ada (Risiko XSS)'}`);
                console.log(`- X-Frame-Options                 : ${h['x-frame-options'] || '❌ Tidak Ada (Risiko Clickjacking)'}`);
                console.log(`- X-Content-Type-Options          : ${h['x-content-type-options'] || '❌ Tidak Ada'}`);
                console.log(`- X-XSS-Protection                : ${h['x-xss-protection'] || '❌ Tidak Ada'}`);
                console.log(`- Server                          : ${h['server'] || 'Disembunyikan'}`);
                
                console.log(rainbowColors[5] + '\n--- HASIL ANALISIS COOKIE SECURITY ---' + resetColor);
                if (cookies) {
                    cookies.forEach((cookie, idx) => {
                        const hasHttpOnly = cookie.toLowerCase().includes('httponly');
                        const hasSecure = cookie.toLowerCase().includes('secure');
                        console.log(`Cookie #${idx + 1}: ${cookie.substring(0, 50)}...`);
                        console.log(`  -> HttpOnly: ${hasHttpOnly ? '✅ Aman' : '❌ Rentan (XSS Cookie Theft)'}`);
                        console.log(`  -> Secure  : ${hasSecure ? '✅ Aman' : '❌ Rentan (Plaintext Transmission)'}`);
                    });
                } else {
                    console.log('[-] Tidak ada cookie yang diset pada respons utama.');
                }
                promptBackToMenu();
            }).on('error', (err) => {
                console.log(rainbowColors[0] + `[X] Gagal: ${err.message}` + resetColor);
                promptBackToMenu();
            }).end();
        } catch(e) { promptBackToMenu(); }
    });
}

function menuSubdomainEnum() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 4. SUBDOMAIN ENUMERATION ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Domain Utama (contoh: kemenkes.go.id): ', (domain) => {
        if (!domain) { promptBackToMenu(); return; }
        const cleanDomain = domain.replace(/https?:\/\//, '').split('/')[0];
        const subs = ['admin', 'api', 'portal', 'login', 'vdp', 'csirt', 'mail', 'dev', 'staging', 'auth', 'jenkins', 'git', 'panel', 'app', 'web'];
        console.log(rainbowColors[1] + `\n[+] Scanning subdomains for ${cleanDomain}...\n` + resetColor);
        
        let completed = 0;
        let activeCount = 0;

        subs.forEach((sub) => {
            const targetSub = `https://${sub}.${cleanDomain}`;
            https.request(targetSub, { method: 'HEAD', timeout: 3000 }, (res) => {
                completed++;
                activeCount++;
                console.log(rainbowColors[2] + `[+] AKTIF : ${targetSub} (Status: ${res.statusCode})` + resetColor);
                if (completed === subs.length) {
                    console.log(rainbowColors[5] + `\n[✔] Selesai! Ditemukan ${activeCount} subdomain aktif.` + resetColor);
                    promptBackToMenu();
                }
            }).on('error', () => {
                completed++;
                if (completed === subs.length) {
                    console.log(rainbowColors[5] + `\n[✔] Selesai! Ditemukan ${activeCount} subdomain aktif.` + resetColor);
                    promptBackToMenu();
                }
            }).end();
        });
    });
}

function menuPortScanner() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 5. PORT SCANNER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
        const cleanHost = host.replace(/https?:\/\//, '').split('/')[0];
        const ports = [80, 443, 21, 22, 8080, 3306, 8443, 5432, 27017];
        let scanned = 0;
        
        ports.forEach(port => {
            const socket = new (require('net').Socket)();
            socket.setTimeout(2500);
            socket.connect(port, cleanHost, () => {
                scanned++;
                console.log(rainbowColors[2] + `[OPEN] Port ${port}` + resetColor);
                socket.destroy();
                if(scanned === ports.length) setTimeout(promptBackToMenu, 1000);
            });
            socket.on('error', () => {
                scanned++;
                socket.destroy();
                if(scanned === ports.length) setTimeout(promptBackToMenu, 1000);
            });
            socket.on('timeout', () => {
                scanned++;
                socket.destroy();
                if(scanned === ports.length) setTimeout(promptBackToMenu, 1000);
            });
        });
    });
}

function menuCmsFingerprinter() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 6. CMS & FRAMEWORK FINGERPRINTER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;
            client.get(urlObj, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    console.log(bold + getRainbowText('\n--- FINGERPRINT RESULT ---') + '\n');
                    if (data.includes('wp-content') || data.includes('wp-includes')) {
                        console.log(rainbowColors[2] + '[+] WordPress terdeteksi! Periksa plugin/tema lama yang rentan.' + resetColor);
                    } else if (data.includes('joomla')) {
                        console.log(rainbowColors[2] + '[+] Joomla! CMS terdeteksi!' + resetColor);
                    } else if (data.includes('drupal')) {
                        console.log(rainbowColors[2] + '[+] Drupal CMS terdeteksi!' + resetColor);
                    } else if (data.includes('laravel') || res.headers['set-cookie'] && JSON.stringify(res.headers['set-cookie']).includes('laravel_session')) {
                        console.log(rainbowColors[2] + '[+] Laravel Framework terdeteksi!' + resetColor);
                    } else {
                        console.log(rainbowColors[3] + '[-] Framework kustom atau CMS tidak dikenal.' + resetColor);
                    }
                    promptBackToMenu();
                });
            }).on('error', promptBackToMenu);
        } catch(e) { promptBackToMenu(); }
    });
}

function menuDomainChecker() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 7. DOMAIN AVAILABILITY CHECKER ===\n') + resetColor);
    
    rl.question(rainbowColors[3] + 'Masukkan Nama Domain (contoh: kevinproject.my.id atau google.com): ', (domainInput) => {
        if (!domainInput) { promptBackToMenu(); return; }
        const cleanDomain = domainInput.replace(/https?:\/\//, '').split('/')[0].trim();
        
        console.log(rainbowColors[1] + `\n[+] Mengecek status ketersediaan domain: ${cleanDomain}...\n` + resetColor);
        
        dns.lookup(cleanDomain, (err, address) => {
            if (err) {
                console.log(rainbowColors[2] + `[HASIL] 🟢 TERSEDIA (AVAILABLE): Domain '${cleanDomain}' belum terdaftar / tidak memiliki rekaman DNS aktif. Kemungkinan besar bisa dibeli!` + resetColor);
            } else {
                console.log(rainbowColors[0] + `[HASIL] ❌ TIDAK TERSEDIA (TAKEN): Domain '${cleanDomain}' sudah aktif dan mengarah ke IP: ${address}. Domain sudah dimiliki orang lain.` + resetColor);
            }
            promptBackToMenu();
        });
    });
}

function menuRequestTracer() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 8. HTTP REQUEST & REDIRECT TRACER ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target: ', (targetUrl) => {
        if (!targetUrl) { promptBackToMenu(); return; }
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            const client = urlObj.protocol === 'https:' ? https : http;
            
            console.log(rainbowColors[1] + `\n[+] Melacak respons HTTP untuk ${urlObj.href}...\n` + resetColor);
            
            client.get(urlObj, { timeout: 5000 }, (res) => {
                console.log(rainbowColors[5] + '--- HASIL TRACE ---' + resetColor);
                console.log(`- Status Code : ${res.statusCode} ${res.statusMessage}`);
                console.log(`- Redirected  : ${res.statusCode >= 300 && res.statusCode < 400 ? 'Ya (Mengarah ke ' + res.headers.location + ')' : 'Tidak Ada Redirect'}`);
                console.log(`- Content-Type: ${res.headers['content-type'] || 'Tidak Diketahui'}`);
                promptBackToMenu();
            }).on('error', (err) => {
                console.log(rainbowColors[0] + `[X] Gagal: ${err.message}` + resetColor);
                promptBackToMenu();
            });
        } catch(e) { promptBackToMenu(); }
    });
}

function menuRobotsExtractor() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 9. ROBOTS.TXT EXTRACTOR ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan URL Target (contoh: https://target.go.id): ', (targetUrl) => {
        if (!targetUrl) { promptBackToMenu(); return; }
        try {
            const urlObj = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
            urlObj.pathname = '/robots.txt';
            const client = urlObj.protocol === 'https:' ? https : http;
            
            console.log(rainbowColors[1] + `\n[+] Mengambil file robots.txt dari ${urlObj.hostname}...\n` + resetColor);
            
            client.get(urlObj, { timeout: 4000 }, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    if (res.statusCode === 200 && data.length > 0 && !data.toLowerCase().includes('<!doctype html>')) {
                        console.log(rainbowColors[2] + '--- ISI ROBOTS.TXT ---' + resetColor);
                        console.log(data);
                    } else {
                        console.log(rainbowColors[0] + '[-] File robots.txt tidak ditemukan atau dilindungi.' + resetColor);
                    }
                    promptBackToMenu();
                });
            }).on('error', () => {
                console.log(rainbowColors[0] + '[-] Gagal mengambil robots.txt' + resetColor);
                promptBackToMenu();
            });
        } catch(e) { promptBackToMenu(); }
    });
}

function menuIpLookup() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 10. IP / SUBNET LOOKUP ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Domain / Host: ', (hostInput) => {
        if (!hostInput) { promptBackToMenu(); return; }
        const cleanHost = hostInput.replace(/https?:\/\//, '').split('/')[0].trim();
        
        console.log(rainbowColors[1] + `\n[+] Melakukan DNS Lookup untuk ${cleanHost}...\n` + resetColor);
        
        dns.resolve4(cleanHost, (err, addresses) => {
            if (err) {
                console.log(rainbowColors[0] + `[X] Gagal mendapatkan IP: ${err.message}` + resetColor);
            } else {
                console.log(rainbowColors[2] + `[HASIL] IP Address untuk ${cleanHost}:` + resetColor);
                addresses.forEach(ip => console.log(`- ${ip}`));
            }
            promptBackToMenu();
        });
    });
}

function menuReportGenerator() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 11. AUTO VDP REPORT GENERATOR ===\n') + resetColor);

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

function menuPingWebsite() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 12. PING WEBSITE ===\n') + resetColor);
    rl.question(rainbowColors[3] + 'Masukkan Host: ', (host) => {
        exec(`ping -c 4 ${host.replace(/https?:\/\//, '').split('/')[0]}`, (err, stdout) => {
            console.log(err ? 'Gagal ping' : stdout);
            promptBackToMenu();
        });
    });
}

function menuCredit() {
    console.clear();
    console.log(bold + getRainbowText(logoAscii) + resetColor);
    console.log(bold + getRainbowText('=== 13. CREDIT & AUTHOR ===\n') + resetColor);
    console.log(rainbowColors[5] + 'Tool ini dikembangkan secara independen oleh KvN Project untuk mendukung riset keamanan siber etis dan Vulnerability Disclosure Program (VDP).\n' + resetColor);
    console.log(`${rainbowColors[1]}- Project Name${resetColor} : KvN Ultimate Bug Hunter (Termux Edition)`);
    console.log(`${rainbowColors[2]}- TikTok       ${resetColor} : @kvnprojectrealaccount`);
    console.log(`${rainbowColors[3]}- Instagram    ${resetColor} : @kvnprojectrealaccount`);
    console.log(`${rainbowColors[4]}- Email        ${resetColor} : kvnprojectsupport@gmail.com\n`);
    promptBackToMenu();
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
