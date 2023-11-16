import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // CredentialsProvider({}),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user?.id) {
        token.id = user.id
    }
    if (user?.email) {
        token.email = user.email;
    }
    return token
 },
 async session({session, token}) {
     if (session.user) session.user.email = token.email;
     return session;
 }
  }
};
