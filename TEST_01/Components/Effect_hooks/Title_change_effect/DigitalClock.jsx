import { useState , useEffect } from "react";

let DigitalClock = () => {
    let [time,setTime] = useState(new Date());
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date());
        },1000)
        return () =>{
            clearInterval(timer);
            console.log("Timer Cleared");
        }
    },[]);
    return(
        <>
            <p>{time.toLocaleTimeString()}</p>
        </>
    )
}

export default DigitalClock; 