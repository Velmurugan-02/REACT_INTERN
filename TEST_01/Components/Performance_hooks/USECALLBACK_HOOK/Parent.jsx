import { useState , useCallback } from "react";
import Child from "./Child";

let Parent = () =>{
    let [count , setCount] = useState(0); 
    let inc_callback =  useCallback(()=>{
        setCount(count => count + 1);
        console.log("Child Button");
    },[]);
    return(
        <>
            <div>
                <p>{count}</p>
                <Child fun_value={inc_callback}/>
                <button onClick={()=>setCount(count => count + 1)}>Parent Button</button>
            </div>
        </>
    );
}

export default Parent;