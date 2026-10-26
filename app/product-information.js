const symptoms = [
  {
    title: 'Jantung & pembuluh darah',
    points: ['Mudah lelah, sesak napas, nyeri dada', 'Berdebar tidak teratur', 'Kaki bengkak dan dingin, kesemutan'],
  },
  {
    title: 'Kolesterol tidak normal',
    points: ['Sering pusing, tengkuk berat', 'Xanthelasma (benjolan kuning di kelopak mata)', 'Pandangan buram'],
  },
  {
    title: 'Radikal bebas / kurang antioksidan',
    points: ['Kulit kusam dan cepat keriput', 'Flek hitam sulit pudar', 'Luka lama sembuh'],
  },
  {
    title: 'Daya tahan menurun',
    points: ['Gampang sakit flu berulang', 'Sariawan dan radang tenggorokan', 'Luka lama kering'],
  },
  {
    title: 'Pencernaan tidak sehat',
    points: ['Kembung, mual, ulu hati perih', 'BAB tidak teratur', 'Bau mulut'],
  },
];

const advancedSymptoms = [
  {
    title: 'Jantung & pembuluh darah',
    points: ['Gagal jantung (sesak saat tiduran)', 'Serangan jantung >15 menit¹', 'Pingsan mendadak', 'Bengkak sampai paha dan perut'],
  },
  {
    title: 'Kolesterol & penyumbatan',
    points: ['Risiko stroke (mulut mencong, bicara pelo)', 'Nyeri dada hebat perlu ring²', 'Kaki menghitam dan luka tidak sembuh'],
  },
  {
    title: 'Radikal bebas lanjut',
    points: ['Kulit menipis dan flek meluas', 'Kerusakan DNA', 'Nyeri sendi kronis dan meriang terus'],
  },
  {
    title: 'Daya tahan jebol',
    points: ['Infeksi berat (TBC, pneumonia)', 'Jamur mulut dan diare kronis', 'Risiko autoimun'],
  },
  {
    title: 'Pencernaan rusak',
    points: ['Malnutrisi dan anemia berat', 'Kebocoran usus', 'Nyeri hati dan mata kuning'],
  },
];

const benefits = [
  ['Jantung & pembuluh darah', 'Membantu memelihara kesehatan jantung dan pembuluh darah.'],
  ['Kadar kolesterol', 'Membantu memelihara kadar kolesterol normal, dengan diet rendah lemak.'],
  ['Antioksidan alami', 'Kaya antioksidan alami vitamin E dan polifenol untuk menangkal radikal bebas.'],
  ['Kesehatan kulit', 'Sumber antioksidan untuk kesehatan kulit.'],
  ['Daya tahan tubuh', 'Membantu memelihara daya tahan tubuh.'],
  ['Saluran pencernaan', 'Membantu memelihara kesehatan saluran pencernaan.'],
];

function InformationCards({ items }) {
  return <div className="health-grid">
    {items.map(({ title, points }, index) => <article className="health-card" key={title}>
      <span className="health-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
    </article>)}
  </div>;
}

export default function ProductInformation() {
  return <>
    <section className="health-section section" id="gejala" aria-labelledby="gejala-title">
      <div className="wrap">
        <div className="health-heading">
          <p className="eyebrow">02 / KENALI TANDA TUBUH</p>
          <h2 id="gejala-title">Waspada gejala<br /><em>tubuh tidak sehat.</em></h2>
          <p>Kenali tandanya sejak dini. Berikut daftar keluhan dan pengelompokan yang tercantum dalam materi Az-Zait Assyfa halaman 3.</p>
        </div>
        <p className="source-context">Pengelompokan ini berasal dari materi promosi, bukan panduan diagnosis. Keluhan tersebut tidak memastikan penyakit tertentu maupun kekurangan antioksidan.</p>
        <InformationCards items={symptoms} />
        <aside className="health-note" aria-label="Penjelasan tentang gejala kolesterol">
          <strong>Kolesterol tinggi biasanya tidak bergejala.</strong>
          <p>Pusing atau tengkuk berat bukan cara memastikan kadar kolesterol. Pemeriksaan darah diperlukan untuk mengetahuinya. <a href="https://www.nhs.uk/conditions/high-cholesterol/">Referensi: NHS — kolesterol tinggi</a>.</p>
        </aside>
      </div>
    </section>

    <section className="health-section health-advanced section" id="gejala-lanjutan" aria-labelledby="lanjutan-title">
      <div className="wrap">
        <div className="health-heading">
          <p className="eyebrow">03 / PERHATIKAN KELUHAN LANJUTAN</p>
          <h2 id="lanjutan-title">Gejala lanjutan<br /><em>jika dibiarkan.</em></h2>
          <p>Materi halaman 8 mencantumkan kondisi berikut dengan tema “Dampak jika tidak ditangani sejak dini”. Daftar ini merangkum isi materi, bukan perkiraan perjalanan penyakit Anda.</p>
        </div>
        <p className="source-context">Hubungan sebab-akibat dalam pengelompokan ini belum terverifikasi. Keluhan awal tidak otomatis berkembang menjadi kondisi di bawah, dan produk ini belum terbukti mencegah atau menanganinya.</p>
        <InformationCards items={advancedSymptoms} />
        <aside className="health-note emergency-note" aria-label="Kapan mencari pertolongan medis">
          <strong>Jangan menunda pertolongan medis.</strong>
          <p>Nyeri dada berat, sesak berat, pingsan yang tidak segera pulih, atau wajah mencong dan bicara pelo mendadak memerlukan bantuan medis darurat. Segera hubungi layanan darurat setempat; jangan menunggu produk bekerja.</p>
          <p>¹ Frasa “&gt;15 menit” dikutip dari PDF, bukan batas waktu menunggu pertolongan. ² Kebutuhan ring atau stent ditentukan dari pemeriksaan dokter, bukan dari nyeri dada saja.</p>
          <p className="medical-references">Referensi: <a href="https://www.nhs.uk/conditions/heart-attack/">NHS — serangan jantung</a> · <a href="https://www.nhs.uk/conditions/stroke/symptoms/">NHS — gejala stroke</a>.</p>
        </aside>
      </div>
    </section>

    <section className="benefits section" id="manfaat" aria-labelledby="manfaat-title">
      <div className="wrap">
        <div className="health-heading">
          <p className="eyebrow">04 / MENGENAL MANFAAT PRODUK</p>
          <h2 id="manfaat-title">Manfaat<br /><em>Az-Zait Assyfa.</em></h2>
          <p>Enam manfaat yang diklaim dalam materi produk halaman 2.</p>
        </div>
        <p className="source-context">Klaim berikut belum diverifikasi secara independen, termasuk kandungan dan efektivitas produk. Bukan janji hasil, pencegahan penyakit, atau pengganti pengobatan.</p>
        <ol className="benefit-grid">
          {benefits.map(([title, description], index) => <li key={title}>
            <span className="benefit-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </li>)}
        </ol>
      </div>
    </section>
  </>;
}
