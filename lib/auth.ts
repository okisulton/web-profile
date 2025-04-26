// lib/auth.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'Username', type: 'text' },
            password: { label: 'Password', type: 'password' },
          },
          async authorize(credentials) {
            try {
              // Ensure environment variables are available
              const adminUsername = process.env.ADMIN_USERNAME;
              const adminPassword = process.env.ADMIN_PASSWORD;
    
              if (!adminUsername || !adminPassword) {
                throw new Error('Missing environment variables for authentication');
              }
    
              if (
                credentials?.username === adminUsername &&
                credentials?.password === adminPassword
              ) {
                return {
                  id: '1',
                  name: 'Admin',
                  email: 'admin@example.com',
                  role: 'admin',
                };
              }
              
              return null;
            } catch (error) {
              console.error('Authentication error:', error);
              return null;
            }
          },
        }),
  ],
  
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        // session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };