import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import ToDo from './components/ToDo.jsx'

function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <>
      <center><h1 className='text-3xl font-bold underline py-4 pl-6'>Task Tracker</h1></center>
      <div className='flex flex-row items-center'>
        <p className='text-2xl pl-6 pr-6'> Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className='text-2xl pl-6 pr-6'>to add a task</p>
      </div>

      <div>
        <h2 className='ml-6 text-3xl bg-gray-400 w-3/4 max-w-lg py-2 px-4 my-4 font-semibold'>ToDo:</h2>
        {taskList.slice(0).reverse().map((task, index) => (
          <>
            <ToDo key={new Date().getTime()} task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
          </>
        ))}
      </div>
    </>
  )
}

export default App
