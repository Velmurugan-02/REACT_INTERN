import { useRef } from "react";

let UseRefExample = () =>{
    const ref = useRef(0);
    let click_ref_count = () =>{
        ref.current += 1;
        console.log(ref.current); //UseRef will not rerender the value . It Works on direct DOM .
    }
    return(
        <>
            <button onClick={click_ref_count}>Click</button>
        </>
    );
}



export default UseRefExample;