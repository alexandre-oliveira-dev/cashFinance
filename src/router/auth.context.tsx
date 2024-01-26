import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect, useState} from "react";

interface AuthProps {
  hasLogin: Boolean;
  setHasLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ReturnType {
  uid: string;
  email: string;
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({children}: any) {
  const [data, setData] = useState<ReturnType | null>(null);
  useEffect(() => {
    const loadUser = async (): Promise<ReturnType | void> =>
      await AsyncStorage.getItem("@currentSession").then(value => {
        if (value) return setData(JSON.parse(value));
      });
    loadUser();
  }, []);

  const [hasLogin, setHasLogin] = useState(data?.uid !== null ? true : false);

  return (
    <AuthContext.Provider
      value={{
        hasLogin,
        setHasLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
