export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized ({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAuth = nextUrl.pathname.startsWith('/auth');
      const isStatic = nextUrl.pathname.startsWith('/static');
      if (isStatic) {
        return true;
      } else if (!isOnAuth) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/posts', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};