import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let heroContent = await prisma.heroContent.findFirst();
    
    if (!heroContent) {
      // Create default hero content if none exists
      heroContent = await prisma.heroContent.create({
        data: {
          title: 'Transform Your Space with Professional Excellence',
          description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      });
    }
    
    return NextResponse.json(heroContent);
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return NextResponse.json({ error: 'Failed to fetch hero content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    let heroContent = await prisma.heroContent.findFirst();
    
    if (heroContent) {
      heroContent = await prisma.heroContent.update({
        where: { id: heroContent.id },
        data: {
          title: data.title,
          description: data.description,
          image: data.image
        }
      });
    } else {
      heroContent = await prisma.heroContent.create({
        data: {
          title: data.title,
          description: data.description,
          image: data.image
        }
      });
    }
    
    return NextResponse.json(heroContent);
  } catch (error) {
    console.error('Error updating hero content:', error);
    return NextResponse.json({ error: 'Failed to update hero content' }, { status: 500 });
  }
}