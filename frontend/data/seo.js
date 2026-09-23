import { getSolusi, getIndustri } from './content.js';

export const SITE_URL = 'https://pemapi.com';
const SITE_NAME = 'PEMAPI';
const DEFAULT_IMAGE = '/img/pemapi-logo.png';

const DEFAULT_META = {
  title: 'PEMAPI | APAR, Konsultasi, Refill & Manajemen Digital Semarang',
  description: 'PEMAPI menyediakan APAR bersertifikasi SNI & ISO 9001, konsultasi gratis, refill & maintenance, serta manajemen APAR digital untuk perusahaan di Semarang dan Jawa Tengah.',
};

const staticPages = {
  '/': {
    title: 'APAR Semarang: Produk, Refill & Manajemen Digital | PEMAPI',
    description: 'APAR bersertifikasi SNI & ISO 9001, konsultasi gratis, refill 40 unit/hari, dan inspeksi digital via QR Code. Dipercaya 290+ mitra di Semarang sejak 1994.',
  },
  '/tentang-kami': {
    title: 'Tentang PEMAPI — Fire Protection Semarang sejak 1994',
    description: 'PT. Coco Profire Indonesia (PEMAPI) melayani perlindungan kebakaran sejak 1994: APAR, konsultasi, maintenance, dan manajemen digital untuk 290+ mitra.',
    crumbs: [['Tentang Kami', '/tentang-kami']],
  },
  '/pemapi-app': {
    title: 'PEMAPI App — Aplikasi Inspeksi & Manajemen APAR Digital',
    description: 'Kelola seluruh APAR dari smartphone: scan QR Code, checklist inspeksi digital, notifikasi jadwal refill, dan riwayat lengkap siap audit K3. Tersedia di Android.',
    image: '/img/pemapi-app.png',
    crumbs: [['PEMAPI App', '/pemapi-app']],
  },
  '/quiz-apar': {
    title: 'Quiz APAR — Cari Jenis & Jumlah APAR yang Tepat | PEMAPI',
    description: 'Jawab 7 pertanyaan singkat dan dapatkan rekomendasi jenis, kapasitas, jumlah, dan penempatan APAR untuk tempat usaha Anda. Gratis, tanpa registrasi, 2 menit.',
    crumbs: [['Quiz APAR', '/quiz-apar']],
  },
  '/product': {
    title: 'Produk APAR Bersertifikasi SNI & ISO 9001 | PEMAPI',
    description: 'APAR Powder, CO2, Foam, dan Clean Agent bersertifikasi SNI 180-1-2022 dan ISO 9001. Harga mulai Rp 950.000, termasuk QR Code untuk manajemen digital.',
    crumbs: [['Produk', '/product']],
  },
  '/solusi': {
    title: 'Solusi Fire Protection: Konsultasi hingga Digital | PEMAPI',
    description: 'Empat layanan yang saling melengkapi: konsultasi gratis, perencanaan penempatan APAR, refill & maintenance rutin, dan manajemen APAR digital via PEMAPI App.',
    crumbs: [['Solusi', '/solusi']],
  },
  '/industri': {
    title: 'Solusi APAR per Industri — Kantor, Pabrik, Hotel | PEMAPI',
    description: 'Rekomendasi APAR sesuai risiko kebakaran tiap industri: perkantoran, pabrik, hotel, restoran, gudang, retail, rumah sakit, pendidikan, dan instansi pemerintah.',
    crumbs: [['Industri', '/industri']],
  },
  '/contact-us': {
    title: 'Hubungi PEMAPI — Konsultasi APAR Gratis di Semarang',
    description: 'Konsultasi gratis kebutuhan APAR perusahaan Anda. WhatsApp 0811-2899-009, email cocoprofire@gmail.com. Jl. Puspanjolo Dalam 5 No. 10, Semarang Barat.',
    crumbs: [['Hubungi Kami', '/contact-us']],
  },
  '/kebijakan-mutu': {
    title: 'Kebijakan Mutu | PEMAPI',
    description: 'Kebijakan mutu PT. Coco Profire Indonesia (PEMAPI) dalam menyediakan produk dan layanan perlindungan kebakaran sesuai standar ISO 9001.',
    crumbs: [['Kebijakan Mutu', '/kebijakan-mutu']],
  },
  '/privacy-policy': {
    title: 'Kebijakan Privasi | PEMAPI',
    description: 'Kebijakan privasi PEMAPI dan PEMAPI App: bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
    crumbs: [['Kebijakan Privasi', '/privacy-policy']],
  },
  '/warranty-policy': {
    title: 'Ketentuan Garansi APAR | PEMAPI',
    description: 'Ketentuan dan cakupan garansi produk APAR PEMAPI, termasuk syarat klaim dan layanan purna jual.',
    crumbs: [['Ketentuan Garansi', '/warranty-policy']],
  },
};

const productPages = {
  powder: {
    name: 'APAR Powder',
    title: 'APAR Powder (Dry Chemical) Kelas A, B, C | PEMAPI',
    description: 'APAR Powder serbaguna untuk kebakaran kelas A, B, dan C — cocok untuk kantor, gudang, dan toko. Bersertifikasi SNI & ISO 9001. Mulai Rp 950.000.',
    image: '/img/apar-powder-3kg.png',
  },
  co2: {
    name: 'APAR CO2',
    title: 'APAR CO2 untuk Server & Panel Listrik | PEMAPI',
    description: 'APAR CO2 memadamkan kebakaran kelas B dan C tanpa residu — ideal untuk ruang server, panel listrik, dan peralatan elektronik. Bersertifikasi SNI.',
  },
  foam: {
    name: 'APAR Foam',
    title: 'APAR Foam untuk Kebakaran Cairan & Minyak | PEMAPI',
    description: 'APAR Foam efektif untuk kebakaran cairan mudah terbakar dan mencegah re-ignition. Cocok untuk dapur, pabrik, dan area penyimpanan bahan kimia.',
  },
  halon: {
    name: 'APAR Clean Agent',
    title: 'APAR Clean Agent (Halon Free) Tanpa Residu | PEMAPI',
    description: 'APAR Clean Agent memadamkan api tanpa residu — aman untuk data center, laboratorium, ruang arsip, dan peralatan sensitif. Bersertifikasi SNI.',
  },
};

function truncate(text, max = 158) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max - 1)) + '…';
}

function resolvePage(req) {
  const path = req.path.length > 1 ? req.path.replace(/\/$/, '') : req.path;

  if (path === '/product-apar') {
    const tipe = req.query.tipe;
    const p = productPages[tipe];
    if (!p) return null;
    return {
      ...p,
      canonicalPath: `/product-apar?tipe=${tipe}`,
      crumbs: [['Produk', '/product'], [p.name, `/product-apar?tipe=${tipe}`]],
    };
  }

  let m = path.match(/^\/solusi\/([^/]+)$/);
  if (m) {
    const s = getSolusi(m[1]);
    if (!s) return null;
    return {
      title: `${s.title} | Solusi PEMAPI Semarang`,
      description: truncate(s.heroDesc),
      canonicalPath: path,
      crumbs: [['Solusi', '/solusi'], [s.title, path]],
      service: { name: s.title, description: s.heroDesc },
    };
  }

  m = path.match(/^\/industri\/([^/]+)$/);
  if (m) {
    const i = getIndustri(m[1]);
    if (!i) return null;
    return {
      title: `APAR untuk ${i.title} di Semarang | PEMAPI`,
      description: truncate(i.heroDesc),
      canonicalPath: path,
      crumbs: [['Industri', '/industri'], [i.title, path]],
    };
  }

  const page = staticPages[path];
  return page ? { ...page, canonicalPath: path } : null;
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  legalName: 'PT. Coco Profire Indonesia',
  description: 'Penyedia APAR bersertifikasi, konsultasi, refill & maintenance, dan manajemen APAR digital di Semarang dan Jawa Tengah.',
  url: SITE_URL,
  logo: `${SITE_URL}/img/pemapi-logo.png`,
  image: `${SITE_URL}/img/pemapi-logo.png`,
  telephone: '+62-811-2899-009',
  email: 'cocoprofire@gmail.com',
  priceRange: 'Rp 950.000 - Rp 7.000.000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Puspanjolo Dalam 5 No.10, RT.011/RW.001, Cabean',
    addressLocality: 'Semarang Barat, Kota Semarang',
    addressRegion: 'Jawa Tengah',
    postalCode: '50141',
    addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -6.9837104, longitude: 110.3997223 },
  hasMap: 'https://maps.app.goo.gl/3ypNJb5BubCRbD9T8',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '16:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Semarang' },
    { '@type': 'State', name: 'Jawa Tengah' },
  ],
  sameAs: [
    'https://www.instagram.com/pemapi.indonesia/',
    'https://www.facebook.com/aparpemapi/',
  ],
};

export function buildSeo(req) {
  const page = resolvePage(req);
  const meta = { ...DEFAULT_META, ...(page || {}) };
  const canonical = page ? SITE_URL + page.canonicalPath : null;

  const schemas = [localBusiness];

  if (page?.crumbs) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [['Beranda', '/'], ...page.crumbs].map(([name, path], idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name,
        item: SITE_URL + path,
      })),
    });
  }

  if (page?.service) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.service.name,
      description: page.service.description,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: localBusiness.areaServed,
    });
  }

  return {
    title: meta.title,
    description: meta.description,
    canonical,
    image: SITE_URL + (meta.image || DEFAULT_IMAGE),
    siteName: SITE_NAME,
    // Escape "<" so data can never close the surrounding <script> tag
    jsonLd: schemas.map(s => JSON.stringify(s).replace(/</g, '\\u003c')),
  };
}
