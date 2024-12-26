// src/app/api/firstTimeUser/route.ts
import { getXataClient } from '@/utils/xataClient';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sub = searchParams.get('sub');
  const email = searchParams.get('email');
  const name = searchParams.get('name');

  if (!sub) {
    return NextResponse.json(
      { error: 'Sub parameter is required' },
      { status: 400 }
    );
  }

  const xata = getXataClient();

  try {
    const existingUser = await xata.db.Users.filter({ sub: sub }).getFirst();
    
    if (!existingUser) {
      await xata.db.Users.create({
        email: email || '',
        name: name || '',
        sub: sub,
        verse: 0
      });
    }
    
    return NextResponse.json({ isFirstTimeUser: !existingUser });
  } catch {
    return NextResponse.json(
      { error: 'Failed to check user' },
      { status: 500 }
    );
  
  }
}
