import { Outlet } from "react-router-dom";

const Test = () =>{
    return(
        <div>
            <h1>Testing page</h1>
            <Outlet />
        </div>
    )
}

export default Test;