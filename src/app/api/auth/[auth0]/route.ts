import { handleAuth } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ auth0: string }> }
) {
  const { auth0 } = await params;
  const auth0Handler = handleAuth();
  return auth0Handler(request, { params: { auth0 } });
}