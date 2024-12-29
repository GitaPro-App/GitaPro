import { NextRequest, NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sub, chapter, verses } = body;

    if (!sub || !chapter || !verses) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const xata = getXataClient();
    const user = await xata.db.Users.filter({ sub }).getFirst();

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // eslint-disable-next-line prefer-const
    let  versesRead = user.versesRead || {};
    versesRead[chapter] = verses;

    const totalVersesRead = Object.values(versesRead).flat().length;

    await xata.db.Users.update(user.id, {
      versesRead,
      verse: totalVersesRead
    });

    

    return NextResponse.json({ message: 'Verses updated successfully' });
  } catch (err) {
    console.error('Error updating verses:', err);
    return NextResponse.json({ message: 'Error updating verses' }, { status: 500 });
  }
}
