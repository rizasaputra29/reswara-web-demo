import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    const settings = await prisma.companySettings.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    if (!settings) {
      // Return default settings
      return NextResponse.json({
        name: 'CV Reswara Praptama',
        tagline: 'Transforming Spaces, Creating Sustainable Futures',
        description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap.',
        phone: '+62 21 1234 5678',
        email: 'info@reswarapraptama.com',
        address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
        whatsapp: '+62 812 3456 7890'
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching company settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch company settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    // Deactivate existing settings
    await prisma.companySettings.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });

    // Create new settings
    const settings = await prisma.companySettings.create({
      data: {
        name: data.name,
        tagline: data.tagline,
        description: data.description,
        phone: data.phone,
        email: data.email,
        address: data.address,
        whatsapp: data.whatsapp,
        website: data.website,
        linkedin: data.linkedin,
        instagram: data.instagram,
        facebook: data.facebook,
        isActive: true,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating company settings:', error);
    return NextResponse.json(
      { error: 'Failed to update company settings' },
      { status: 500 }
    );
  }
}