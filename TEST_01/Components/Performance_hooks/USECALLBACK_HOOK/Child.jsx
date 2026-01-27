import React,{ memo } from "react";

let Child = ({fun_value}) => {
    return(
        <>
            <button onClick={fun_value}>Child</button>
        </>
    );
}

export default memo(Child);