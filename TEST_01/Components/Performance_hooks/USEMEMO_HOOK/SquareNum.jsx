import { useState , useMemo } from "react";

let SquareNum = () =>{
    let [count,setCount] = useState(0);
    let [square_num,setSquare_num] = useState(0);
    let square_num_memo_result = useMemo(()=>{return squareOfNum(square_num)},[square_num])
    let onchangehandler = (event) =>{
        setSquare_num(event.target.value);
    };
    return(
        <>
            <div>
                <label>Number </label>
                <input type="number" placeholder="Enter a number" onChange={onchangehandler}></input>
                <p>{square_num_memo_result}</p>
            </div>
            <button onClick={()=>{setCount(count => count + 1)}}>Increment</button>
            <p>{count}</p>
        </>
    );
}

let squareOfNum = (square_num) =>{
    console.log("Calculation is done and rendered is Happen for the element");
    return Math.pow(square_num,2);
};

export default SquareNum;
