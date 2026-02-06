import { useEffect, useState } from "react";
let OnlineStatus = () =>{
    let [user_online,setUser_online] = useState(Navigator.onLine);
    useEffect(()=>{
        let goonline = () => setUser_online(true); 
        let gooffline = () => setUser_online(false);
        
        window.addEventListener("Online",goonline);
        window.addEventListener("Offline",gooffline);

        return()=>{
            window.removeEventListener("online",goonline);
            window.removeEventListener("offline",gooffline);
        }
    },[]);
    return user_online;
}

export default OnlineStatus;