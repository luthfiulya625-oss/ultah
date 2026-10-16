TEMPLATE WEBSITE KADO ULANG TAHUN
=================================

Isi folder:
- index.html: dua halaman (amplop pembuka dan surat + empat foto polaroid)
- css/style.css: desain responsif dan animasi
- js/script.js: alur halaman, interaksi polaroid, dan kontrol musik
- assets/images/: gambar placeholder yang bisa diganti dengan foto sendiri
- assets/music/melodi-ulang-tahun.wav: melodi instrumental orisinal yang benar-benar bisa diputar
- vendor/bootstrap/: Bootstrap 5.0.2 lokal dari file Bootstrap yang disediakan

CARA MENGGANTI KONTEN
1. Ganti foto utama:
   Simpan foto milikmu di assets/images/ dengan nama foto-utama.jpg (atau nama lain),
   lalu ubah src gambar di index.html menjadi nama file tersebut.
2. Ganti empat foto polaroid:
   Ubah src foto1.svg, foto2.svg, foto3.svg, foto4.svg ke file foto milikmu.
   Pastikan file berada di assets/images/.
3. Ganti teks:
   Buka index.html lalu ubah [Nama Penerima], [Namamu], isi ucapan, caption polaroid,
   dan tulisan pembuka.
4. Ganti musik:
   Simpan file audio yang penggunaannya kamu izinkan ke assets/music/lagu.mp3,
   lalu pada index.html ubah source audio menjadi:
   <source src="assets/music/lagu.mp3" type="audio/mpeg">
   Melodi WAV bawaan adalah melodi instrumental orisinal sederhana, bukan rekaman lagu populer.
5. Jalankan:
   Buka index.html di browser. Untuk pengembangan, lebih nyaman pakai VS Code + Live Server.
6. Hosting:
   Unggah isi folder proyek ke layanan hosting statis seperti Netlify atau GitHub Pages.
   Setelah memperoleh URL publik, buat QR code dari URL itu. Tes QR code dengan HP sebelum dicetak.

CATATAN
- Bootstrap disertakan secara lokal; halaman tidak perlu mengambil Bootstrap dari CDN.
- Google Fonts pada CSS memerlukan internet. Jika offline, font akan fallback ke font sistem.
- QR code hanya menyimpan URL, bukan isi website. Website harus online agar QR code bisa dibuka.
- Jangan unggah data sensitif atau foto pribadi tanpa izin.
