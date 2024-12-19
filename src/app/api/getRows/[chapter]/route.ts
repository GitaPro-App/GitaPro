import { getXataClient } from '../../../../utils/xataClient';
import { NextRequest, NextResponse } from 'next/server';

type TableNames = {
  "Chapter-1": Record<string, unknown>;
  "Chapter-2": Record<string, unknown>;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ chapter: string }> }
): Promise<NextResponse> {
  try {
    const { chapter } = await params;
    const xata = getXataClient();
    const tableName = `Chapter-${chapter}` as keyof TableNames;
    const page = await xata.db[tableName].getAll();
    const columnCount = page.length;
    return NextResponse.json({ columnCount });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch column count' }, { status: 500 });
  }
}
