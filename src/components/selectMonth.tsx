import {Calendar} from "react-native-calendars";

export default function SelectMonth({
  date,
  show,
}: {
  date?: string;
  show: boolean;
}) {
  return (
    <Calendar
      monthFormat="MMMM"
      style={{width: "100%", display: !show ? "none" : "flex"}}
      date={date}
    ></Calendar>
  );
}
