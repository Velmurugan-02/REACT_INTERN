let TaskCount = ({totaltask,count_rem_task,count_finished_task}) =>{
    return(
        <>
            <div className="task_count_div">
                <p>Total tasks : {totaltask}</p>
                <p>Total Remaining Task : {count_rem_task()}</p>
                <p>Total Finished tasks :{count_finished_task()}</p>
            </div>
        </>
    );
} 

export default TaskCount;