import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

export const handler = NextAuth(authOptions);
