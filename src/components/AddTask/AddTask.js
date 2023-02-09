import React, { useContext,useEffect } from 'react'
import { addContext, taskItems, taskContext } from '../../App.js'
import './AddTask.css';

function AddTask({choose}) {
  const {dispatch} = useContext(taskContext);
  const {setAddconsole} = useContext(addContext);
  const selectList = taskItems.map((task)=>
    <Span task_name={task.task_name} key={task.id} id ={task.id} choose={choose}></Span>
  )
  const handleClickCancel = () =>{
    setAddconsole(false)
  }

  const handleClickSave = (e) =>{
    var set = new Date()
    var taskCheck
    var types = document.querySelectorAll("span > input");
    types.forEach((type)=>{
      if (type.checked)
        taskCheck = type.value
    })
    setAddconsole(false)
    dispatch({type: 'ADD', payload: {time: `${set.toLocaleDateString()}, `+`${set.toLocaleTimeString()}`, description: `${e.target.parentElement.previousElementSibling.value}`, taskType: `${taskCheck}`}})
  }
  return (
    <div className='add-task'>
        <div className='add-background' onClick={handleClickCancel}></div>
        <div className='add-box'>
          <div className='title'>CREATE NEW TASK</div>
          <div className='line'></div>
          <div className='content'>
            {selectList}
          </div>
          <input className='task-description' placeholder='Enter your task...'></input>
          <div className='add-submit'>
            <div className='btn' style={{color: '#fff',backgroundColor: '#5680f9'}} onClick={handleClickSave}>Save</div>
            <div className='btn' style={{border: '1px solid #ccc'}} onClick={handleClickCancel}>Cancel</div>
          </div>
        </div>
    </div>
  )
}

function Span({task_name, id, choose}) {
  const handleClick = (e) => {
    const checked = (e.target.parentElement.id)
    var unselect = document.querySelectorAll('span > input');
    unselect.forEach((element, index) => {
      if((index+1) != checked){

        element.checked = false;
      }
      else
        element.checked = true;
    });
  }
  useEffect(()=>{
    var select = document.getElementsByClassName('select-task')
    select[choose-1].firstChild.checked = true;
  },[])

  return(
    <span className='select-task' id={id} >
      <input type='radio' onClick={handleClick} value={task_name}></input>
      {task_name}
    </span>
  )
}

export default AddTask