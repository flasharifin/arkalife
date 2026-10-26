# Arkalife

Landing page Next.js App Router untuk produk awal Az-Zait Assyfa. Bahasa Indonesia, desain responsif, foto asli dari PDF, FAQ native yang dapat dioperasikan dengan keyboard, dan halaman privasi.

## Menjalankan

Gunakan Node.js 20.9 atau lebih baru.

```sh
npm ci
npm run dev
```

Buka http://localhost:3000. Untuk produksi: `npm run build` lalu `npm start`.

## Status integrasi

- WhatsApp: belum aktif; menunggu nomor dan pilihan manual/API. Tidak ada pesan yang dikirim atau follow-up otomatis.
- Meta: belum aktif; menunggu pilihan Pixel/UTM atau dashboard Marketing API. Tidak ada Pixel, cookie analitik, atau metrik iklan rekaan.
- Pembelian: harga, ukuran, stok, ongkir dan pembayaran belum dikonfirmasi. CTA mengarahkan ke informasi pemesanan; belum ada checkout.
- Vercel: belum dideploy; akses akun/proyek diperlukan.

Jangan menyamakan klik WhatsApp dengan lead atau penjualan. Integrasi otomatis membutuhkan keputusan tentang persetujuan penerima, pemicu, jadwal, penyimpanan leads, dan penyedia API. Simpan token API hanya di server; jangan gunakan `NEXT_PUBLIC_*` untuk rahasia. Perbarui halaman privasi sesuai implementasi yang benar-benar aktif.

## Deployment Vercel

Proyek memakai konfigurasi Next.js standar dan tidak membutuhkan adapter Sites/Cloudflare.

1. Pastikan informasi penjual, harga, kontak, rincian produk, dan cakupan integrasi sudah dikonfirmasi.
2. Hubungkan repository ke akun Vercel, pilih framework Next.js, root direktori proyek ini.
3. Build command `npm run build`; biarkan output directory mengikuti default Next.js.
4. Tambahkan `SITE_URL` dengan URL final (opsional sebelum domain tersedia).
5. Deploy dan uji URL hasil deployment.

Alternatif CLI setelah login: `npx vercel` untuk preview dan `npx vercel --prod` untuk produksi.

Referensi: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Vercel CLI deploy](https://vercel.com/docs/cli/deploy).

## Aset dan isi

`public/images/az-zait-assyfa.jpg` diekstrak tanpa perubahan dari gambar halaman pertama `doc/Az-Zait-Assyfa-11-halaman-Testimoni.pdf`. Ilustrasi bahan dibuat dengan CSS dan bersifat dekoratif. Tidak ada foto/testimoni pelanggan yang dipublikasikan ulang. Rujukan konteks: `doc/ARKALIFE-KNOWLEDGE.md`.

## Pengujian browser

Jalankan server pada port 3000, lalu `npm test`. Test memakai Chromium Playwright yang perlu tersedia di lingkungan lokal (`npx playwright install chromium` bila belum ada). Cakupan: navigasi, CTA pemesanan, FAQ keyboard, halaman privasi, gambar produk, overflow desktop/seluler, dan tidak adanya request tracking.
# arkalife
