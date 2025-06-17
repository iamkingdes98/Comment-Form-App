import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(req: Request) {
  const { comment } = await req.json();
  await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  return NextResponse.json({ success: true });
}
