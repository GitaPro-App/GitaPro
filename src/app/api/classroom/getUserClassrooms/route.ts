import { NextResponse } from 'next/server';
import { getXataClient } from '../../../../utils/xataClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sub = searchParams.get('sub');

    if (!sub) {
      return NextResponse.json({ error: 'Sub parameter is required' }, { status: 400 });
    }

    const xata = getXataClient();

    const [studentClassrooms, ownerClassrooms] = await Promise.all([
        xata.db.Classroom.filter({ student: { $includes: sub } }).getAll(),
        xata.db.Classroom.filter({ owner: { $includes: sub } }).getAll()
    ]);
  

    return NextResponse.json({
        studentClassrooms: studentClassrooms,
        ownerClassrooms: ownerClassrooms
      });
      
  } catch (error) {
    console.error('Error fetching user classrooms:', error);
    return NextResponse.json({ error: 'Failed to fetch user classrooms' }, { status: 500 });
  }
}
