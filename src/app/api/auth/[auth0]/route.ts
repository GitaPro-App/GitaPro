// src/app/api/auth/[auth0]/route.ts
import { handleAuth } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: { params: { auth0: string[] | string } }) {
    const params = await context.params;
    const auth0Handler = handleAuth();
    return auth0Handler(request, context);
}