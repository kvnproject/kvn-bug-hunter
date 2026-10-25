# ⚡ KvN Ultimate Bug Hunter (Termux Edition)

CLI tool interaktif berbasis Node.js dengan tema pelangi dan logo ASCII kustom untuk keperluan *Reconnaissance*, *Danger Vulnerability Scanning*, dan *Automated VDP Report Generation*.

## 🚀 Fitur Utama
1. **Deep Danger Scan**: Deteksi header keamanan hilang serta file sensitif berbahaya (`.env`, `.git/config`, `backup.sql`, dll).
2. **Subdomain Enumeration**: Pemindaian subdomain aktif secara asinkron.
3. **Port Scanner**: Pengecekan port TCP umum yang terbuka pada server target.
4. **CMS Vulnerability Fingerprinter**: Deteksi platform web (WordPress, Joomla, dll).
5. **Auto VDP Report Generator**: Otomatis membuat draf laporan format Markdown (`.md`) siap kirim ke tim CSIRT/Pemerintah.
6. **Network Tools**: HTTP Banner Grabbing, Robots.txt Harvester, Security Grade Calculator, dan Ping.

## 📥 Cara Instalasi & Menjalankan di Termux
```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
git clone https://github.com/kvnproject/kvn-bug-hunter
cd kvn-bug-hunter
node main.js
