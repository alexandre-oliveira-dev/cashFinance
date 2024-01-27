import React, {useContext} from "react";
import {AuthRoutes, AllRoutes} from "./auth.routes";
import Home from "../pages/home";
import {AuthContext} from "./auth.context";
import {View} from "react-native";
import NavBar from "../components/navbar";

function Routes() {
  const {hasLogin} = useContext(AuthContext);
  console.log("🚀 ~ Routes ~ hasLogin:", hasLogin)
  return hasLogin ? (
    <View style={{flex: 1}}>
      <AllRoutes></AllRoutes>
      <NavBar></NavBar>
    </View>
  ) : (
    <AuthRoutes></AuthRoutes>
  );
}
export default Routes;
