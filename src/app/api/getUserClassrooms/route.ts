import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sub = searchParams.get('sub');

    if (!sub) {
      return NextResponse.json({ error: 'Sub parameter is required' }, { status: 400 });
    }

    const xata = getXataClient();
    // "$any" is the logical OR aggregator in Xata,
    // and "$includes" is the operator to check if a multiple (array) column
    // includes the string "sub".
    const classrooms = await xata.db.Classroom.filter({
      $any: [
        { student: { $includes: sub } },
        { owner: { $includes: sub } },
      ],
    }).getAll();

    return NextResponse.json(classrooms);
  } catch (error) {
    console.error('Error fetching user classrooms:', error);
    return NextResponse.json({ error: 'Failed to fetch user classrooms' }, { status: 500 });
  }
}
