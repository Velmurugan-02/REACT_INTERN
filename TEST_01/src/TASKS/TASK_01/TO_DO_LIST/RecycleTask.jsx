import { useState } from "react";
import { FaHistory, FaTimes } from "react-icons/fa";

let RecycleTask = ({ DeletedTask }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="recycle-bin-container">
                <button
                    className="recycle-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    title="View Deleted Tasks"
                >
                    Deleted Task
                    {DeletedTask.length > 0 && <span className="recycle-badge">{DeletedTask.length}</span>}
                </button>

                {isOpen && (
                    <div className="recycle-dropdown">
                        <div className="recycle-header">
                            <h4>Recycle Bin</h4>
                            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
                        </div>

                        {DeletedTask.length === 0 ? (
                            <p className="empty-msg">No deleted tasks</p>
                        ) : (
                            <ul className="recycle-list">
                                {DeletedTask.map(task => (
                                    <li key={task.id} className="recycle-item">
                                        <span className="task-text">{task.text}</span>
                                        <span className="task-date">{task.date}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
export default RecycleTask;