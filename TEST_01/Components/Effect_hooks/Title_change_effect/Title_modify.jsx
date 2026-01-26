import { useState , useEffect } from "react";
let Title_modify = () =>{
    let [count , setCount] = useState(0);
    let increment = () =>{setCount(count => count + 1)};
    useEffect(()=>{
        document.title = `count ${count}`;
        return console.log("Rendered");
    },[count]);
    return(
        <>
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
        </>
    )
}

export default Title_modify;