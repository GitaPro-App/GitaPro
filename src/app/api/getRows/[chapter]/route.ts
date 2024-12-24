import { getXataClient } from '../../../../utils/xataClient';
import { NextRequest, NextResponse } from 'next/server';

// Define interface matching your Xata database schema
interface DatabaseRecord {
  id: string;
  verse: number;
  transliteration: string;
}

interface XataDatabase {
  'Chapter-1': DatabaseRecord;
  'Chapter-2': DatabaseRecord;
}

export async function GET(
  request: NextRequest,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  { params }: any
): Promise<NextResponse> {
  try {
    const xata = getXataClient();
    const tableName = `Chapter-${params.chapter}` as keyof XataDatabase;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const page = await (xata.db as any)[tableName].getAll();
    const columnCount = page.length;
    return NextResponse.json({ columnCount });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch column count' }, { status: 500 });
  }
}
