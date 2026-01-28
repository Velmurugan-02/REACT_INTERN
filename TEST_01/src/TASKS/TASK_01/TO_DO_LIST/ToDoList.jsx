//importing components
import { useState } from "react";
import AddTask from "./AddTask";
import FinishedTask from "./FinishedTask";
import TaskCount from "./TaskCount";
import "./style/style.css"

let ToDoList = () => {
    //creating a state for the input.s
    let [task , setTask] = useState('');
    //creating a state list of task. 
    let [listtask , setListtask] = useState([]);
    //creating the state for finished task.
    let [finishedtask,setFinishedtask] = useState([]);
    //Total Task
    let [totaltask,setTotaltask] = useState(0);
    //Updating the state for input.
    let value_bind = (e) =>{
        setTask(e.target.value);
    }
    //Updating the state when add button is clicked
    let add_task = () =>{
        if(task === "") return alert("Give a Task");
        setListtask(prev => [...prev,task]);
        setTotaltask(totaltask => totaltask + 1);
        setTask("");
    }
    //creating function for finished task for updating list of task and finished task.
    let finished_task = (task_completed) =>{
        setListtask(prev => prev.filter(task => task !== task_completed));
        setFinishedtask(prev_task => [...prev_task , task_completed]);
    }
    //Removing the finished task when remove button is clicked
    let remove_task = (task_completed)=>{
        setFinishedtask(prev => prev.filter(task => task !== task_completed));
    }
    // Total Task , Remaining task , Finished Task is counted.
    let count_rem_task = () =>{
        return listtask.length;
    }
    let count_finished_task = () =>{
        return totaltask - listtask.length;
    }
    return(
        <>
            <div className="main_div">
                <label>ToDo List</label><br></br>
                <input type="text" placeholder="Give a Task" value={task} onChange={value_bind}></input>
                <button onClick={add_task}>Add</button>
                {/* Adding the component for adding the task and showing the list of task added 
                with passing the list of task and finished_task function as props*/}
                <AddTask Rem_tasks={listtask} onfinish={finished_task}/>
                {/* Adding the component for removing and showing finished task 
                with passing the list of task and finished_task function as props*/}
                <FinishedTask Finished_task={finishedtask} Remove_task={remove_task}/>
                {/* DashBoard for counting the task */}
                <TaskCount totaltask={totaltask} count_rem_task={count_rem_task} count_finished_task={count_finished_task}/>
            </div>
        </>
    );
}

export default ToDoList;