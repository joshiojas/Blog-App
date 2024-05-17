import { getUser } from "@/lib/actions";
import NextAuth, { User } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { UNDERSCORE_NOT_FOUND_ROUTE } from "next/dist/shared/lib/constants";

const BASE_PATH = "/api/auth";

const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        Email: { label: "email", type: "text", placeholder: "abc@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<User | null> {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials.Email;
        const password = credentials.password;
        const user = await getUser(email, password);
        if (user) {
          user.id = user.id ? user.id.toString() : undefined;
        }
        return user;

        // Any object returned will be saved in `user` property of the JWT
        // If you return null then an error will be displayed advising the user to check their details.

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
