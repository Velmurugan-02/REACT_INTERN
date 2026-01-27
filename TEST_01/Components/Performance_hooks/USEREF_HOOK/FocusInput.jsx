import { useRef , useEffect } from "react";

let FocusInput = (props) =>{
    let input_ref = useRef(null);
    useEffect(()=>{
        input_ref.current.focus();
    },[]);
    return(
        <>
            <label>Name</label>
            <br></br>
            <input type="text" ref={input_ref}></input>
        </>
    );
}

export default FocusInput;