import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [
      totalContacts,
      newContacts,
      totalTeamMembers,
      totalPortfolios,
      recentContacts,
    ] = await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'NEW' } }),
      prisma.teamMember.count({ where: { isActive: true } }),
      prisma.portfolio.count({ where: { isActive: true } }),
      prisma.contact.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const stats = {
      totalContacts,
      newContacts,
      totalTeamMembers,
      totalPortfolios,
      recentContacts,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}