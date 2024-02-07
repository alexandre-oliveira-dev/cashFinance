import {useContext} from "react";
import {View} from "react-native";
import {Calendar} from "react-native-calendars";
import {AuthContext} from "../router/auth.context";
import dayjs from "dayjs";

export default function SelectMonth() {
  const {open, setOpen, setDate, date} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        display: !open ? "none" : "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 100,
        width: "100%",
        height: "100%",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <View
        onPointerDown={() => setOpen(false)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      ></View>
      <View style={{width: "100%"}}>
        <Calendar
          style={{width: "100%"}}
          monthFormat="MMMM"
          date={date}
          onDayPress={e => {
            setDate(dayjs(e.dateString).format("DD/MM/YYYY"));
            setOpen(false);
          }}
        ></Calendar>
      </View>
    </View>
  );
}
