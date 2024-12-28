import { NextResponse } from 'next/server';
import { getXataClient } from '@/utils/xataClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sub = searchParams.get('sub');

  if (!sub) {
    return NextResponse.json({ error: 'Sub parameter is required' }, { status: 400 });
  }

  const xata = getXataClient();

  try {
    const user = await xata.db.Users.filter({ sub }).getFirst();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Parse the preferences string back into an object
    const preferences = JSON.parse(user.preferences as string);

    const userData = {
      name: user.name,
      email: user.email,
      preferences: preferences,
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}
