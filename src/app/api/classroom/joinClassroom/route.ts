import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function POST(request: Request) {
    try {
        const { code, sub } = await request.json();
        if (!code || !sub) {
        return NextResponse.json({ success: false, message: 'Missing code or sub' }, { status: 400 });
        }

        const xata = getXataClient();

        // 1. Find the classroom by its code
        const classroom = await xata.db.Classroom.filter({ code }).getFirst();

        if (!classroom) {
        return NextResponse.json({ success: false, message: 'Classroom not found' }, { status: 404 });
        }

        if (classroom.owner?.includes(sub)) {
            return NextResponse.json({ success: false, message: 'Cannot be a teacher and owner at the same time' }, { status: 404 });
        }



        // 2. Add the user to the "student" array, if not already in it
        const updatedStudents = classroom.student ?? [];

        if (updatedStudents.includes(sub)) {
            return NextResponse.json({ success: false, message: 'Already in class' }, { status: 404 });
        } else {
        updatedStudents.push(sub);
        }

        // 3. Update the record in Xata
        await xata.db.Classroom.update(classroom.id, { student: updatedStudents });

        return NextResponse.json({ success: true, classroomId: classroom.id });
    } catch (error: unknown) {
        console.error('Error joining classroom:', error);
        
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
