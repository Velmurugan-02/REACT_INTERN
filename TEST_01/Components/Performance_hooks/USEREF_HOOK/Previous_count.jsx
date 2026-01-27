import { useState , useRef, useEffect } from "react";

let Previous_count = () => {
    let [count , setCount]  = useState(0);
    let ref = useRef(count);
    useEffect(()=>{
        ref.current = count;
    },[count])
    return(
        <>
            <p>Current count : {count}</p>
            <p>Previous count : {ref.current}</p>
            <button onClick={() => {setCount(count => count + 1)}}>Increment</button>
            <br></br>
        </>
    );
}

export default Previous_count;