//importing components
import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import FinishedTask from "./FinishedTask";
import TaskCount from "./TaskCount";
import Calendar from "./Calendar";
import Time from "./Time";
import { getCookie, setCookie } from "./cookieUtils";
import { FaSun, FaMoon } from "react-icons/fa";
import "./style/style.css";

let ToDoList = () => {
    //creating a state for the input.
    let [task, setTask] = useState('');

    //creating a state list of task and Storing in Cookie.
    let [listtask, setListtask] = useState(() => {
        let list_existing = getCookie('Remaining_tasklist');
        return list_existing ? JSON.parse(list_existing) : [];
    });

    //Useeffect for storing the list of task in Cookie.
    useEffect(() => {
        setCookie('Remaining_tasklist', JSON.stringify(listtask), 7);
    }, [listtask]);

    //creating the state for finished task and Storing in Cookie.
    let [finishedtask, setFinishedtask] = useState(() => {
        let finished_existing = getCookie('finished_tasklist');
        return finished_existing ? JSON.parse(finished_existing) : [];
    });

    //Useeffect for storing the finished task in Cookie.
    useEffect(() => {
        setCookie('finished_tasklist', JSON.stringify(finishedtask), 7);
    }, [finishedtask]);

    //Creating date state for calender
    let [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    //Creating a priority task with dropdown list.
    let [priority, setPriority] = useState("");
    let [value_input, setValue_input] = useState("");

    //State for expanding
    let [expandRemaining, setExpandRemaining] = useState(false);
    let [expandFinished, setExpandFinished] = useState(false);

    //Local Storage with for dark and light Theme
    let [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    //Useeffect for storing the theme in local storage.
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    //Updating the state for input.
    let value_bind = (e) => {
        setTask(e.target.value);
        setValue_input(e.target.value);
    }

    //Updating the Priority for the task 
    let value_priority = (e) => {
        setPriority(e.target.value);
    }

    //Updating the state when add button is clicked
    let add_task = () => {
        if (task.trim() === "") {
            alert("Give a Task");
            return;
        }

        const newTask = {
            id: Date.now(),
            text: task,
            task_level: priority,
            date: selectedDate,
        };

        setListtask(prev => [...prev, newTask]);
        setTask("");
        setExpandRemaining(true);
        setExpandFinished(false);
    };

    //creating function for finished task for updating list of task and finished task.
    let finished_task = (taskId) => {
        const taskToFinish = listtask.find(t => t.id === taskId);
        if (!taskToFinish) return;
        setListtask(prev => prev.filter(t => t.id !== taskId));
        setFinishedtask(prev => [...prev, taskToFinish]);
        setExpandFinished(true);
        setExpandRemaining(false);
    };

    //Removing the finished task when remove button is clicked
    let remove_task = (taskId) => {
        setFinishedtask(prev => prev.filter(task => task.id !== taskId));
    }

    //Removing Task from Remaining task List
    let remove_task_rem = (taskId) => {
        setListtask(prev => prev.filter(task => task.id !== taskId));
    }

    //Filtering the task based on task date selected
    const filteredTasks = listtask.filter(
        (task) => task.date === selectedDate
    );

    //Filtering the finished task based on date
    const filteredFinishedTasks = finishedtask.filter((task) => task.date === selectedDate);

    //Counting the task list
    const count_rem_task = listtask.length;
    const count_finished_task = finishedtask.length;

    // Total Task , Remaining task , Finished Task is counted.
    let totaltask = listtask.length + finishedtask.length;

    let [username, setUsername] = useState(() => {
        let username_local = localStorage.getItem("username");
        return username_local || "";
    });

    let value_bind_name = (e) => {
        setUsername(e.target.value);
    }
    useEffect(() => {
        localStorage.setItem("username", username);

    }, [username]);

    return (
        <>
            <div className="main_div">
                <div className="time_div">
                    <Time />
                    <div className="theme_icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </div>
                    <div className="username_div">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" value={username} onChange={value_bind_name}></input>
                    </div>
                </div>
                <div className="heading_main_div">
                    <div className="todo_heading">
                        <label className="heading_label">ToDo List</label>
                        {username && <p className="welcome_msg">Welcome, {username}! Here is your list of tasks.</p>}
                    </div>
                    <div className="main_container">
                        <div>
                            <div>
                                <TaskCount totaltask={totaltask} count_rem_task={count_rem_task} count_finished_task={count_finished_task} />
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
                            <div className={`remaining_task ${expandRemaining ? "expanded" : ""}`}>
                                {/* Adding the component for adding the task and showing the list of task added 
                                with passing the list of task and finished_task function as props*/}
                                <AddTask
                                    Rem_tasks={filteredTasks}
                                    onfinish={finished_task}
                                    Remove_task_rem={remove_task_rem}
                                />
                                {task.trim() && <div className="rem_div">
                                    <li>
                                        {value_input}{/*Task is displayed*/}
                                    </li>
                                </div>}
                            </div>
                            <div className={`finished_task_div ${expandFinished ? "expanded" : ""}`}>
                                {/* Adding the component for removing and showing finished task 
                                with passing the list of task and finished_task function as props*/}
                                <FinishedTask Finished_task={filteredFinishedTasks} Remove_task={remove_task} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ToDoList;