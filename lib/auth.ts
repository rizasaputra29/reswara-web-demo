import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback-secret', {
    expiresIn: '7d',
  });
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as { userId: string };
  } catch {
    return null;
  }
}

export async function authenticateUser(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !await verifyPassword(password, user.password)) {
    return null;
  }

  // Update last login
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLogin: new Date() },
  });

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
}