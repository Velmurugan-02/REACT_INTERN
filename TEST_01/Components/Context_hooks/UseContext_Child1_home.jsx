import { useContext } from "react";
import { nameContext } from "./UseContext";
import UseContext_Child1_dashboard from "./UseContext_Child1_dashboard";
import UseContext_Child1_settings from "./UseContext_Child1_settings";

let UseContext_Child1_home = () =>{
    let name = useContext(nameContext);
    return(
        <>
            <h1>My name is {name}</h1>
            <UseContext_Child1_dashboard></UseContext_Child1_dashboard>
            <UseContext_Child1_settings></UseContext_Child1_settings>
        </>
    )
}

export default UseContext_Child1_home;