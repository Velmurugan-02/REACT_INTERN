import { useState } from "react";

let AddTask = ({Rem_tasks,onfinish}) =>{
    let [value_priority_choice,setValue_priority_choice] = useState("");
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    let sortedTasks = [...Rem_tasks].filter((task =>
        value_priority_choice === "All" ? true : task.task_level === value_priority_choice)).sort((a, b) => priorityOrder[a.task_level] - priorityOrder[b.task_level]); 
    let value_priority = (e) =>{
        setValue_priority_choice(e.target.value);
    }
    return(
        <>
            <div className="Rem_div">
                <p>Remaining Task</p>
                <select onChange={value_priority} value={value_priority_choice}>
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            {
                sortedTasks.length > 0 && <div className="rem_list">
                    <ol>
                        {sortedTasks.map((task)=>(
                            <div key={task.id} className="rem_div">
                                <li>
                                    {task.text}{/*Task is displayed*/}
                                    <span className={`priority ${task.task_level}`}>
                                      {task.task_level}
                                    </span>
                                    { task.date === new Date().toISOString().split("T")[0] && 
                                    <button className="rem_btn" onClick={()=>{onfinish(task.id)}}>{/*onfinish function is called*/}
                                        Finished
                                    </button>
                                    }
                                </li>
                            </div>
                        ))}
                    </ol>
                </div>
            }
        </>
    );
}

export default AddTask; 