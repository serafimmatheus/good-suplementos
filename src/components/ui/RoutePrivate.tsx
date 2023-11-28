"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const RoutePrivate = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session) {
      return router.push("/"); // Redireciona para a página inicial se não houver uma sessão autenticada
    }
  }, [status, session, router]);

  return (
    <>
      {status === "unauthenticated" && null}
      {status === "authenticated" && children}
    </>
  );
};

export { RoutePrivate };
