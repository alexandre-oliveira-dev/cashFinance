import {useState} from "react";
import {View} from "react-native";
import {Calendar} from "react-native-calendars";

export default function SelectMonth({
  date,
  show,
}: {
  date?: string;
  show: boolean;
}) {
  const [open, setOpen] = useState(show);
  return (
    <View
      style={{
        flex: 2,
        position: "absolute",
        width: "100%",
        display: !open ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        height: "100%",
      }}
      onPointerDown={() => setOpen(false)}
    >
      <Calendar monthFormat="MMMM" date={date}></Calendar>
    </View>
  );
}
