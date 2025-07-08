import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let companySettings = await prisma.companySettings.findFirst();
    
    if (!companySettings) {
      // Create default company settings if none exists
      companySettings = await prisma.companySettings.create({
        data: {
          name: 'CV Reswara Praptama',
          tagline: 'Transforming Spaces, Creating Sustainable Futures',
          description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap.',
          phone: '+62 21 1234 5678',
          email: 'info@reswarapraptama.com',
          address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
          whatsapp: '+62 812 3456 7890'
        }
      });
    }
    
    return NextResponse.json(companySettings);
  } catch (error) {
    console.error('Error fetching company settings:', error);
    return NextResponse.json({ error: 'Failed to fetch company settings' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    let companySettings = await prisma.companySettings.findFirst();
    
    if (companySettings) {
      companySettings = await prisma.companySettings.update({
        where: { id: companySettings.id },
        data: {
          name: data.name,
          tagline: data.tagline,
          description: data.description,
          phone: data.phone,
          email: data.email,
          address: data.address,
          whatsapp: data.whatsapp
        }
      });
    } else {
      companySettings = await prisma.companySettings.create({
        data: {
          name: data.name,
          tagline: data.tagline,
          description: data.description,
          phone: data.phone,
          email: data.email,
          address: data.address,
          whatsapp: data.whatsapp
        }
      });
    }
    
    return NextResponse.json(companySettings);
  } catch (error) {
    console.error('Error updating company settings:', error);
    return NextResponse.json({ error: 'Failed to update company settings' }, { status: 500 });
  }
}