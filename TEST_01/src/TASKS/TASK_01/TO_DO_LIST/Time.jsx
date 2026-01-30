import { useEffect,useState } from "react";

let Time = () => {
    let [time,setTime] = useState(new Date());   
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);
    },);
    return(
        <>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
}

export default Time;