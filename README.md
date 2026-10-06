# GamerStore

Web profil toko akun Mobile Legends dan Free Fire (COD).

## Cara menjalankan di VS Code
1. Buka folder `gamerstore` di VS Code (File > Open Folder).
2. Pasang ekstensi **Live Server**.
3. Klik kanan `index.html` > **Open with Live Server**.

## Yang perlu diganti
- Nomor WhatsApp, Instagram, email, dan Area COD di bagian `#kontak` pada `index.html`
- Daftar akun dan harga di bagian `#akun`
- Warna ada di bagian atas `css/style.css` (`--pink`, `--amber`)

## Struktur
- `index.html` : isi halaman
- `css/style.css` : tampilan
- `images/` : logo (ikon dan versi lengkap)

## Filter harga
- Daftar akun ada di `js/main.js` (array `akun`). Tambah atau ubah baris `{p:harga, g:"game", t:"judul", d:"detail"}`.
- Ganti `WA` di bagian atas kode filter dengan nomor WhatsApp kamu (contoh `6281234567890`).
- Pilihan harga ada di `index.html`, di form `#finder` (atribut `value` pada tiap pilihan). Pilihan "Di bawah Rp 100.000" menampilkan semua akun berharga di bawah 100 ribu.

## Foto akun
Tambahkan `img:"images/nama-foto.jpg"` pada baris akun di `js/main.js` untuk menampilkan foto. Klik foto untuk memperbesar. Kecilkan foto lebih dulu (lebar sekitar 640 px) supaya halaman ringan.
