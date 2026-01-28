let AddTask = ({Rem_tasks,onfinish}) =>{
    return(
        <>
            <p>Remaining Task</p>
            <div className="rem_list">
                <ol>
                    {Rem_tasks.map((value,index)=>(
                        <div key={index} className="rem_div">
                            <li>
                                {value}{/*Task is displayed*/}
                                <button className="rem_btn" onClick={()=>{onfinish(value)}}>{/*onfinish function is called*/}
                                    Finished
                                </button>
                            </li>
                        </div>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default AddTask; 