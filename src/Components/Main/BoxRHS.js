import "./BoxRHS.css";
import { Navigate } from "react-router-dom";

import LoginComp from "./LoginComp";



const BoxRHS = () => {
  const isLogin=localStorage.getItem("PatientLog");
  if(isLogin==="true")
  {
    return <Navigate to={"admin/patient"}/>
  }
  else{
    return <LoginComp/>    
  }


};



export default BoxRHS;

// <form>
// <div className="mb-3 row">
//     <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//     <input type="Email" className="form-control" id="inputEmail" />
//     </div>
// </div>
// <div className="mb-3 row">
//     <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//     <input type="password" className="form-control" id="inputPassword"/>
//     </div>
// </div>
// <div>
//     <button type="Submit" className="btn btn-primary">SUBMIT</button>
// </div>
// </form>
