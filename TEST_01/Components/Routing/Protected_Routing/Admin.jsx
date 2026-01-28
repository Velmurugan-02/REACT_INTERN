import {Navigate} from "react-router-dom";

let Admin = ({isAuth , children}) => {
    if(isAuth){
        return <Navigate to="/login" replace />
    } 
    return(
        <>
            <p>This is admin page</p>
        </>
    );
}

export default Admin;