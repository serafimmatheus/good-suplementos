import { api } from "@/lib/axios";
import { ReactNode, createContext, useState } from "react";

interface UserAdmLoginContextData {}

interface DataTokenProps {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const ContextUserAdmLogin = createContext<UserAdmLoginContextData>(
  {} as UserAdmLoginContextData
);

export const UserAdmLoginProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DataTokenProps>({} as DataTokenProps);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@token", token);
      localStorage.setItem("@user", JSON.stringify(user));

      setData({ token, user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContextUserAdmLogin.Provider value={{}}>
      {children}
    </ContextUserAdmLogin.Provider>
  );
};
