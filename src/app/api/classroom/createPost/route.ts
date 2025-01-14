import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function POST(req: Request) {
  const { classroom_id, author, postText } = await req.json();

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

    const post = {
      "author": author, 
      "postText": postText, 
      "comments": []
    };

    let streamArray = classStream.stream ?? [];
    streamArray = Array.isArray(streamArray) ? streamArray : [];
    
    streamArray.push(JSON.stringify(post));

    await xata.db.ClassStream.update(classStream.id, {
      stream: streamArray,
    });
    
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error adding post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
