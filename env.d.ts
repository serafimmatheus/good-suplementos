declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    clientId: string;
    clientSecret: string;
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET_KEY: string;
    NEXTAUTH_SECRET: string;
    HOST_URL: string;
  }
}
