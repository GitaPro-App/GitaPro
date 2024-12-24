import { getXataClient } from '@/utils/xataClient';
import { NextRequest, NextResponse } from 'next/server';

export type Verse = {
  verse: number;
  transliteration: string;
  translation: string;
}

export async function GET(
  request: NextRequest,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  { params }: any
): Promise<NextResponse> {
  try {
    const xata = getXataClient();
    const tableName = `Chapter-${params.chapter}`;
    // Use bracket notation to access table with hyphen
    const verses = await xata.db[tableName as keyof typeof xata.db].getAll();
    return NextResponse.json({ verses });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch verses' }, 
      { status: 500 }
    );
  }
}
