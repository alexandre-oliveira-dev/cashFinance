import React, {useContext} from "react";
import {AuthRoutes, AllRoutes} from "./auth.routes";
import {AuthContext} from "./auth.context";
import {View} from "react-native";
import NavBar from "../components/navbar";

function Routes() {
  const {hasLogin} = useContext(AuthContext);
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
