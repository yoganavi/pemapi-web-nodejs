# Client Logos — Pending Written Consent

## Kenapa file ini di sini

Logo klien di folder ini sebelumnya di-serve di section "Klien Kami" pada [`frontend/views/home.ejs`](../../views/home.ejs), tetapi **PEMAPI belum mendapat izin tertulis** dari perusahaan pemilik logo untuk penggunaan komersial di website.

Menampilkan logo perusahaan lain tanpa izin merupakan potensi risiko:
- Klaim trademark infringement
- Klaim implied endorsement
- Klien tidak nyaman logo mereka digunakan tanpa persetujuan

Karena `_archive/` berada **di luar** `public/`, file-file di sini **tidak lagi dapat diakses** melalui URL publik. `express.static('public')` di [`app.js:21`](../../app.js:21) hanya melayani file di dalam `public/`.

## Yang menggantikan section ini

Section logo di `home.ejs` telah diganti dengan **testimonial cards berbasis teks** dari 6 klien yang sudah mengisi survey kepuasan (Desember 2025) — consent untuk publikasi telah dikonfirmasi.

## Cara mengembalikan salah satu logo

Untuk setiap logo yang ingin dikembalikan:

1. Dapatkan izin tertulis dari perusahaan pemilik logo (email atau surat resmi cukup).
2. Simpan bukti izin di lokasi yang aman (mis. Google Drive company folder).
3. Pindahkan file dari `_archive/client-logos-pending-consent/` ke `frontend/public/img/logo/`:
   ```
   git mv frontend/_archive/client-logos-pending-consent/[filename] frontend/public/img/logo/
   ```
4. Update `home.ejs` untuk merender logo tersebut, atau tambahkan section "Logo Klien" baru.

## File dalam folder ini

| File | Klien | Industri |
|------|-------|----------|
| astra-world.png | Astra World | Otomotif |
| cimb-niaga-digital-lounge.jpg | CIMB Niaga Digital Lounge | Perbankan |
| logo-pt-sumber-usaha-jaya.jpg | PT Sumber Usaha Jaya | Distribusi |
| minoshe.png | Minoshe | Retail |
| mothercare-logo.webp | Mothercare | Retail |
| the-park.jpg | The Park (Cinema XXI location) | Entertainment |
| undip.png | Universitas Diponegoro | Pendidikan |
| wei-kang.png | PT Wei Kang Medical | Healthcare |

**Note:** PT Wei Kang Medical dan Cinema XXI (The Park) telah memberikan testimonial dengan consent — tapi consent untuk logo terpisah dari consent untuk testimonial. Perlu izin logo terpisah sebelum menggunakan kembali file gambarnya.
