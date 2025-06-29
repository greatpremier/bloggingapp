import { useState } from "react";

const Profile = () => {
    const tipps = document.getElementById('tipps');
    const hi = document.getElementById('hi');
    let tip = 'This the profile viewing and editing page';
    function tipOn(){
        if (hi.onmouseover){
            return tipps.innerHTML = tip
        }else{
            return tipps.innerHTML = ''
        }
    }
    function tipOff(e){
        return tipps.innerHTML = '';
    }
    tipOn();

    return(
        <div>
            <h1 id='hi'>Profile!</h1>
            <div id="tipps"></div>
        </div>
    )
}

export default Profile;