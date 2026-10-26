import Link from 'next/link';
export const metadata = { title: 'Privasi | Arkalife' };
export default function Privacy() {
  return <main className="privacy wrap"><Link className="text-link" href="/">← Kembali ke Arkalife</Link><p className="eyebrow">INFORMASI PENGUNJUNG</p><h1>Privasi Anda.</h1><p>Versi halaman ini belum memiliki formulir pengumpulan data, Meta Pixel, penyimpanan leads, atau follow-up WhatsApp otomatis.</p><h2>Data teknis</h2><p>Penyedia hosting dapat memproses data teknis permintaan, seperti alamat IP dan informasi peramban, untuk menyajikan dan menjaga layanan website.</p><h2>Layanan yang akan datang</h2><p>Ketika layanan pemesanan atau analitik diaktifkan, halaman ini akan diperbarui untuk menjelaskan data yang digunakan, tujuan penggunaan, penyedia layanan, serta kontak pengelola.</p><p>Jangan mengirimkan informasi kesehatan sensitif melalui layanan pemesanan.</p></main>;
}
