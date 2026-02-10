import { useEffect, useState } from "react";

let Time = () => {
    let [time, setTime] = useState(new Date());
    useEffect(() => {
        let interval_time = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval_time);
        }
    }, []);
    return (
        <>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
}

export default Time;