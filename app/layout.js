import './globals.css';

export const metadata = {
  title: 'Arkalife — Pilihan baik untuk keseharian',
  description: 'Kenali Az-Zait Assyfa bersama Arkalife. Informasi produk, bahan yang diperkenalkan, dan panduan pemesanan.',
  ...(process.env.SITE_URL ? { metadataBase: new URL(process.env.SITE_URL) } : {}),
  openGraph: { title: 'Arkalife — Pilihan baik untuk keseharian', description: 'Kenali lebih dekat Az-Zait Assyfa.', locale: 'id_ID', type: 'website' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
