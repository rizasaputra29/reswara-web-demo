import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
  }

  let connection;
  try {
    // Buat koneksi ke database menggunakan variabel lingkungan
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    // Query untuk mencari admin berdasarkan username
    const [rows] = await connection.execute(
      'SELECT * FROM admins WHERE username = ?',
      [username]
    );

    // TypeScript perlu bantuan untuk mengetahui tipe dari rows
    const users = rows as any[];

    if (users.length === 0) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const user = users[0];

    // Verifikasi password (Di dunia nyata, bandingkan hash password)
    if (user.password !== password) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    // Jika berhasil, kirim respons sukses
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });

  } catch (error) {
    console.error('Database connection or query failed:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}