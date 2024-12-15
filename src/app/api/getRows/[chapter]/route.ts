// app/api/getRows/[chapter]/route.ts
import { getXataClient } from '../../../../utils/xataClient';
import { NextResponse } from 'next/server';

type TableNames = {
  "Chapter-1": any;
  "Chapter-2": any;
};

export async function GET(
  request: Request,
  { params }: { params: { chapter: string } }
) {
  try {
    const xata = getXataClient();
    const chapter = params.chapter;
    const tableName = `Chapter-${chapter}` as keyof TableNames;
    const page = await xata.db[tableName].getAll();
    const columnCount = page.length;
    return NextResponse.json({ columnCount });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch column count' }, { status: 500 });
  }
}
