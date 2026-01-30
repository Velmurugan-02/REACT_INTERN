//importing components
import { useState } from "react";
import AddTask from "./AddTask";
import FinishedTask from "./FinishedTask";
import TaskCount from "./TaskCount";
import Calendar from "./Calendar";
import Time from "./Time";
import "./style/style.css";

let ToDoList = () => {
    //creating a state for the input.
    let [task , setTask] = useState('');
    //creating a state list of task. 
    let [listtask , setListtask] = useState([]);
    //creating the state for finished task.
    let [finishedtask,setFinishedtask] = useState([]);
    //Creating date state for calender
    let [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    //Creating a priority task with dropdown list.
    let [priority,setPriority] = useState("");
    let [value_input, setValue_input] = useState("");
    let [isTyping, setIsTyping] = useState(false);
    //Updating the state for input.
    let value_bind = (e) =>{
        setTask(e.target.value);
        setValue_input(e.target.value); 
        setIsTyping(e.target.value.trim() !== "");
    }
    //Updating the Priority for the task 
    let value_priority = (e) =>{
        setPriority(e.target.value);
    }
    //Updating the state when add button is clicked
    let add_task = () =>{
        if(task === "") return alert("Give a Task");
        //Creating new task with selected date as a Object
        const newTask = {
            id: Date.now(),
            text: task,
            task_level: priority,
            date: selectedDate,
        };
        setListtask(prev => [...prev,newTask]);
        setTask("");
        setIsTyping(false);
    }
    //creating function for finished task for updating list of task and finished task.
    let finished_task = (taskId) =>{
        const taskToFinish = listtask.find(t => t.id === taskId);
        if(!taskToFinish) return;
        setListtask(prev => prev.filter(t => t.id !== taskId));
        setFinishedtask(prev => [...prev, taskToFinish]);
    };
   
    //Removing the finished task when remove button is clicked
    let remove_task = (taskId)=>{
        setFinishedtask(prev => prev.filter(task => task.id !== taskId));
    }
    //Filtering the task based on task date selected
    const filteredTasks = listtask.filter(
        (task) => task.date === selectedDate
    );
    //Filtering the finished task based on date
    const filteredFinishedTasks = finishedtask.filter((task)=> task.date === selectedDate);

    // Total Task , Remaining task , Finished Task is counted.
    const totaltask = listtask.length + finishedtask.length;
    let count_rem_task = () =>{
        return listtask.length;
    }
    let count_finished_task = () =>{
        return totaltask - listtask.length;
    }
    return(
        <>
            <div>
                <Time />
            </div>
            <div>
                <label className="heading_label">ToDo List</label>
            </div>
            <div className="main_container">
                <div>
                    <div>
                        <TaskCount totaltask={totaltask} count_rem_task={count_rem_task} count_finished_task={count_finished_task}/>
                    </div>
                </div>
                <div className="task_list_view">
                    <div className="heading_div">
                        {/* Adding the Calendar component*/}
                        <Calendar
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                        <div className="input_div">
                            <input type="text" placeholder="Give a Task" value={task} onChange={value_bind}></input>
                                <select name="Priority" value={priority} onChange={value_priority} id="priority_id">
                                    <option value="All">All</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <button onClick={add_task}>Add</button>
                        </div>
                    </div>
                    <div className="remaining_task">
                        {/* Adding the component for adding the task and showing the list of task added 
                        with passing the list of task and finished_task function as props*/}
                            <AddTask
                            Rem_tasks={filteredTasks}
                            onfinish={finished_task}
                            />
                            {isTyping && <p>{value_input}</p>}
                        {/* </div>
                        ))} */}
                    </div>
                    <div className="finished_task_div">
                        {/* Adding the component for removing and showing finished task 
                        with passing the list of task and finished_task function as props*/}
                        <FinishedTask Finished_task={filteredFinishedTasks} Remove_task={remove_task}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ToDoList;