import { useState } from "react";

function Login_UI(){
    let [name , setName] = useState("");
    let [pass , setPass] = useState("");
    let [message , setMessage] = useState("");
    let name_fun = (event) => {
        setName(event.target.value);
    };
    let pass_fun = (event) => {
        setPass(event.target.value);
    };
    let message_fun = () =>{
        if(name !== "" && pass.length < 6){
            setMessage("Invalid credentials");
        }
        else setMessage("Login successfully");
    }
    return(
    <>
        <label>Name</label>
        <br></br>
        <input type = "text" placeholder = "Yourname" onChange={name_fun}></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type = "text" placeholder = "******" onChange={pass_fun}></input>
        <button onClick={message_fun}>Check</button>
        <p>Name : {name}</p>
        <p>Password : {pass}</p>
        <p>Message : {message}</p>
    </>
    )
}

export default Login_UI;