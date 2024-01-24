import AsyncStorage from "@react-native-async-storage/async-storage"
import React,{createContext, useEffect, useState} from "react"

interface AuthProps{
    hasLogin: Boolean,
    setHasLogin:React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext({} as AuthProps)

export function AuthProvider({ children }: any) {
    const [data, setData] = useState<{} | null>(null)
    async () => await AsyncStorage.getItem('@currentSession').then((value) => {
        if(value)
        return setData(value)
    })
    
    const [hasLogin, setHasLogin] = useState(data ? true : false)
   
    return (
        <AuthContext.Provider value={{
            hasLogin,
            setHasLogin
        }}>{ children}</AuthContext.Provider>
    )
}