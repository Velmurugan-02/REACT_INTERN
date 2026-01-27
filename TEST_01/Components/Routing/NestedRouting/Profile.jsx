import { NavLink , Outlet } from "react-router-dom";
import Settings from "./Settings";
import Information from "./Information";

let Profile = () => {
    return(
        <>
            <div>
                <p>Profile</p>
            </div>
            <nav>
                <NavLink to="settings">Settings</NavLink>
                <NavLink to="information">Information</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default Profile;