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
        <div key={index} className='flex flex-row items-center'>
          <p className='p-5 text-2xl pl-6 pr-6 border border-cyan-500'>{task.projectName}</p>
          <p className='p-5 text-2xl pl-6 pr-6 border border-cyan-500'>{task.taskName}</p>
          <p className='p-5 text-2xl pl-6 pr-6 border border-cyan-500'>{task.taskDescription}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default App
