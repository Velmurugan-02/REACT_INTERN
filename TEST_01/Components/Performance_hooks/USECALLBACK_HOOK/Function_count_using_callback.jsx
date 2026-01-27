import { useState ,useCallback } from "react";
let funcSet = new Set();

let Function_count_using_callback = () =>{
    let [count_1,setCount_1] = useState(0);
    let [count_2,setCount_2] = useState(0);
    let inc_btn_1 = useCallback(()=>setCount_1(count_1 => count_1 + 1));
    let dec_btn_1 = useCallback(()=>setCount_1(count_1 => count_1 - 1));
    let inc_btn_2 = useCallback(()=>setCount_2(count_2 => count_2 + 1));
    funcSet.add(inc_btn_1);
    funcSet.add(dec_btn_1);
    funcSet.add(inc_btn_2);
    alert(funcSet.size);
    return(
        <>
            <div>
                <button onClick={inc_btn_1}>Increment_btn_1</button>
                <br></br>
                <button onClick={dec_btn_1}>Decrement_btn_1</button>
                <p>{count_1}</p>
                <button onClick={inc_btn_2}>Increment_btn_2</button>
                <p>{count_2}</p>
            </div>
        </>
    );
};

export default Function_count_using_callback;