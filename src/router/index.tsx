import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import Home from "../pages/home";
import { AuthContext } from "./auth.context";

function Routes() {
    const {hasLogin} = useContext(AuthContext)    
    return (
      hasLogin?
        <Home></Home>
        :
        <AuthRoutes></AuthRoutes>
    )
}
export default Routes;