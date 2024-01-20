import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Singin from '../pages/singin';
import Singup from '../pages/sinngup';
import Home from '../pages/home';


const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='Singin'
        component={Singin}
        options={{
          headerShown:false
        }}
        
      ></AuthStack.Screen>
      <AuthStack.Screen
        name='Singup'
        component={Singup}
        options={{
          headerShown:false
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown:false
        }}
      ></AuthStack.Screen>
   </AuthStack.Navigator>
  )
}

export default AuthRoutes;