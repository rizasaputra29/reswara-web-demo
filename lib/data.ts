export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'landscape' | 'building';
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
  category: 'landscape' | 'building';
  year: string;
  client: string;
}

export const services: Service[] = [
  {
    id: 'landscape-design',
    title: 'Desain Lanskap',
    description: 'Jasa desain yang membantu menciptakan rencana lanskap yang sesuai dengan kebutuhan dan preferensi klien.',
    icon: 'Palette',
    category: 'landscape',
    details: [
      'Konsep desain lanskap',
      'Perencanaan tata ruang',
      'Pemilihan tanaman',
      'Desain hardscape'
    ]
  },
  {
    id: 'garden-development',
    title: 'Pengembangan Taman',
    description: 'Layanan yang membantu menciptakan taman yang indah dan fungsional, termasuk pemilihan tanaman, desain jalur, dan instalasi sistem irigasi.',
    icon: 'Trees',
    category: 'landscape',
    details: [
      'Desain taman',
      'Instalasi sistem irigasi',
      'Pemilihan tanaman hias',
      'Maintenance taman'
    ]
  },
  {
    id: 'green-space',
    title: 'Pengembangan Ruang Terbuka Hijau',
    description: 'Layanan yang membantu menciptakan ruang terbuka hijau yang dapat digunakan untuk rekreasi, olahraga, atau kegiatan lainnya.',
    icon: 'TreePine',
    category: 'landscape',
    details: [
      'Perencanaan RTH',
      'Desain area rekreasi',
      'Fasilitas olahraga',
      'Konservasi lingkungan'
    ]
  },
  {
    id: 'environmental-consulting',
    title: 'Konsultasi Lingkungan',
    description: 'Jasa yang membantu mengidentifikasi dan mengatasi masalah lingkungan yang terkait dengan pengembangan lanskap.',
    icon: 'Leaf',
    category: 'landscape',
    details: [
      'Analisis dampak lingkungan',
      'Mitigasi risiko',
      'Sustainable design',
      'Environmental assessment'
    ]
  },
  {
    id: 'architectural-design',
    title: 'Desain Arsitektur',
    description: 'Layanan desain arsitektur untuk berbagai jenis bangunan dengan pendekatan yang inovatif dan berkelanjutan.',
    icon: 'Building',
    category: 'building',
    details: [
      'Desain arsitektur',
      'Desain struktur',
      'Desain MEP',
      'Perencanaan detail'
    ]
  },
  {
    id: 'permits',
    title: 'Perizinan',
    description: 'Jasa pengurusan berbagai macam perizinan bangunan dan lingkungan.',
    icon: 'FileCheck',
    category: 'building',
    details: [
      'Izin lingkungan (RKL-RPL, AMDAL, UKL-UPL)',
      'Andalalin',
      'PBG (Persetujuan Bangunan Gedung)',
      'SLF (Sertifikat Laik Fungsi)'
    ]
  },
  {
    id: 'testing',
    title: 'Pengujian',
    description: 'Layanan pengujian dan inspeksi untuk memastikan kualitas dan keamanan bangunan.',
    icon: 'Search',
    category: 'building',
    details: [
      'Uji lingkungan',
      'Uji Riksa K3',
      'Quality control',
      'Safety inspection'
    ]
  },
  {
    id: 'studies',
    title: 'Studi Kelayakan',
    description: 'Layanan studi dan analisis untuk mendukung pengambilan keputusan proyek.',
    icon: 'FileText',
    category: 'building',
    details: [
      'Studi kelayakan',
      'Studi dampak lingkungan',
      'Feasibility analysis',
      'Risk assessment'
    ]
  },
  {
    id: 'soil-investigation',
    title: 'Penyelidikan Tanah',
    description: 'Layanan penyelidikan tanah untuk mendukung perencanaan pondasi dan struktur bangunan.',
    icon: 'Layers',
    category: 'building',
    details: [
      'Sondir test',
      'Boring test',
      'Soil analysis',
      'Foundation recommendation'
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
    client: 'PT. Graha Indah'
  },
  {
    id: 'corporate-office',
    title: 'Corporate Office Building',
    description: 'Desain dan pembangunan gedung perkantoran modern dengan sertifikasi green building.',
    image: 'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'building',
    year: '2023',
    client: 'PT. Teknologi Maju'
  },
  {
    id: 'city-park',
    title: 'Central City Park',
    description: 'Revitalisasi taman kota dengan konsep ramah lingkungan dan fasilitas rekreasi keluarga.',
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'landscape',
    year: '2022',
    client: 'Pemda Kota Jakarta'
  },
  {
    id: 'shopping-mall',
    title: 'Modern Shopping Mall',
    description: 'Perencanaan dan desain mall modern dengan integrasi ruang terbuka hijau.',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'building',
    year: '2022',
    client: 'PT. Retail Nusantara'
  },
  {
    id: 'resort-landscape',
    title: 'Tropical Resort Landscape',
    description: 'Desain lanskap resort dengan konsep tropical paradise yang memadukan alam dan kenyamanan.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'landscape',
    year: '2021',
    client: 'Paradise Resort & Spa'
  },
  {
    id: 'hospital-complex',
    title: 'Hospital Complex',
    description: 'Desain kompleks rumah sakit dengan standar internasional dan healing garden.',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'building',
    year: '2021',
    client: 'RS. Sehat Sentosa'
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