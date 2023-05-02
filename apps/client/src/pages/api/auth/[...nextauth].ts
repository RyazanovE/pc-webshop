import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from 'src/shared/api/axios-instance';

export const authOptions: NextAuthOptions = {
  providers:  [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any
        try {
        const { data: { user } } = await api.post("/login", {email: username, password})
        return user ? user as any : null
        } catch (error) {
          console.log(error);
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/login"
  }
}
export default NextAuth(authOptions)