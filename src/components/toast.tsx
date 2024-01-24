import Toast, {ToastProps} from "react-native-toast-message";

export default function ToastComponent(
  {type}: ToastProps,
  {title}: {title: string}
) {
  return Toast.show({
    position: "top",
    type,
    visibilityTime: 2000,
    text1: title,
  });
}
