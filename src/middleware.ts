import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export const config = {
  matcher: [
    '/chapter/:path*', 
    '/chapter'
  ]
};

export default withMiddlewareAuthRequired();
