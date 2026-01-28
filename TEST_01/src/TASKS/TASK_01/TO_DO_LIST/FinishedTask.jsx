let FinishedTask = ({Finished_task , Remove_task}) =>{
    return(
        <>
            <p>Finished Task</p>
            <div className="finished-container">
                <ol>
                {Finished_task.map((value,index)=>(
                    <div key={index}>
                            <li>
                                {value}
                                <button className="" onClick={()=>Remove_task(value)}>
                                    Remove
                                </button>
                            </li>
                    </div>
                ))}
                </ol>
            </div>
        </>
    );
}
export default FinishedTask; 