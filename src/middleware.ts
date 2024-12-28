import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export const config = {
  matcher: [
    '/chapter/:path*'  // Protects all chapter routes
  ]
};

export default withMiddlewareAuthRequired();
