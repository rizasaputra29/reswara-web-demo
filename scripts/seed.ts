import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await hashPassword('admin123');
  
  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@reswarapraptama.com',
      password: hashedPassword,
      role: 'ADMIN',
      firstName: 'Admin',
      lastName: 'User',
      isActive: true,
    },
  });

  console.log('✅ Created admin user:', adminUser.username);

  // Create default hero content
  const heroContent = await prisma.heroContent.upsert({
    where: { id: 'default-hero' },
    update: {},
    create: {
      id: 'default-hero',
      title: 'Transform Your Space with Professional Excellence',
      description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      isActive: true,
    },
  });

  console.log('✅ Created hero content');

  // Create default company settings
  const companySettings = await prisma.companySettings.upsert({
    where: { id: 'default-settings' },
    update: {},
    create: {
      id: 'default-settings',
      name: 'CV Reswara Praptama',
      tagline: 'Transforming Spaces, Creating Sustainable Futures',
      description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap.',
      phone: '+62 21 1234 5678',
      email: 'info@reswarapraptama.com',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
      whatsapp: '+62 812 3456 7890',
      website: 'www.reswarapraptama.com',
      linkedin: 'https://linkedin.com/company/reswara-praptama',
      instagram: 'https://instagram.com/reswarapraptama',
      facebook: 'https://facebook.com/reswarapraptama',
      isActive: true,
    },
  });

  console.log('✅ Created company settings');

  // Create default team members
  const teamMembers = [
    {
      name: 'Ir. Ahmad Reswara',
      position: 'Director & Lead Architect',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dengan pengalaman lebih dari 15 tahun dalam industri arsitektur dan lanskap, memimpin tim dalam menciptakan solusi desain yang inovatif dan berkelanjutan.',
      expertise: ['Arsitektur', 'Desain Lanskap', 'Manajemen Proyek', 'Sustainable Design'],
      order: 1,
    },
    {
      name: 'Dr. Sari Praptama',
      position: 'Lead Landscape Designer',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Spesialis dalam desain lanskap berkelanjutan dengan fokus pada konservasi lingkungan dan estetika yang harmonis.',
      expertise: ['Landscape Design', 'Environmental Conservation', 'Botanical Planning', 'Sustainable Landscaping'],
      order: 2,
    },
    {
      name: 'Ir. Budi Santoso',
      position: 'Structural Engineer',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ahli struktur bangunan dengan pengalaman dalam berbagai proyek konstruksi skala besar dan kompleks.',
      expertise: ['Structural Engineering', 'Building Analysis', 'Construction Planning', 'Safety Assessment'],
      order: 3,
    },
    {
      name: 'Dr. Maya Kusuma',
      position: 'Environmental Consultant',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Konsultan lingkungan berpengalaman dalam menangani berbagai aspek perizinan dan dampak lingkungan.',
      expertise: ['Environmental Impact Assessment', 'Permit Management', 'Sustainability Planning', 'Regulatory Compliance'],
      order: 4,
    },
  ];

  for (const member of teamMembers) {
    await prisma.teamMember.upsert({
      where: { id: member.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
        id: member.name.toLowerCase().replace(/\s+/g, '-'),
        ...member,
        isActive: true,
      },
    });
  }

  console.log('✅ Created team members');

  console.log('🎉 Seeding completed!');
  console.log('');
  console.log('Admin credentials:');
  console.log('Username: admin');
  console.log('Password: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });