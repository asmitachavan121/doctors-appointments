import React, { useState } from 'react';
import DoctorLogin from './Login_Reg/DoctorLogin';
import PatientLogin from './Login_Reg/PatientLogin';
import Pic from "./LoginImg/Login.jpg";

function LoginComp() {
  const [logbutton ,setLogButton] = useState("Doctor Login Here")
  const [logcomp , setLogComp ] = useState(<PatientLogin/>);


  function onDocPat (){
    if (logbutton==="Doctor Login Here")
    {
      setLogButton("Patient Login Here");
      setLogComp(<DoctorLogin/>);
    }
    if(logbutton==="Patient Login Here")
    {
      setLogButton("Doctor Login Here");
      setLogComp(<PatientLogin/>)
    }
  }
  
  return (
    <div className="BoxRHSBody">
      <div>
        <img
          src={Pic}
          alt="LoginImage"
          width="300px"
          height="300px"
          id="Login"
        />
      </div>
      <div id="BoxRHSLine"></div>
      <div className="LoginDiv">
       <button className="btn btn-primary LoginRegButton" onClick={onDocPat} >{logbutton}</button>
       <div>{logcomp}</div>        
      </div>
    </div>
  );
}

export default LoginComp;