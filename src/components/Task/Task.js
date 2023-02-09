import React from 'react'
import SubTask from '../SubTask/SubTask'
import {taskItems} from '../../App.js'
import './Task.css'

function Task() {
  const taskList = taskItems.map((task)=>
    <SubTask task_name={task.task_name} key={task.id} id ={task.id}></SubTask>
  )
  return (
    <div className = 'task'> 
    {taskList}
    </div>
  )
}

export default Task