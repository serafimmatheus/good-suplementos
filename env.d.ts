declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    clientId: string;
    clientSecret: string;
  }
}
