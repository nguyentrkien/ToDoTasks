import './index.css';
import { useState, useReducer} from 'react';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import React from 'react';


const App = () => {
    const [addconsole,setAddconsole] = useState(false);
    const [tasklists,dispatch] = useReducer(taskAction,[]);
    return(
        <taskContext.Provider value={{tasklists, dispatch}}>
            <addContext.Provider value={{addconsole, setAddconsole}}>
                <div className='body'>
                    <header className='header'> TO DO LIST</header>
                    <Task></Task>
                    { addconsole ? <AddTask choose={addconsole}></AddTask>:<></>}
                </div>
            </addContext.Provider>
        </taskContext.Provider>
    )
}
function taskAction(state, action){
    switch (action.type) {
        case "ADD":{
            state.push(action.payload)
            return state
        }
        case "DELETE":{
            var newstate = state.filter(item => (item.time != action.payload.time)||(item.description != action.payload.description)||(item.taskType != action.payload.taskType))
            return newstate
        }
        case "NEXT":{
            var newstate = state.filter(item => (item.time != action.payload.time)||(item.description != action.payload.description)||(item.taskType != action.payload.taskType))
            if (action.payload.taskType=='TO DO')
                newstate.push({time: `${action.payload.time}`, description: `${action.payload.description}`, taskType: 'IN PROCESSING'})
            else if (action.payload.taskType=='IN PROCESSING')
                newstate.push({time: `${action.payload.time}`, description: `${action.payload.description}`, taskType: 'DONE'})
            return newstate
        }
        default:
            return state
    }
}
export const addContext = React.createContext({});
export const taskContext = React.createContext({});
export const taskItems = [{id: 1, task_name: 'TO DO'},{id: 2, task_name: 'IN PROCESSING'},{id: 3, task_name: 'DONE'}]
export default App