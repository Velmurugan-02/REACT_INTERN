let FinishedTask = ({Finished_task , Remove_task}) =>{
    return(
        <>
            <p>Finished Task</p>
            {Finished_task.length === 0 && (<p>No finished tasks for this date</p>)}
            {
                Finished_task.length > 0 && <div className="finished-container">
                    <ol>
                    {Finished_task.map((task)=>(
                        <div key={task.id}>
                                <li>
                                    {task.text}
                                    <button className="" onClick={()=>Remove_task(task.id)}>
                                        Remove
                                    </button>
                                </li>
                            </div>
                        ))}
                    </ol>
                </div>
            }
        </>
    );
}
export default FinishedTask; 