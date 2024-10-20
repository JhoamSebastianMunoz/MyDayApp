import { useState } from 'react'
import { TaskInput } from './Components/taskInput/TaskInput'
import { BrowserRouter as useLocation } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'

import './App.css'

export function App() {
  const [tasks, setTasks] = useState([]);
  const filterTasks =(filter)=>{
    if(filter === 'pending'){
      return tasks.filter(task => !task.completed );
    }
    if(filter === 'completed'){
      return tasks.filter(task => task.completed );
    }
    return tasks;
  }
  const filter = location.pathname.replace('/','') || 'all';
  const filteredTasks = filterTasks(filter);

  return (
    <div className="app">
        <h1>My Day</h1>
        <TaskInput/>
            <>
            <Footer/>
            </>
    </div>
);
}