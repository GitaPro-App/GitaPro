import { NextRequest, NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sub = searchParams.get('sub');

  if (!sub) {
    return NextResponse.json({ message: 'Missing sub parameter' }, { status: 400 });
  }

  const xata = getXataClient();

  try {
    const user = await xata.db.Users.filter({ sub }).getFirst();

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      versesRead: user.versesRead || {},
      totalVersesRead: user.verse || 0
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}
