# Arkalife — Pengetahuan Dasar dan Konteks Proyek

Terakhir diperbarui: 26 Oktober 2026.

Dokumen ini memindahkan konteks percakapan awal ke direktori khusus Arkalife. Gunakan sebagai referensi bisnis dan kebutuhan proyek, bukan sebagai bukti klaim kesehatan atau tanda bahwa integrasi sudah aktif.

## 1. Identitas dan arah bisnis

- Nama kerja merek/toko: **Arkalife**. Pengguna menyebut direktori khusus untuk Arkalife pada pesan terakhir.
- Produk awal: **Az-Zait Assyfa**.
- Pengguna berencana menambah produk lain; nama toko harus cukup general dan tidak terbatas pada herbal atau zaitun.
- Preferensi nama: modern, mudah diingat, memiliki unsur “Arka”, dengan nuansa seperti “Prohealty”. Nama Prohealty tidak dipakai karena menurut pengguna sudah digunakan orang lain.
- Arkalife adalah identitas toko; Az-Zait Assyfa tetap nama produk.
- Ketersediaan merek, domain, dan akun Arkalife belum diperiksa.
- Status pengguna sebagai pemilik merek produk, distributor, atau reseller belum dikonfirmasi. Jangan menyebut toko “Official” tanpa dasar.
- Percakapan awal membahas pembuatan akun Scalev. Belum ada akun yang dibuat atau integrasi Scalev yang disepakati.

## 2. Sumber produk yang telah dibaca

File sumber: `Az-Zait-Assyfa-11-halaman-Testimoni.pdf`.

Lokasi saat dibaca: `/Users/macbook/Downloads/Az-Zait-Assyfa-11-halaman-Testimoni.pdf`.

Seluruh 11 halaman telah dibaca secara visual. PDF berisi gambar tanpa lapisan teks yang dapat diekstrak langsung. Salin PDF bersama dokumen ini ke direktori baru jika ingin mempertahankan referensi aslinya; ringkasan ini tidak menyertakan gambar produk.

### Ringkasan per halaman

| Halaman | Isi |
| --- | --- |
| 1 | Foto botol dan kemasan Az-Zait Assyfa; label dominan kuning/emas dengan logo hijau serta ilustrasi zaitun, madu, dan habbatussauda. |
| 2 | Materi promosi tentang pemeliharaan kesehatan jantung/pembuluh darah, kolesterol, antioksidan, kulit, daya tahan tubuh, dan pencernaan. |
| 3 | Materi yang mengaitkan sejumlah gejala dengan kondisi kesehatan serta menampilkan produk sebagai solusi alami. |
| 4 | Pengenalan zaitun, madu, dan habbatussauda beserta pesan agama dan klaim terkait bahan tersebut. |
| 5 | Pesan tentang dapur sunnah, keberkahan, ikhtiar sehat, ibadah, dan keluarga. |
| 6 | Materi promosi religius yang kembali menonjolkan tiga bahan utama. |
| 7 | Alasan memilih produk dengan pendekatan Al-Qur'an dan sunnah serta manfaat yang diklaim. |
| 8 | Materi tentang kondisi lanjutan/risiko kesehatan apabila gejala dibiarkan. |
| 9 | Testimoni yang diatribusikan kepada Ibu Hanifah, 71 tahun, Wonoayu Sidoarjo. |
| 10 | Testimoni yang diatribusikan kepada Bu Hanum, BRI KC Krian, mengenai pengalaman ayahnya. |
| 11 | Testimoni yang diatribusikan kepada Bapak Sardjono, 58 tahun, Kenjeran Surabaya. |

### Identitas produk menurut materi

- Materi memperkenalkan perpaduan **zaitun, madu, dan habbatussauda**.
- Produk diposisikan dalam materi sebagai suplemen/herbal alami dengan nuansa Islami dan premium.
- Tema komunikasi utama: ikhtiar kesehatan keluarga, bahan alami, dan keberkahan.
- Visual materi: hijau tua, emas, krem, ornamen Islami, ilustrasi bahan, dan foto botol.
- Kesan audiens dari materi: orang dewasa, orang tua, serta anggota keluarga yang membeli untuk orang tuanya. Ini interpretasi materi, bukan hasil riset pasar.

### Ringkasan testimoni dalam PDF

- **Ibu Hanifah:** mengaku merasa lebih segar dan tidak mudah lelah setelah sekitar lima hari. Pernyataan tentang kolesterol dalam kutipan bersifat dugaan pribadi.
- **Bu Hanum:** menggambarkan ayahnya tampak lebih bugar pada hari kedua serta rasa produk yang manis, tidak pahit, dan nyaman diminum.
- **Bapak Sardjono:** mengaku keluhan keringat dingin berhenti setelah sekitar satu minggu dan menyebut riwayat keluhan jantung.

Testimoni di atas adalah isi dokumen, belum diverifikasi secara independen dan bukan bukti efektivitas medis. Izin publikasi ulang foto/testimoni belum dikonfirmasi.

### Batas penggunaan materi

- Jangan mengubah klaim dalam PDF menjadi fakta medis terverifikasi atau janji kesembuhan.
- Klaim “halal”, “100% natural”, “premium”, dan sejenisnya terdapat dalam materi; sertifikat serta dasar klaim belum diperiksa.
- Komposisi rinci, takaran, aturan pakai, peringatan, izin edar, dan sertifikat belum diverifikasi.
- Jangan mengarang harga, diskon, stok, jumlah pelanggan, ulasan, hasil pemeriksaan, atau garansi.
- Untuk landing page, utamakan pengenalan produk dan bahan, informasi pembelian, serta komunikasi yang tidak menjanjikan penyembuhan.

## 3. Permintaan website

Pengguna meminta landing page dengan:

1. **Next.js** sebagai framework.
2. **Vercel** sebagai tujuan deployment.
3. Fitur **follow-up WhatsApp**.
4. **Monitoring Meta Ads**.

Permintaan pengguna: “kamu bisa buatkan landing page dengan next js diupload ke vercel yang bisa follow up whatsap dan monitoring meta adds?”

Belum ada keputusan rinci tentang cakupan WhatsApp dan monitoring Meta Ads. Jangan menyamakan tombol chat dengan follow-up otomatis, atau pelacakan klik dengan dashboard performa iklan lengkap.

### Opsi WhatsApp yang belum dipilih

- **Manual:** tombol WhatsApp dengan pesan siap kirim; calon pembeli membuka chat dan admin melanjutkan percakapan.
- **Otomatis:** integrasi WhatsApp Business Platform/API untuk alur follow-up. Membutuhkan konfigurasi akun, kredensial, persetujuan penerima, serta template pesan jika diperlukan.
- Jadwal, pemicu, isi pesan, penyimpanan leads, dan penyedia integrasi belum ditentukan.
- Belum ada nomor WhatsApp tujuan yang diberikan.

### Opsi monitoring Meta Ads yang belum dipilih

- **Tracking landing page:** Meta Pixel dan parameter UTM untuk memahami sumber kunjungan serta klik tombol WhatsApp.
- **Dashboard iklan:** data dari akun Meta Ads melalui Marketing API, misalnya pengeluaran, leads, dan metrik lainnya.
- Klik WhatsApp tidak membuktikan bahwa chat terkirim, lead berkualitas, atau transaksi terjadi.
- ROAS membutuhkan data nilai pembelian dan atribusi; jangan menghitungnya hanya dari jumlah klik WhatsApp.
- Meta Pixel ID, akun iklan, akses API, sumber data transaksi, dan aturan atribusi belum diberikan.
- Jangan mengirim data keluhan kesehatan atau informasi sensitif pengguna ke platform iklan.

## 4. Pertanyaan yang masih terbuka

Pertanyaan berikut sudah pernah diajukan, tetapi belum dijawab sebelum pengguna meminta pindah direktori:

1. Nomor WhatsApp tujuan dan harga Az-Zait Assyfa berapa?
2. Follow-up WhatsApp manual melalui admin atau otomatis melalui API?
3. Monitoring cukup berupa Pixel/UTM atau perlu dashboard biaya iklan, leads, dan ROAS?

Nama kerja sekarang dapat memakai **Arkalife** berdasarkan pesan terbaru. Informasi lain yang masih diperlukan sesuai tahap implementasi:

- Varian, ukuran kemasan, harga, ongkir, dan alur pemesanan/pembayaran.
- Apakah Scalev tetap digunakan, misalnya untuk checkout atau pengelolaan pesanan.
- Akun/proyek Vercel dan domain tujuan.
- Identitas penjual, kontak, dan informasi privasi yang akan dipublikasikan.
- Identitas visual final: logo, warna, tagline. Belum ada desain Arkalife yang disetujui; warna PDF hanya referensi produk.

## 5. Status pekerjaan saat pindah direktori

### Sudah selesai

- Membaca seluruh 11 halaman PDF secara visual.
- Membahas pilihan nama toko hingga konteks terbaru menggunakan Arkalife.
- Mengidentifikasi kebutuhan Next.js, Vercel, WhatsApp, dan Meta Ads.
- Memeriksa lingkungan awal dan membaca panduan Sites.
- Membuat dokumen pemindahan konteks ini.

### Belum selesai / belum dibuat

- Belum ada proyek Next.js atau kode landing page yang dibuat.
- Belum ada dependency proyek yang dipasang atau build yang diuji.
- Belum ada deployment ke Vercel atau URL website.
- Belum ada integrasi WhatsApp, Meta Pixel, Marketing API, atau Scalev yang aktif.
- Belum ada pesan WhatsApp yang dikirim.
- Belum ada akses akun eksternal yang dikonfirmasi.

### Catatan teknis lingkungan lama

- Direktori awal: `/Users/macbook/Downloads`.
- Shell: Bash; sistem macOS.
- Node.js terdeteksi: `v24.22.1`; npm: `11.19.1`.
- Perintah `vercel` tidak ditemukan pada PATH saat pemeriksaan.
- Pemeriksaan versi paket Next.js melalui npm belum menghasilkan hasil terverifikasi sebelum giliran dihentikan.
- Next.js dan Vercel merupakan pilihan eksplisit pengguna. Skill Sites yang sempat dibaca menggunakan hosting berbeda; jangan mengganti tujuan deployment ke Sites/Cloudflare tanpa permintaan pengguna.
- File sementara pembacaan PDF berada di `/tmp`; jangan menjadikannya dependency proyek. Salin aset yang dipakai ke folder proyek secara eksplisit.

## 6. Langkah lanjutan yang disarankan

1. Buka direktori baru Arkalife dan baca dokumen ini serta instruksi lokal yang berlaku.
2. Pastikan PDF sumber tersedia untuk merujuk gambar dan rincian produk.
3. Mulai draf landing page Next.js dengan nama Arkalife; jangan mengarang data yang belum diberikan.
4. Selesaikan pilihan cakupan WhatsApp dan Meta Ads sebelum membangun integrasi terkait.
5. Gunakan konfigurasi environment untuk ID dan integrasi; simpan token rahasia hanya di sisi server, bukan variabel `NEXT_PUBLIC_*`, kode frontend, atau dokumen ini.
6. Uji tampilan responsif, alur pemesanan/chat, dan ketepatan event tracking sesuai fitur yang dipilih.
7. Deploy ke Vercel setelah konfigurasi dan akses tersedia. Laporkan URL serta status integrasi secara akurat.

## 7. Referensi teknis awal

- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Vercel CLI deployment: https://vercel.com/docs/cli/deploy
- Vercel deployment overview: https://vercel.com/docs/deployments/overview

Dokumentasi detail Meta/WhatsApp perlu diperiksa kembali saat implementasi; pemeriksaan sebelumnya belum tuntas.

## 8. Prompt untuk melanjutkan di direktori baru

> Baca ARKALIFE-KNOWLEDGE.md sebagai konteks awal proyek. Saya ingin membangun landing page Arkalife memakai Next.js dan deploy ke Vercel, dengan produk awal Az-Zait Assyfa. Lanjutkan dari status pekerjaan dalam dokumen, gunakan PDF sumber sebagai referensi, dan pastikan cakupan follow-up WhatsApp serta monitoring Meta Ads jelas sebelum implementasi integrasi.

## 9. Pembaruan implementasi — 26 Oktober 2026

Bagian ini memperbarui status historis bagian 5.

- Proyek Next.js App Router sudah dibuat di root direktori Arkalife, dengan React dan dependency terkunci di `package-lock.json`.
- Landing page berbahasa Indonesia mencakup hero, pengenalan produk, pengenalan bahan, alur pemesanan, FAQ, dan halaman `/privasi`. CSS menyediakan layout desktop/seluler dan dukungan reduced motion.
- Foto produk diambil langsung dari gambar halaman pertama PDF lokal `doc/Az-Zait-Assyfa-11-halaman-Testimoni.pdf`, disimpan di `public/images/az-zait-assyfa.jpg`.
- Dependency berhasil dipasang secara offline dari salinan cache npm lokal karena DNS registry npm tidak tersedia dari terminal.
- Build produksi berhasil. Pengujian browser Playwright telah disiapkan di `tests/site.test.mjs`, tetapi belum berhasil berjalan: sandbox menolak bind port lokal (`listen EPERM`) dan Chromium (`MachPortRendezvousServer: Permission denied`). Responsivitas visual dan alur browser belum terverifikasi.
- WhatsApp, Meta Pixel/UTM, Marketing API, dan Scalev belum diimplementasikan/diaktifkan. Pertanyaan nomor WhatsApp, harga/ukuran, serta cakupan WhatsApp dan Meta telah diajukan ulang dan masih menunggu jawaban. CTA mengarah ke bagian informasi pemesanan, bukan chat palsu.
- Belum ada deployment Vercel. CLI tidak tersedia, konfigurasi proyek Vercel belum ada, dan kredensial Vercel tidak terdeteksi di lokasi standar yang diperiksa.
- Petunjuk menjalankan dan deployment tersedia di `README.md`; contoh konfigurasi di `.env.example`.

Langkah berikutnya: konfirmasi data produk dan cakupan integrasi, implementasikan integrasi sesuai jawaban, jalankan uji browser di lingkungan yang mengizinkan server/Chromium, lalu deploy menggunakan akses Vercel pengguna.

### Pembaruan konten dari PDF

- Sesuai permintaan pengguna, setelah pengenalan produk ditambahkan tiga bagian berurutan: “Waspada gejala tubuh tidak sehat” (halaman 3, lima kelompok dengan 15 poin), “Gejala lanjutan jika dibiarkan” (halaman 8, lima kelompok dengan 16 poin), lalu “Manfaat Az-Zait Assyfa” (halaman 2, enam poin).
- Bagian mengenal bahan kini mengikuti halaman 5: dapur sunnah, zaitun/Omega-9, madu/prebiotik, habbatussauda/thymoquinone, rujukan agama sebagaimana dicantumkan pemasok, dan pesan ikhtiar untuk ibadah serta keluarga.
- Halaman 2, 3, 5, dan 8 dibaca ulang secara visual. Teks kesehatan ditampilkan sebagai isi/klaim materi, bukan diagnosis atau bukti efektivitas produk. Frasa sumber tentang “>15 menit” dan “perlu ring” diberi penjelasan agar tidak mendorong penundaan pertolongan atau diagnosis mandiri.
- Konteks medis disertai tautan NHS tentang kolesterol tinggi, serangan jantung, dan gejala stroke. Tidak ada penambahan klaim sertifikasi atau jaminan kesembuhan.
- Komponen konten tambahan: `app/product-information.js`; gaya responsif ada di `app/globals.css`.
