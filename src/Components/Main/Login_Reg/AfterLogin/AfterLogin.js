

import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AfterPatientLoginBlock from "./AfterPatientLogin/AfterPatientLoginBlock"

const AfterLogin = () =>{
    
    const isLogin=localStorage.getItem("PatientLog");
    
    if(isLogin==="true")
    {
        return <Outlet/>
    }
    else{
        return <Navigate to={"/"}/>
    }
}

export default AfterLogin