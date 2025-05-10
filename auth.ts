import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized({ auth, request: { url } }) {
      if (!auth) {
        if (url.includes("/teacher")) return false;
        else return true;
      }
      return true;
    },
  },
  pages: {
    // error:''
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        phoneno: { name: "phoneno", type: "text", placeholder: "Phone Number" },
        passcode: {
          name: "passcode",
          type: "password",
          placeholder: "Passcode",
        },
      },

      authorize: async (credentials) => {
        return { id: "" };
        const user = await prisma.teacher.findFirst({
          where: {
            phoneno: credentials.phoneno as string,
            passcode: credentials.passcode as string,
          },
          select: { id: true },
        });
        if (user) return user;

        // student

        throw new Error("Invalid credentials.");
      },
    }),
  ],
});
