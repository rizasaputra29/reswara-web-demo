import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    const heroContent = await prisma.heroContent.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    if (!heroContent) {
      // Return default content
      return NextResponse.json({
        title: 'Transform Your Space with Professional Excellence',
        description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      });
    }

    return NextResponse.json(heroContent);
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hero content' },
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

    // Deactivate existing hero content
    await prisma.heroContent.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });

    // Create new hero content
    const heroContent = await prisma.heroContent.create({
      data: {
        title: data.title,
        description: data.description,
        image: data.image,
        isActive: true,
      },
    });

    return NextResponse.json(heroContent);
  } catch (error) {
    console.error('Error updating hero content:', error);
    return NextResponse.json(
      { error: 'Failed to update hero content' },
      { status: 500 }
    );
  }
}