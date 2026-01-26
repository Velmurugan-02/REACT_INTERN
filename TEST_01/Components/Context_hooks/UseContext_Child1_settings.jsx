import { useContext } from "react";
import UseContext from "./UseContext";
import { nameContext } from "./UseContext";

let UseContext_Child1_settings = () => {
    let name_settings = useContext(nameContext);
    name_settings = "Aakash";
    return(
        <>
            <h3>This is Settings</h3>
            <h3>Your name is {name_settings}</h3>
        </>
    )
}

export default UseContext_Child1_settings;