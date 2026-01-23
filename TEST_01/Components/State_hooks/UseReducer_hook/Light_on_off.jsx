import { useReducer } from "react";

let initialstate = {
    isOn : false
};
let reducer = (state , action) =>{
    if(action.type === "is_on"){
        return {isOn : true};
    }
    else if(action.type === "is_off"){
        return {isOn : false};
    }
    else {
        return {isOn : !state.isOn};
    }
};

let Light_on_off = () => {
    let [state,dispatch] = useReducer(reducer,initialstate);    
    return(
        <>
            <button onClick={()=>dispatch({type : "is_on"})}>ON</button>
            <button onClick={()=>dispatch({type : "is_off"})}>OFF</button>
            <button onClick={()=>dispatch({type : "toggle"})}>TOGGLE</button>
            <p>Light is turned {state.isOn ? "ON" : "OFF"}</p>
        </>
    );
}

export default Light_on_off;