import { connectDB } from "@/app/helper/connectdb";
import User from "@/app/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NO_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email $",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        await connectDB();
        const user = await User.findOne({ email });
        const passowordOk = user && bcrypt.compareSync(password, user.password);
        if (passowordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
