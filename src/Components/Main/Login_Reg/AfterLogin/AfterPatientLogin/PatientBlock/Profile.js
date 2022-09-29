import { useState } from "react";

const Profile = () =>{

    const []=useState();

    function onClickMe(){

        fetch("http://localhost:9000/patientdetail/1",{
            method:'GET'
        }).then(res => res.json()).then(data => console.log(data));

    }


    return(
        <div>
            <button onClick={onClickMe}>ON CLICK</button>
        </div>
    );

}

export default Profile;