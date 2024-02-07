import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import React, {createContext, useEffect, useState} from "react";

interface AuthProps {
  hasLogin: Boolean;
  setHasLogin: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: ReturnType | null;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  entrada: number;
  setEntrada: React.Dispatch<React.SetStateAction<number>>;
  saida: number;
  setSaida: React.Dispatch<React.SetStateAction<number>>;
  saldo: number;
  setSaldo: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;

  //setData: React.Dispatch<React.SetStateAction<ReturnType>>;
}
interface ReturnType {
  uid: string;
  email: string;
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({children}: any) {
  const [hasLogin, setHasLogin] = useState(false);
  const [data, setData] = useState<ReturnType>({email: "", uid: ""});
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()).format("DD/MM/YYYY"));
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadUser = async (): Promise<ReturnType | void> =>
      await AsyncStorage.getItem("@currentSession").then(value => {
        if (value) {
          setData(JSON.parse(value));
          setHasLogin(true);
        }
      });
    loadUser();
  }, [data?.uid]);

  return (
    <AuthContext.Provider
      value={{
        hasLogin,
        setHasLogin,
        open,
        setOpen,
        data,
        date,
        setDate,
        entrada,
        saida,
        saldo,
        setEntrada,
        setSaida,
        setSaldo,
        filter,
        setFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
