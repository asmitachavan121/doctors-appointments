import "./Main.css";
import { Route, Routes } from "react-router-dom";
import BoxRHS from "./Main/BoxRHS";

import DoctorLogin from "./Main/Login_Reg/DoctorLogin";
import DoctorReg from "./Main/Login_Reg/DoctorReg";
import PatientLogin from "./Main/Login_Reg/PatientLogin";
import PatientReg from "./Main/Login_Reg/PatientReg"
import AfterPatientLoginBlock from "./Main/Login_Reg/AfterLogin/AfterPatientLogin/AfterPatientLoginBlock";
import AfterLogin from "./Main/Login_Reg/AfterLogin/AfterLogin";
import Error from "./Error"



const Main = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<BoxRHS />} ></Route>
          <Route path='/admin' element={<AfterLogin />}>
            <Route path="patient" element={<AfterPatientLoginBlock/>}/>          
          </Route>
          <Route>
            <Route path='patientRegistration' element={<PatientReg />} />
            <Route path='doctorRegistration' element={<DoctorReg />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div >
    </>
  );

}




export default Main;
