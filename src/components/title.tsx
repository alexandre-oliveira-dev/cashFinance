import { Text } from "react-native";


export default function Title(size:number,text: string,level:"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" ) {
    return (
        <Text style={{fontWeight:level,fontSize:size}}>{text}</Text>
    )
}