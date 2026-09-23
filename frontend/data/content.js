// PEMAPI Content Data — from Phase 4 Content Strategy
// Centralized data for Solusi and Industri pages

export const solusiList = [
  {
    slug: 'konsultasi',
    title: 'Konsultasi Profesional',
    tagline: 'Bantuan ahli untuk memilih APAR yang tepat — gratis.',
    heroDesc: 'Tim PEMAPI membantu Anda menganalisis kebutuhan, memilih jenis APAR yang sesuai, dan merencanakan penempatan berdasarkan standar keselamatan.',
    icon: '💬',
    problem: 'Banyak perusahaan bingung menentukan jenis, kapasitas, dan jumlah APAR yang dibutuhkan. Salah pilih berarti perlindungan tidak optimal atau anggaran terbuang.',
    solution: 'PEMAPI menyediakan konsultasi gratis — kami menganalisis luas area, jenis risiko, dan regulasi yang berlaku, lalu memberi rekomendasi konkret sesuai standar SNI dan best practice fire protection.',
    process: [
      { num: 1, title: 'Diskusi Awal', desc: 'Ceritakan kebutuhan via WhatsApp atau form — luas area, industri, kondisi khusus.' },
      { num: 2, title: 'Site Assessment', desc: 'Untuk kebutuhan menengah/besar, tim datang ke lokasi untuk survey langsung.' },
      { num: 3, title: 'Rekomendasi Detail', desc: 'Kami berikan proposal: jenis, kapasitas, jumlah, penempatan, dan estimasi biaya.' },
    ],
    why: [
      'Pengalaman 30+ tahun di berbagai industri',
      'Konsultan bersertifikasi K3 dan familiar dengan SNI 180-1-2022',
      'Rekomendasi netral berdasarkan kebutuhan Anda, bukan target penjualan',
      'Konsultasi awal 100% gratis — tanpa komitmen',
    ],
    ctaLabel: 'Mulai Konsultasi',
  },
  {
    slug: 'penempatan',
    title: 'Penempatan APAR yang Tepat',
    tagline: 'APAR terbaik pun percuma jika salah tempat.',
    heroDesc: 'Kami membantu merencanakan penempatan APAR sesuai jarak, ketinggian, dan aksesibilitas yang diatur regulasi keselamatan.',
    icon: '📍',
    problem: 'APAR yang tersembunyi di sudut ruangan atau ditutupi rak tidak akan berfungsi saat darurat. Penempatan yang salah = investasi yang sia-sia.',
    solution: 'Tim PEMAPI membuat rencana penempatan berdasarkan denah lokasi Anda — memastikan setiap area tercover dengan jarak maksimal 15 meter antar unit, ketinggian standar 125 cm dari lantai, dan aksesibilitas 24/7.',
    process: [
      { num: 1, title: 'Analisis Denah', desc: 'Review layout, identifikasi titik risiko tinggi dan jalur evakuasi.' },
      { num: 2, title: 'Rencana Titik', desc: 'Tandai posisi optimal setiap APAR sesuai jenis dan area coverage.' },
      { num: 3, title: 'Instalasi & Signage', desc: 'Pemasangan bracket, tanda arah, dan instruksi penggunaan.' },
    ],
    why: [
      'Sesuai SNI 03-3987-1995 dan Permenaker No. 04/MEN/1980',
      'Signage jelas — arah, jenis APAR, dan cara penggunaan',
      'Pertimbangkan alur evakuasi dan aksesibilitas untuk semua orang',
      'Terintegrasi dengan sistem manajemen digital PEMAPI',
    ],
    ctaLabel: 'Konsultasi Penempatan',
  },
  {
    slug: 'refill-maintenance',
    title: 'Refill & Maintenance APAR',
    tagline: 'APAR yang tidak terawat = tidak punya APAR.',
    heroDesc: 'Layanan perawatan rutin dan isi ulang APAR untuk memastikan seluruh unit siap digunakan saat darurat. Kapasitas 40 unit per hari.',
    icon: '🔧',
    problem: 'APAR punya masa aktif terbatas. Tekanan bisa turun, tabung bisa berkarat, isi bisa menggumpal. Tanpa maintenance rutin, saat kebakaran terjadi APAR gagal berfungsi.',
    solution: 'PEMAPI menyediakan layanan refill dan maintenance terjadwal — dari inspeksi visual bulanan hingga pengisian ulang tahunan dan hidrotest 5 tahunan. Kapasitas produksi 40 unit per hari memastikan turnaround cepat.',
    process: [
      { num: 1, title: 'Jadwalkan', desc: 'Setup jadwal maintenance sesuai jumlah unit — bulanan, 6-bulanan, atau tahunan.' },
      { num: 2, title: 'Pickup atau Onsite', desc: 'Tim datang untuk inspeksi onsite, atau ambil unit untuk refill di workshop.' },
      { num: 3, title: 'Refill & Return', desc: 'Turnaround cepat — kembali dalam 1-3 hari kerja dengan sertifikat maintenance.' },
    ],
    why: [
      'Kapasitas refill 40 unit per hari — turnaround tercepat di Semarang',
      'Jadwal maintenance otomatis via PEMAPI App',
      'Histori maintenance lengkap untuk audit',
      'Sertifikat maintenance untuk setiap unit',
    ],
    ctaLabel: 'Jadwalkan Maintenance',
  },
  {
    slug: 'manajemen-digital',
    title: 'Manajemen APAR Digital',
    tagline: 'Kelola seluruh APAR dari smartphone Anda.',
    heroDesc: 'Setiap APAR PEMAPI memiliki identitas digital — inspeksi via QR Code, inventory real-time, notifikasi otomatis, dan audit trail lengkap.',
    icon: '📱',
    problem: 'Inspeksi APAR manual menyita waktu. Data tersebar di spreadsheet dan form kertas. Jadwal maintenance terlewat. Audit butuh berhari-hari untuk kumpulkan data.',
    solution: 'PEMAPI App mengubah cara Anda mengelola APAR. Scan QR Code untuk inspeksi digital, monitor status real-time, terima notifikasi jadwal, dan generate laporan audit dalam hitungan menit.',
    process: [
      { num: 1, title: 'Setup Awal', desc: 'Kami pasang QR Code di setiap unit dan input data ke sistem.' },
      { num: 2, title: 'Training Tim', desc: 'Sesi training singkat untuk tim Anda menggunakan app dan dashboard.' },
      { num: 3, title: 'Kelola Digital', desc: 'Tim Anda inspeksi via app, kami monitor dan notifikasi jadwal maintenance.' },
    ],
    why: [
      'Inspeksi digital menggantikan form kertas',
      'Dashboard real-time untuk seluruh unit di semua lokasi',
      'Notifikasi otomatis untuk jadwal refill dan maintenance',
      'Audit trail lengkap — siap untuk inspeksi K3 dan sertifikasi',
    ],
    ctaLabel: 'Pelajari PEMAPI App',
  },
];

export const industriList = [
  {
    slug: 'perkantoran',
    title: 'Perkantoran',
    tagline: 'APAR untuk area elektronik, kertas, dan pantry.',
    icon: '🏢',
    heroDesc: 'Perkantoran modern penuh peralatan elektronik, kabel, kertas, dan pantry — kombinasi risiko yang butuh strategi APAR khusus.',
    risks: [
      'Peralatan elektronik dan panel listrik (kelas C)',
      'Tumpukan dokumen dan kertas (kelas A)',
      'Pantry dengan peralatan memasak (kelas A/B)',
      'Server room dengan risiko kritis',
    ],
    solution: 'Kombinasi APAR CO2 untuk area server dan panel listrik, APAR Powder untuk area kerja umum, dan penempatan strategis dekat jalur evakuasi.',
    products: [
      { slug: 'co2', name: 'APAR CO2', desc: 'Server room, panel listrik' },
      { slug: 'powder', name: 'APAR Powder', desc: 'Area kerja umum, pantry' },
    ],
    clientExamples: 'Bank Jateng Syariah, PT Askrindo',
  },
  {
    slug: 'pabrik',
    title: 'Pabrik & Manufaktur',
    tagline: 'Perlindungan untuk area produksi dengan risiko tinggi.',
    icon: '🏭',
    heroDesc: 'Area produksi punya risiko unik — mesin bertekanan tinggi, bahan kimia, minyak, dan area penyimpanan yang butuh perhatian khusus.',
    risks: [
      'Cairan mudah terbakar (minyak pelumas, pelarut) — kelas B',
      'Peralatan bertegangan tinggi — kelas C',
      'Material padat (kayu, tekstil, plastik) — kelas A',
      'Bahan kimia industri dengan risiko reaktif',
    ],
    solution: 'APAR Foam untuk area cairan terbakar, APAR Powder untuk perlindungan serbaguna, dan APAR CO2 untuk area kontrol dan panel listrik. Penempatan dekat setiap workstation.',
    products: [
      { slug: 'foam', name: 'APAR Foam', desc: 'Area cairan, mesin' },
      { slug: 'powder', name: 'APAR Powder', desc: 'Area produksi umum' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Panel kontrol' },
    ],
    clientExamples: 'PT Yuan Yang Wood Indonesia, PT DSL Indonesia, PT RCL Travelware',
  },
  {
    slug: 'hotel',
    title: 'Hotel & Hospitality',
    tagline: 'Keselamatan tamu adalah prioritas nomor satu.',
    icon: '🏨',
    heroDesc: 'Hotel butuh sistem perlindungan kebakaran yang lengkap — dari kamar tamu, dapur, hingga area publik. Regulasi ketat, tamu tidak boleh terganggu.',
    risks: [
      'Dapur komersial dengan minyak goreng (kelas K/F)',
      'Kamar tamu dengan material padat',
      'Area laundry dengan bahan kimia',
      'Ballroom dan area publik dengan aliran orang',
    ],
    solution: 'Kombinasi APAR Foam untuk dapur, APAR Powder untuk kamar dan koridor, dan APAR Clean Agent untuk area server dan arsip. Penempatan mengikuti regulasi hotel star-rating.',
    products: [
      { slug: 'foam', name: 'APAR Foam', desc: 'Dapur, laundry' },
      { slug: 'powder', name: 'APAR Powder', desc: 'Kamar, koridor' },
      { slug: 'halon', name: 'Clean Agent', desc: 'Server, back office' },
    ],
    clientExamples: 'Tersedia atas permintaan',
  },
  {
    slug: 'restoran',
    title: 'Restoran & F&B',
    tagline: 'APAR khusus untuk kebakaran minyak dapur.',
    icon: '🍽️',
    heroDesc: 'Kebakaran minyak dapur (kelas K) tidak bisa dipadamkan dengan APAR biasa — butuh media pemadam khusus yang mencegah re-ignition.',
    risks: [
      'Minyak goreng panas (kelas K)',
      'Kompor gas dan LPG',
      'Alat pemanggang dan oven',
      'Area penyimpanan bahan kering',
    ],
    solution: 'APAR Foam AFFF sangat efektif untuk kebakaran minyak — membentuk lapisan yang memadamkan sekaligus mencegah re-ignition. Dilengkapi APAR Powder untuk area dining.',
    products: [
      { slug: 'foam', name: 'APAR Foam AFFF', desc: 'Dapur, kompor' },
      { slug: 'powder', name: 'APAR Powder', desc: 'Area dining, gudang' },
    ],
    clientExamples: 'Gino Mariani, Apotek K24 Demak',
  },
  {
    slug: 'gudang',
    title: 'Gudang & Logistik',
    tagline: 'Perlindungan area luas dengan material bertumpuk.',
    icon: '📦',
    heroDesc: 'Gudang memiliki karakter khusus — area luas, langit-langit tinggi, material bertumpuk tinggi, dan akses forklift. APAR harus mudah diakses dari berbagai titik.',
    risks: [
      'Material padat bertumpuk (kertas, kardus, plastik) — kelas A',
      'Bahan mudah terbakar dalam kemasan',
      'Peralatan handling seperti forklift',
      'Area loading dengan kendaraan',
    ],
    solution: 'APAR Powder kapasitas besar (9kg) dengan penempatan setiap 15 meter, kombinasi APAR beroda untuk area yang lebih luas. Signage besar dan lampu penunjuk.',
    products: [
      { slug: 'powder', name: 'APAR Powder 9kg', desc: 'Area utama gudang' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Area kontrol' },
    ],
    clientExamples: 'PT Sumber Harpindo Lestari Sentosa',
  },
  {
    slug: 'retail',
    title: 'Retail & Showroom',
    tagline: 'APAR yang tidak mengganggu tampilan tapi selalu siap.',
    icon: '🏪',
    heroDesc: 'Toko retail dan showroom butuh APAR yang selalu siap tapi tidak mengganggu display produk. Estetika dan fungsi harus seimbang.',
    risks: [
      'Peralatan elektronik display',
      'Material tekstil dan pakaian',
      'Area gudang belakang',
      'Aliran pengunjung tinggi',
    ],
    solution: 'APAR Powder untuk area sales floor dengan penempatan discreet namun accessible, APAR CO2 untuk area cashier dan elektronik. Signage minimalis yang tetap jelas.',
    products: [
      { slug: 'powder', name: 'APAR Powder', desc: 'Sales floor, gudang' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Cashier, elektronik' },
    ],
    clientExamples: 'PT Nasmoco Siliwangi, PT Nusantara Sejahtera Raya (Cinema XXI)',
  },
  {
    slug: 'rumah-sakit',
    title: 'Rumah Sakit & Klinik',
    tagline: 'Perlindungan tanpa mengganggu peralatan medis.',
    icon: '🏥',
    heroDesc: 'Rumah sakit punya area sangat sensitif — ICU, laboratorium, ruang operasi, farmasi — yang butuh media pemadam bersih tanpa residu.',
    risks: [
      'Peralatan medis mahal dan sensitif',
      'Ruang operasi dengan gas medis',
      'Laboratorium dengan bahan kimia',
      'Area farmasi dengan obat-obatan',
    ],
    solution: 'APAR Clean Agent untuk ruang operasi, ICU, dan laboratorium (nol residu, aman untuk peralatan). APAR CO2 untuk area server dan panel. APAR Powder untuk area umum.',
    products: [
      { slug: 'halon', name: 'Clean Agent', desc: 'ICU, OK, lab' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Server, MEP room' },
      { slug: 'powder', name: 'APAR Powder', desc: 'Area umum' },
    ],
    clientExamples: 'Apotek K24 Demak, PT Wei Kang Medical',
  },
  {
    slug: 'pendidikan',
    title: 'Sekolah & Universitas',
    tagline: 'Fasilitas pendidikan dengan area dan populasi besar.',
    icon: '🎓',
    heroDesc: 'Kampus dan sekolah punya karakter unik — area luas, banyak lab, perpustakaan, dan populasi anak/remaja yang butuh sistem safety yang jelas.',
    risks: [
      'Laboratorium sains dengan bahan kimia',
      'Perpustakaan dan arsip',
      'Kantin dan dapur',
      'Ruang komputer dan server',
    ],
    solution: 'Kombinasi APAR Powder untuk area umum, APAR CO2 untuk lab komputer dan panel listrik, APAR Foam untuk lab kimia. Signage edukatif dan training safety berkala.',
    products: [
      { slug: 'powder', name: 'APAR Powder', desc: 'Kelas, koridor' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Lab komputer' },
      { slug: 'foam', name: 'APAR Foam', desc: 'Lab kimia, kantin' },
    ],
    clientExamples: 'Tersedia atas permintaan',
  },
  {
    slug: 'pemerintahan',
    title: 'Pemerintahan',
    tagline: 'Compliance dengan regulasi K3 pemerintah.',
    icon: '🏛️',
    heroDesc: 'Kantor pemerintahan wajib compliance ketat dengan regulasi K3, dilengkapi APAR bersertifikasi SNI dan sistem manajemen yang auditable.',
    risks: [
      'Arsip dan dokumen penting negara',
      'Peralatan elektronik dan server',
      'Area publik dengan aliran masyarakat',
      'Regulasi audit K3 yang ketat',
    ],
    solution: 'APAR bersertifikasi SNI 180-1-2022 (wajib untuk instansi pemerintah), sistem manajemen digital untuk audit trail, dan dokumentasi maintenance yang lengkap.',
    products: [
      { slug: 'powder', name: 'APAR Powder', desc: 'Area kerja umum' },
      { slug: 'co2', name: 'APAR CO2', desc: 'Server, panel' },
      { slug: 'halon', name: 'Clean Agent', desc: 'Arsip penting' },
    ],
    clientExamples: 'Tersedia atas permintaan',
  },
];

export function getSolusi(slug) {
  return solusiList.find(s => s.slug === slug);
}

export function getIndustri(slug) {
  return industriList.find(i => i.slug === slug);
}
