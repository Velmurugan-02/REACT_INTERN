import { useContext } from "react";
import { nameContext } from "./UseContext";
let UseContext_Child1_dashboard = () => {
    let name_2 = useContext(nameContext)
    return(
        <>
            <h2>This is dashboard the name data is passed with use Context</h2>
            <h2>User name is {name_2}</h2>
        </>
    )
}

export default UseContext_Child1_dashboard;