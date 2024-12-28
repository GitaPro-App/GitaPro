import { getXataClient } from '@/utils/xataClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { sub, minutesPerDay, depth, gitaType } = await request.json();
  
    if (!sub) {
      return NextResponse.json(
        { error: 'Sub parameter is required' },
        { status: 400 }
      );
    }
  
    const xata = getXataClient();
  
    try {
      const existingUser = await xata.db.Users.filter({ sub }).getFirst();
      
      if (!existingUser) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }
  
      // Convert preferences object to string since the column is text type
      const preferencesString = JSON.stringify({
        minutesPerDay,
        depth,
        gitaType
      });
  
      const updatedUser = await xata.db.Users.update(existingUser.id, {
        preferences: preferencesString
      });
      
      return NextResponse.json({ success: true, user: updatedUser });
    } catch {
      return NextResponse.json(
        { error: 'Failed to update user preferences' },
        { status: 500 }
      );
    }
  }
  
  
  