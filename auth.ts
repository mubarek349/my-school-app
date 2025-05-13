import { JWT } from "next-auth/jwt";
import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";
import { redirect } from "next/navigation";
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
    //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
    authorized({ auth, request: { url } }) {
      if (!auth) {
        if (url.includes("/teacher")) return false;
        else return true;
      }
      return true;
    },
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
        const user = await prisma.admin.findFirst({
          where: {
            phoneno: credentials.phoneno as string,
            passcode: credentials.passcode as string,
          },
          select: { id: true },
        });
        if (!user) {
          return redirect("/");
        }

        return user;

        // student
      },
    }),
  ],
});
