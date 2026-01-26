import { createContext } from "react";
import UseContext_Child1_home from "./UseContext_Child1_home";

//Creating name Context Object
export const nameContext = createContext();

let UseContext = () =>{
    const Name = "Velmurugan"; 
    return(
        <>
        <nameContext.Provider value={Name}> 
            <UseContext_Child1_home />
        </nameContext.Provider>   
        </>
    )
}

export default UseContext;