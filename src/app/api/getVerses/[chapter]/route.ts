// app/api/getVerses/[chapter]/route.ts
import { getXataClient } from '@/utils/xataClient';
import { NextResponse } from 'next/server';

type TableNames = {
    "Chapter-1": string;
    "Chapter-2": string;
  };

export type Verse = {
  verse: number;
  transliteration: string;
  translation: string;
}

export async function GET(
  request: Request,
  { params }: { params: { chapter: string } }
) {
  try {
    const xata = getXataClient();
    const tableName = `Chapter-${params.chapter}`;
    const verses = await xata.db[tableName].getAll();
    return NextResponse.json({ verses });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch verses' }, 
      { status: 500 }
    );
  }
}
