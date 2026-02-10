import { FaTrash } from "react-icons/fa";

let FinishedTask = ({ Finished_task, Remove_task }) => {
    return (
        <>
            <p>Finished Task</p>
            {Finished_task.length === 0 && (<p>No finished tasks for this date</p>)}
            {
                Finished_task.length > 0 && <div className="finished-container">
                    <ol>
                        {Finished_task.map((task) => (
                            <li key={task.id}>
                                {task.text}
                                <div className="task_actions">
                                    <div className="remove_icon" onClick={() => Remove_task(task.id)}>
                                        <FaTrash />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            }
        </>
    );
}
export default FinishedTask; 