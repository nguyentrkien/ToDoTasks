import React, { useContext } from 'react'
import { addContext, taskContext } from '../../App.js'
import './SubTask.css';


function SubTask({task_name,id}) {
    var countTask = 0
    const {setAddconsole} = useContext(addContext);
    const {tasklists, dispatch} = useContext(taskContext);
    const handleClickOn = (e) =>{
        setAddconsole(e.target.parentElement.parentElement.id)
    }
    const taskShow = tasklists.map((task,i)=>{
        if (task_name==task.taskType){
            countTask ++
            return(
                <TaskDescription time={task.time} description={task.description} type={task.taskType} key={i}></TaskDescription>
            )
            }
        }
    )
    return (
        <>
        <div className = 'sub-task' id ={id}> 
            <div className='task-header'>
                <div className='task-title'> 
                    <p className='task-num'> {countTask} </p>
                    <div className='task-name'>{task_name}</div>
                </div>
                <p className='task-btn' onClick={handleClickOn}>
                    <i className='fas fa-plus'></i>
                        New task
                </p>
            </div>
            <div className='tasks-list' style={{ minHeight: '300px'}}>
                {taskShow}
            </div>
        </div>
        </>
  )
}

function TaskDescription({time,description,type}){
    const {tasklists,dispatch} = useContext(taskContext);
    const handleDelete = (e) => {
        if (window.confirm("Press a button!")) 
        dispatch({type: 'DELETE', payload: {time: `${time}`, description: `${description}`, taskType: `${type}`}})
    }
    const handleNext = (e) => {
        dispatch({type: 'NEXT', payload: {time: `${time}`, description: `${description}`, taskType: `${type}`}})
    }

    return(
    <div className='task-content'>
        <div className='task-time' style={{display: 'flex'}}>
            <i className='far fa-calendar-alt' style={{opacity: '0.5',marginRight: '4px'}}></i>
            <p>{time}</p>
            </div>
        <div className='task-detail'>
            <p>{description}</p>
            <i className="fas fa-arrow-circle-right" onClick={handleNext} style={{color: 'green'}}></i>
            <i className="far fa-trash-alt" onClick={handleDelete} style={{color: 'red'}}></i>
        </div>
    </div>
    )
}


export default SubTask