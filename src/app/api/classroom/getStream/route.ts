import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function POST(req: Request) {
  const { classroom_id } = await req.json();

  if (!classroom_id) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const xata = getXataClient();

  try {
    const classroom = await xata.db.Classroom.read(classroom_id);
    if (!classroom) {
      return NextResponse.json({ message: 'Classroom not found' }, { status: 404 });
    }

    const classStream = await xata.db.ClassStream
      .select(["*"]) 
      .filter({ classroom_id: classroom_id })
      .getFirst();

    if (!classStream) {
      return NextResponse.json({ message: 'Class stream not found' }, { status: 404 });
    }

    return NextResponse.json({ "stream": classStream.stream });

  } catch (error) {
    console.error('Error getting stream:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
