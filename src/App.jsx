import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'

function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <>
      <h1 className='text-3xl font-bold underline py-4 pl-6'>Task Tracker</h1>
      <div className='flex flex-row items-center'>
        <p className='text-2xl pl-6 pr-6'> Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className='text-2xl pl-6 pr-6'>to add a task</p>
      </div>
      <div className='flex flex-col '>
      <div className='flex flex-row items-center'>
        <h2 className='p-4 m-3 font-bold text-lg'>Name</h2>
        <h2 className='p-4 m-3 font-bold text-lg'>task</h2>
        <h2 className='p-4 m-3 font-bold text-lg'>description</h2>
      </div>
      {taskList.map((task, index) => (
        <>
        <p  key={index}>{task.projectName}</p>
        <p key={index}>{task.taskDescription}</p>
        <p key={index}>{task.taskName}</p>
        </>
      ))}
      </div>
    </>
  )
}

export default App
