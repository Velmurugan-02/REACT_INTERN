import { useState } from "react";
import Child_Props from "./Child_Props";
let Parent_Props = () => {
    let [count,setCount] = useState(0);
    let increment = () => {
        setCount(prev => prev + 1);
    }
    return(
        <>
            <p>Parent Component</p>
            <p>{count}</p>
            <Child_Props onincrement={increment}></Child_Props>
        </>
    );
}

export default Parent_Props;