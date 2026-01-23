import { useState } from "react";

let PasswordChecker = () => {
    let [message , setMessage] = useState("");
    let message_fun = (event) => {
        let user_value = event.target.value;
        if(user_value.length === 0) setMessage("");
        else if(user_value.length < 4) setMessage("WEAK");
        else if(user_value.length > 4 && user_value.length < 7) setMessage("MEDIUM");
        else if(user_value.length > 8) setMessage("STRONG");
    };
    return(
        <>
            <label>Password</label>
            <br></br>
            <input type="text" placeholder="**********" onChange={message_fun}></input>
            <p>{message}</p>
        </>
    );
}

export default PasswordChecker;