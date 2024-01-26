import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Singin from "../pages/singin";
import Singup from "../pages/sinngup";
import Home from "../pages/home";
import Realeases from "../pages/realeases";

const AuthStack = createNativeStackNavigator();

function AllRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Realeases"
        component={Realeases}
        options={{
          headerShown: false,
        }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Singin"
        component={Singin}
        options={{
          headerShown: false,
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Singup"
        component={Singup}
        options={{
          headerShown: false,
        }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

export {AllRoutes, AuthRoutes};
