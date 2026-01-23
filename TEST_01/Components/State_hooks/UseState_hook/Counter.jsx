import { useState } from "react";

let Counter = () => {
    let [count,setCount] = useState(0);
    let btn_fun = (action) => {
        if(action === "Inc") setCount(count => count + 1);
        else if(action === "Dec") setCount(count => count - 1);
        else if(action === "Re") setCount(count => 0);
     };
    return(
    <>
        <button onClick={()=>btn_fun("Inc")}>Increment</button>
        <button onClick={()=>btn_fun("Dec")}>Decrement</button>
        <button onClick={()=>btn_fun("Re")}>Reset</button>
        <p>{count}</p>
    </>
    );
};

export default Counter;