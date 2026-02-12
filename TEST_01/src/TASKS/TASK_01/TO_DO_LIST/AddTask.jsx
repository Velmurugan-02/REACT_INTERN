import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
let AddTask = ({ Rem_tasks, onfinish, Remove_task_rem }) => {
    let [value_priority_choice, setValue_priority_choice] = useState("All");
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    let sortedTasks = [...Rem_tasks].filter((task =>
        value_priority_choice === "All" ? true : task.task_level === value_priority_choice))
        .sort((a, b) => {
            const p = priorityOrder[a.task_level] - priorityOrder[b.task_level];
            if(p !== 0) return p;
            return (b.task_count ?? 0) - (a.task_count ?? 0);
        });
    let value_priority = (e) => {
        setValue_priority_choice(e.target.value);
    }
    return (
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
                        {sortedTasks.map((task) => (
                            <li key={task.id} className="rem_div">
                                {task.text}{/*Task is displayed*/}
                                <span className={`priority ${task.task_level}`}>
                                    {task.task_level}
                                </span>
                                {
                                    task.date === new Date().toISOString().split("T")[0] &&
                                    <div className="task_actions">
                                        <div className="check_icon" onClick={() => { onfinish(task.id) }}>
                                            <FaCheck />
                                        </div>
                                        <div className="remove_icon" onClick={() => Remove_task_rem(task.id)}>
                                            <FaTrash />
                                        </div>
                                    </div>
                                }
                            </li>
                        ))}
                    </ol>
                </div>
            }
        </>
    );
}

export default AddTask; 