import { useState } from 'react'
import { TaskInput } from './Components/taskInput/TaskInput'

import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskInput/>
    </>
  )
}


