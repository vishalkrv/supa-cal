import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from './api';

async function userExists (email) {
  try {
    const user = await getUser(email)
    if (user.length > 0) {
      return user[0]
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize (credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await userExists(email);
          if (!user) return null;

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          const passwordsMatch = (user.password === password);
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});