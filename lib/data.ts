export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'landscape' | 'building' | 'perizinan' | 'pengujian' | 'studi' | 'penyelidikan-tanah';
  subcategory?: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  expertise: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'landscape' | 'building' | 'perizinan' | 'pengujian' | 'studi' | 'penyelidikan-tanah';
  subcategory?: string;
  year: string;
  client: string;
  location?: string;
  featured?: boolean;
}

export const services: Service[] = [
  // Landscape Services
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Desain lanskap yang menggabungkan estetika dan fungsionalitas untuk menciptakan ruang luar yang indah dan berkelanjutan.',
    icon: 'Trees',
    category: 'landscape',
    details: [
      'Konsep desain lanskap',
      'Pemilihan tanaman yang tepat',
      'Desain hardscape dan softscape',
      'Sistem irigasi dan drainase'
    ]
  },
  {
    id: 'garden-development',
    title: 'Garden Development',
    description: 'Pengembangan taman dengan pendekatan holistik yang mempertimbangkan aspek ekologi dan estetika.',
    icon: 'Flower',
    category: 'landscape',
    details: [
      'Perencanaan taman tematik',
      'Instalasi sistem irigasi',
      'Pemilihan dan penanaman vegetasi',
      'Maintenance dan perawatan'
    ]
  },
  {
    id: 'green-space',
    title: 'Green Space Development',
    description: 'Pengembangan ruang hijau untuk meningkatkan kualitas lingkungan dan kesejahteraan masyarakat.',
    icon: 'TreePine',
    category: 'landscape',
    details: [
      'Perencanaan ruang terbuka hijau',
      'Desain taman kota',
      'Konservasi area hijau',
      'Urban forestry planning'
    ]
  },
  {
    id: 'environmental-consulting',
    title: 'Environmental Consulting',
    description: 'Konsultasi lingkungan untuk memastikan proyek berjalan sesuai dengan standar kelestarian lingkungan.',
    icon: 'Leaf',
    category: 'landscape',
    details: [
      'Environmental impact assessment',
      'Sustainable design solutions',
      'Green building consultation',
      'Ecological restoration planning'
    ]
  },

  // Building Services
  {
    id: 'desain-arsitektur',
    title: 'Desain Arsitektur',
    description: 'Layanan desain arsitektur untuk berbagai jenis bangunan dengan pendekatan yang inovatif dan berkelanjutan.',
    icon: 'Building',
    category: 'building',
    subcategory: 'Perencanaan dan Desain',
    details: [
      'Desain konseptual',
      'Desain detail',
      'Gambar kerja',
      'Spesifikasi teknis'
    ]
  },
  {
    id: 'desain-struktur',
    title: 'Desain Struktur',
    description: 'Perencanaan struktur bangunan yang aman dan efisien dengan standar internasional.',
    icon: 'Building2',
    category: 'building',
    subcategory: 'Perencanaan dan Desain',
    details: [
      'Analisis struktur',
      'Desain pondasi',
      'Perhitungan beban',
      'Gambar struktur'
    ]
  },
  {
    id: 'desain-mekanikal-plumbing',
    title: 'Desain Mekanikal dan Plumbing',
    description: 'Sistem MEP (Mechanical, Electrical, Plumbing) yang terintegrasi dan efisien.',
    icon: 'Settings',
    category: 'building',
    subcategory: 'Perencanaan dan Desain',
    details: [
      'Sistem HVAC',
      'Sistem plumbing',
      'Sistem fire protection',
      'Sistem elektrikal'
    ]
  },

  // Perizinan
  {
    id: 'izin-lingkungan',
    title: 'Izin Lingkungan',
    description: 'Pengurusan izin lingkungan termasuk RKL-RPL, AMDAL, dan UKL-UPL.',
    icon: 'FileCheck',
    category: 'perizinan',
    subcategory: 'Izin Lingkungan',
    details: [
      'RKL-RPL (Rencana Kelola Lingkungan)',
      'AMDAL (Analisis Mengenai Dampak Lingkungan)',
      'UKL-UPL (Upaya Kelola Lingkungan)',
      'Izin pembuangan limbah'
    ]
  },
  {
    id: 'andalalin',
    title: 'Andalalin',
    description: 'Analisis dampak lalu lintas untuk proyek pembangunan.',
    icon: 'Car',
    category: 'perizinan',
    details: [
      'Studi kelayakan lalu lintas',
      'Analisis dampak',
      'Rekomendasi mitigasi',
      'Dokumen andalalin'
    ]
  },
  {
    id: 'pbg',
    title: 'PBG (Persetujuan Bangunan Gedung)',
    description: 'Pengurusan persetujuan bangunan gedung sesuai regulasi.',
    icon: 'FileText',
    category: 'perizinan',
    details: [
      'Dokumen teknis',
      'Perhitungan struktur',
      'Gambar arsitektur',
      'Spesifikasi bangunan'
    ]
  },
  {
    id: 'slf',
    title: 'SLF (Sertifikat Laik Fungsi)',
    description: 'Sertifikasi kelayakan fungsi bangunan gedung.',
    icon: 'Award',
    category: 'perizinan',
    details: [
      'Inspeksi bangunan',
      'Pengujian sistem',
      'Evaluasi keselamatan',
      'Sertifikat laik fungsi'
    ]
  },

  // Pengujian
  {
    id: 'uji-lingkungan',
    title: 'Uji Lingkungan',
    description: 'Pengujian kualitas lingkungan dan dampak proyek.',
    icon: 'Search',
    category: 'pengujian',
    details: [
      'Uji kualitas air',
      'Uji kualitas udara',
      'Uji kebisingan',
      'Uji tanah'
    ]
  },
  {
    id: 'uji-riksa-k3',
    title: 'Uji Riksa K3',
    description: 'Pengujian keselamatan dan kesehatan kerja.',
    icon: 'Shield',
    category: 'pengujian',
    details: [
      'Audit K3',
      'Inspeksi keselamatan',
      'Evaluasi risiko',
      'Sertifikasi K3'
    ]
  },

  // Studi
  {
    id: 'studi-kelayakan',
    title: 'Studi Kelayakan',
    description: 'Analisis kelayakan teknis dan ekonomis proyek.',
    icon: 'BarChart',
    category: 'studi',
    details: [
      'Analisis teknis',
      'Analisis ekonomi',
      'Analisis risiko',
      'Rekomendasi'
    ]
  },
  {
    id: 'studi-dampak-lingkungan',
    title: 'Studi Dampak Lingkungan',
    description: 'Evaluasi dampak lingkungan dari proyek pembangunan.',
    icon: 'Leaf',
    category: 'studi',
    details: [
      'Baseline study',
      'Impact assessment',
      'Mitigation measures',
      'Monitoring plan'
    ]
  },

  // Penyelidikan Tanah
  {
    id: 'sondir',
    title: 'Sondir',
    description: 'Penyelidikan tanah dengan metode sondir untuk analisis daya dukung.',
    icon: 'Layers',
    category: 'penyelidikan-tanah',
    details: [
      'Sondir test',
      'Analisis daya dukung',
      'Profil tanah',
      'Rekomendasi pondasi'
    ]
  },
  {
    id: 'boring',
    title: 'Boring',
    description: 'Pengeboran tanah untuk sampling dan analisis laboratorium.',
    icon: 'Drill',
    category: 'penyelidikan-tanah',
    details: [
      'Boring test',
      'Sampling tanah',
      'Uji laboratorium',
      'Laporan geoteknik'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'director',
    name: 'Ir. Ahmad Reswara',
    position: 'Director & Lead Architect',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dengan pengalaman lebih dari 15 tahun dalam industri arsitektur dan lanskap, memimpin tim dalam menciptakan solusi desain yang inovatif dan berkelanjutan.',
    expertise: ['Arsitektur', 'Desain Lanskap', 'Manajemen Proyek', 'Sustainable Design']
  },
  {
    id: 'landscape-lead',
    name: 'Dr. Sari Praptama',
    position: 'Lead Landscape Designer',
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Spesialis dalam desain lanskap berkelanjutan dengan fokus pada konservasi lingkungan dan estetika yang harmonis.',
    expertise: ['Landscape Design', 'Environmental Conservation', 'Botanical Planning', 'Sustainable Landscaping']
  },
  {
    id: 'structural-engineer',
    name: 'Ir. Budi Santoso',
    position: 'Structural Engineer',
    image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Ahli struktur bangunan dengan pengalaman dalam berbagai proyek konstruksi skala besar dan kompleks.',
    expertise: ['Structural Engineering', 'Building Analysis', 'Construction Planning', 'Safety Assessment']
  },
  {
    id: 'environmental-consultant',
    name: 'Dr. Maya Kusuma',
    position: 'Environmental Consultant',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Konsultan lingkungan berpengalaman dalam menangani berbagai aspek perizinan dan dampak lingkungan.',
    expertise: ['Environmental Impact Assessment', 'Permit Management', 'Sustainability Planning', 'Regulatory Compliance']
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'garden-residence',
    title: 'Garden Residence Complex',
    description: 'Pengembangan kompleks perumahan dengan konsep garden city yang terintegrasi dengan lanskap alami.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'landscape',
    year: '2023',
    client: 'PT. Graha Indah',
    location: 'Jakarta Selatan',
    featured: true
  },
  {
    id: 'corporate-office',
    title: 'Corporate Office Building',
    description: 'Desain dan pembangunan gedung perkantoran modern dengan sertifikasi green building.',
    image: 'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'building',
    subcategory: 'Perencanaan dan Desain',
    year: '2023',
    client: 'PT. Teknologi Maju',
    location: 'Jakarta Pusat',
    featured: true
  },
  {
    id: 'environmental-permit',
    title: 'AMDAL Industrial Complex',
    description: 'Penyusunan dokumen AMDAL untuk kompleks industri dengan analisis dampak lingkungan komprehensif.',
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'perizinan',
    subcategory: 'Izin Lingkungan',
    year: '2022',
    client: 'PT. Industri Nusantara',
    location: 'Bekasi',
    featured: true
  },
  {
    id: 'soil-investigation',
    title: 'Soil Investigation Mall Project',
    description: 'Penyelidikan tanah komprehensif untuk proyek pembangunan mall dengan metode boring dan sondir.',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'penyelidikan-tanah',
    year: '2022',
    client: 'PT. Retail Nusantara',
    location: 'Tangerang'
  },
  {
    id: 'feasibility-study',
    title: 'Resort Development Feasibility',
    description: 'Studi kelayakan pengembangan resort dengan analisis teknis, ekonomi, dan lingkungan.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'studi',
    year: '2021',
    client: 'Paradise Resort & Spa',
    location: 'Bali'
  },
  {
    id: 'hospital-testing',
    title: 'Hospital Safety Testing',
    description: 'Pengujian keselamatan dan sertifikasi SLF untuk kompleks rumah sakit.',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pengujian',
    year: '2021',
    client: 'RS. Sehat Sentosa',
    location: 'Jakarta Timur'
  },
  {
    id: 'urban-park',
    title: 'Urban Park Development',
    description: 'Pengembangan taman kota dengan konsep sustainable landscape dan fasilitas rekreasi modern.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'landscape',
    year: '2023',
    client: 'Pemda Kota Jakarta',
    location: 'Jakarta Pusat'
  },
  {
    id: 'residential-complex',
    title: 'Residential Complex Design',
    description: 'Desain arsitektur kompleks hunian dengan pendekatan modern minimalis dan ramah lingkungan.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'building',
    year: '2022',
    client: 'PT. Properti Sejahtera',
    location: 'Tangerang Selatan'
  },
  {
    id: 'factory-permit',
    title: 'Factory Environmental Permit',
    description: 'Pengurusan izin lingkungan untuk pabrik manufaktur dengan sistem pengelolaan limbah terintegrasi.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'perizinan',
    year: '2022',
    client: 'PT. Manufaktur Indonesia',
    location: 'Karawang'
  },
  {
    id: 'water-quality-testing',
    title: 'Water Quality Testing Project',
    description: 'Pengujian kualitas air dan sistem pengolahan limbah untuk industri tekstil.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pengujian',
    year: '2023',
    client: 'PT. Tekstil Nusantara',
    location: 'Bandung'
  },
  {
    id: 'highway-feasibility',
    title: 'Highway Development Study',
    description: 'Studi kelayakan pembangunan jalan tol dengan analisis dampak lingkungan dan sosial.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'studi',
    year: '2021',
    client: 'Kementerian PUPR',
    location: 'Jawa Barat'
  },
  {
    id: 'foundation-investigation',
    title: 'Foundation Soil Investigation',
    description: 'Penyelidikan tanah untuk pondasi gedung bertingkat tinggi dengan metode boring dan SPT.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'penyelidikan-tanah',
    year: '2023',
    client: 'PT. Konstruksi Prima',
    location: 'Jakarta Selatan'
  }
];

export const companyInfo = {
  name: 'CV Reswara Praptama',
  tagline: 'Transforming Spaces, Creating Sustainable Futures',
  description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap. Kami menyediakan solusi komprehensif untuk menciptakan ruang yang estetis, fungsional, dan berkelanjutan.',
  established: '2010',
  phone: '+62 21 1234 5678',
  email: 'info@reswarapraptama.com',
  address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
  website: 'www.reswarapraptama.com',
  whatsapp: '+62 812 3456 7890',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/reswara-praptama',
    instagram: 'https://instagram.com/reswarapraptama',
    facebook: 'https://facebook.com/reswarapraptama'
  }
};

// Admin data management
export const adminData = {
  username: 'admin',
  password: 'admin123', // In a real app, this would be hashed
  settings: {
    siteName: companyInfo.name,
    siteDescription: companyInfo.description,
    contactEmail: companyInfo.email,
    contactPhone: companyInfo.phone
  }
};

// Visitor tracking
export let visitorCount = 0;
export const incrementVisitorCount = () => {
  visitorCount++;
  return visitorCount;
};

export const getVisitorCount = () => visitorCount;