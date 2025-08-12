import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
  redirectUrls: {
    signIn: "http://localhost:3000/dashboard",
    signUp: "http://localhost:3000/dashboard",
    signOut: "http://localhost:3000/",
  },
});
