import { useState } from "react";
import { FaTrashRestore, FaTrash } from "react-icons/fa";

let RecycleTask = ({ DeletedTask, Rem_tasks, DeleteTask }) => {
    return (
        <>
            <div className="recycle-dropdown">
                {DeletedTask.length === 0 ? (
                    <p className="empty-msg">No deleted tasks</p>) :
                    (
                        <ul className="recycle-list">
                            {DeletedTask.map(task => (
                                <li key={task.id} className="recycle-item">
                                    <span className="task-text">{task.text}</span>
                                    <div>
                                        <FaTrashRestore onClick={() => Rem_tasks(task.id)} />
                                        <div className="remove_icon" onClick={() => DeleteTask(task.id)}>
                                            <FaTrash />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </>
    );
}
export default RecycleTask;