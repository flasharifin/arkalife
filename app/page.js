import Image from 'next/image';
import Link from 'next/link';
import ProductInformation from './product-information';

const ingredients = [
  ['01', 'Zaitun / Olive', 'Pohon yang diberkahi · QS An-Nur 35', 'Materi menyebut kandungan Omega-9 untuk jantung dan pembuluh darah.', 'olive'],
  ['02', 'Madu / Honey', '“Minuman penyembuh” · QS An-Nahl 69', 'Materi memperkenalkan madu sebagai prebiotik alami dan penghantar khasiat.', 'honey'],
  ['03', 'Habbatussauda', 'Keberkahan hitam · HR Bukhari Muslim', 'Materi menyebut kandungan thymoquinone untuk daya tahan tubuh.', 'seed'],
];
const faqs = [
  ['Apa itu Az-Zait Assyfa?', 'Az-Zait Assyfa adalah produk yang diperkenalkan dalam materi pemasok dengan perpaduan zaitun, madu, dan habbatussauda. Arkalife adalah nama toko; Az-Zait Assyfa adalah nama produknya.'],
  ['Berapa harga dan ukuran kemasannya?', 'Informasi harga, varian, ukuran kemasan, dan ketersediaan sedang disiapkan. Rincian ini akan ditampilkan setelah dikonfirmasi.'],
  ['Bagaimana cara pemakaiannya?', 'Ikuti aturan pada label kemasan. Rincian takaran, aturan pakai, dan peringatan produk belum tersedia di halaman ini.'],
  ['Apakah informasi izin edar dan sertifikasi tersedia?', 'Informasi izin edar dan sertifikasi belum ditampilkan karena dokumen pendukungnya masih perlu diverifikasi.'],
  ['Bagaimana cara memesan?', 'Pemesanan melalui admin WhatsApp sedang disiapkan. Setelah kontak tersedia, Anda dapat menanyakan produk, mengonfirmasi harga dan ongkir, lalu melanjutkan pesanan bersama admin.'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Brand() { return <span className="brand">arka<span>life</span><i aria-hidden="true">✳</i></span>; }

export default function Home() {
  return <>
    <a className="skip" href="#main">Lewati ke konten</a>
    <div className="announcement">Pilihan baik, dimulai dari keseharian.</div>
    <header className="header wrap">
      <Link href="/" aria-label="Arkalife beranda"><Brand /></Link>
      <nav aria-label="Navigasi utama"><a href="#produk">Produk</a><a href="#bahan">Kenali bahan</a><a href="#faq">Tanya jawab</a></nav>
      <a className="nav-cta" href="#pemesanan">Info pemesanan <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span /> SELAMAT DATANG DI ARKALIFE</p>
          <h1 id="hero-title">Pilihan baik.<br />Untuk diri,<br /><em>untuk keluarga.</em></h1>
          <p className="intro">Ada perhatian di balik setiap pilihan. Kenali Az-Zait Assyfa, perpaduan zaitun, madu, dan habbatussauda untuk Anda yang ingin lebih dekat dengan bahan alami.</p>
          <a className="button" href="#produk">Kenali Az-Zait Assyfa <Arrow /></a>
          <div className="hero-foot"><span aria-hidden="true">✳</span><p>Berawal dari kepedulian.<br /><strong>Hadir untuk keseharian.</strong></p></div>
        </div>
        <div className="hero-visual"><div className="photo"><Image src="/images/az-zait-assyfa.jpg" alt="Botol Az-Zait Assyfa berlabel emas dengan kotak kemasan di belakangnya" fill preload sizes="(max-width: 760px) 90vw, 48vw" /></div><div className="photo-label"><span>KENALI PILIHAN PERTAMA KAMI</span><strong>Az-Zait Assyfa <Arrow /></strong></div><span className="vertical-note">AR K A L I F E — EVERYDAY CARE</span></div>
      </section>
      <div className="ingredient-ribbon"><span>Zaitun</span><i>✳</i><span>Madu</span><i>✳</i><span>Habbatussauda</span></div>
      <section className="product wrap section" id="produk">
        <div><p className="eyebrow">01 / PILIHAN ARKALIFE</p><h2>Tiga bahan yang akrab.<br /><em>Satu perkenalan baru.</em></h2></div>
        <div className="product-copy"><p className="large-copy">Mengenal lebih dekat<br /><strong>Az-Zait Assyfa.</strong></p><p>Materi produk memperkenalkan perpaduan zaitun, madu, dan habbatussauda, dengan semangat ikhtiar dan perhatian untuk keluarga.</p><p>Kami ingin membantu Anda mengenal produk sebelum menentukan pilihan. Informasi rinci komposisi dan aturan pakai tetap mengacu pada label kemasan yang terverifikasi.</p><a className="text-link" href="#pemesanan">Lihat informasi pemesanan <Arrow /></a></div>
      </section>
      <ProductInformation />
      <section className="ingredients section" id="bahan" aria-labelledby="bahan-title">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">05 / MENGENAL BAHAN</p><h2 id="bahan-title">Kembali ke dapur sunnah,<br /><em>kembali ke yang diberkahi.</em></h2></div>
            <p>Halaman 5 memperkenalkan tiga bahan dengan pesan “Warisan sehat dari Al-Quran dan Sunnah”.</p>
          </div>
          <div className="ingredient-grid">{ingredients.map(([number, name, reference, description, style]) => <article className="ingredient" key={name}>
            <div className={`botanical ${style}`} aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
            <div className="ingredient-title"><h3>{name}</h3><span>{number}</span></div>
            <p className="latin">{reference}</p><p>{description}</p>
          </article>)}</div>
          <blockquote className="ingredient-message"><p>“Tiga keberkahan Allah dalam satu ikhtiar Az-Zait Assyfa. Ikhtiar sehat untuk kuat beribadah dan berjuang untuk keluarga.”</p><cite>Pesan dalam materi produk, halaman 5</cite></blockquote>
          <p className="ingredient-note">Uraian bahan dan rujukan agama mengikuti materi pemasok, bukan kutipan langsung ayat atau hadis. Klaim kandungan dan manfaat belum diverifikasi pada produk; pesan keagamaan bukan bukti efektivitas medis.</p>
        </div>
      </section>
      <section className="order section wrap" id="pemesanan"><div><p className="eyebrow">06 / LANGKAH BERIKUTNYA</p><h2>Kenali dulu.<br /><em>Pilih dengan tenang.</em></h2><p className="order-intro">Informasi yang jelas membantu Anda mengambil keputusan. Berikut alur pemesanan yang sedang kami siapkan.</p></div><div><ol className="steps"><li><span>01</span><div><h3>Tanyakan produk</h3><p>Kenali kemasan, rincian produk, dan ketersediaannya bersama admin.</p></div></li><li><span>02</span><div><h3>Konfirmasi pesanan</h3><p>Pastikan jumlah, harga, alamat pengiriman, dan ongkir sebelum pembayaran.</p></div></li><li><span>03</span><div><h3>Lanjutkan bersama admin</h3><p>Admin membantu mengonfirmasi pembayaran dan informasi pengiriman.</p></div></li></ol><div className="order-status"><span className="status-dot" /><div><strong>Pemesanan segera tersedia</strong><p>Kontak admin dan rincian harga sedang disiapkan.</p></div></div></div></section>
      <section className="faq section wrap" id="faq"><div><p className="eyebrow">07 / TANYA JAWAB</p><h2>Sebelum Anda<br /><em>memilih.</em></h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section className="closing"><p className="eyebrow">SEBUAH PERHATIAN KECIL, SETIAP HARI</p><h2>Untuk yang berarti<br /><em>dalam hidup Anda.</em></h2><a href="#produk" className="button light">Jelajahi produk <Arrow /></a></section>
    </main>
    <footer className="wrap"><div className="footer-top"><Link href="/" aria-label="Arkalife beranda"><Brand /></Link><p>Pilihan baik untuk keseharian.</p><Link href="/privasi">Privasi</Link></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Arkalife</p><p>Informasi produk bersifat pengenalan, bukan saran medis atau janji kesembuhan.</p></div></footer>
  </>;
}
