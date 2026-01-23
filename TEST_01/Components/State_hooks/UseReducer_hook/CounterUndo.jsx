import { useReducer } from "react";

let initialstate = {count : 0, redo : []};
let reducer = (state,action) =>{
    if(action.type === "Inc") {
        return{
            count : state.count + 1,
            redo : [...state.redo , state.count]
        }
    }
    else if(action.type === "Dec") {
        return {
            count : state.count - 1,
            redo : [...state.redo , state.count]
        }
    }
    else if(action.type === "Reset") {
        return{
            count : 0,
            redo : [...state.redo , state.count]
        }
    }
    else{
        if(state.redo.length === 0) return state;
        let prev = state.redo[state.redo.length - 1];
        return {
            count : prev , 
            redo : state.redo.slice(0,-1)
        };
    }
};

let CounterUndo = () => {
    let [state , dispatch] = useReducer(reducer,initialstate);
    return(
        <>
            <button onClick={()=>dispatch({type : "Inc"})}>Increment</button>
            <button onClick={()=>dispatch({type : "Dec"})}>Decrement</button>
            <button onClick={()=>dispatch({type : "Reset"})}>Reset</button>
            <button onClick={()=>dispatch({type : "Undo"})}>Redo</button>
            <p>Count : {state.count}</p>
        </>
    )
}

export default CounterUndo;