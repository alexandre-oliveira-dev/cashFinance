import React from "react";
import {Text} from "react-native";

interface TitleProps {
  text: String;
  style?: React.CSSProperties;
}

export default function Title({style, text}: TitleProps) {
  return <Text style={{...(style as any)}}>{text}</Text>;
}
