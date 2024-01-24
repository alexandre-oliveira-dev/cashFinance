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
  console.log("🚀 ~ AuthProvider ~ data:", data);

  const [hasLogin, setHasLogin] = useState(data?.uid !== null ? true : false);
  console.log("🚀 ~ AuthProvider ~ hasLogin:", hasLogin);

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
