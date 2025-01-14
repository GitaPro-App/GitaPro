import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function POST(request: Request) {
  const { sub, name } = await request.json();

  if (!sub || !name) {
    return NextResponse.json(
      { success: false, error: 'Missing sub or name' },
      { status: 400 }
    );
  }

  try {
    const xata = getXataClient();
    // Generate a 6-character random code (uppercase).
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  
    const classroom = await xata.db.Classroom.create({
      code,
      name,
      student: [],
      owner: [sub]
    });

    await xata.db.ClassStream.create({
      classroom_id: classroom.id
    });

  
    // Return success
    return NextResponse.json({ success: true, code, name }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error creating classroom:', error);
    
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
  
}
