import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import ToDo from './components/ToDo.jsx'
import { useDrop } from 'react-dnd'

function App() {

  const [taskList, setTaskList] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    let array = localStorage.getItem("tempList");
    if (array) {
      setTaskList(JSON.parse(array));
    }

  }, [])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addtoCompleted(item.id, item.projectName, item.taskName, item.taskDescription, item.timeStamp, item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addtoCompleted = (id, projectName, taskName, taskDescription, timeStamp, duration) => {
    // Find the task to be moved
    const moveTask = taskList.find((task) => id === task.id);
  
    // Add the task to the completed list
    setCompleted((prevCompleted) => [
      ...prevCompleted, 
      { ...moveTask, projectName, taskName, taskDescription, timeStamp, duration }
    ]);
  
    // Remove the task from the ToDo list
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
  
    // Optionally update localStorage if needed
    localStorage.setItem("tempList", JSON.stringify(taskList.filter((task) => task.id !== id)));
  };

  return (
    <>
      <center><h1 className='text-3xl font-bold underline py-4 pl-6'>Task Tracker</h1></center>
      <div className='flex flex-row items-center'>
        <p className='text-2xl pl-6 pr-6'> Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className='text-2xl pl-6 pr-6'>to add a task</p>
      </div>
      <div className='flex flex-row'>
        <div className='w-full'>
          <h2 className='ml-6 text-3xl max-w-lg py-2 px-4 my-4 font-semibold'>ToDo:</h2>
        <div className='flex flex-col-reverse'>
            {taskList.slice(0).map((task, index) => (
            <>
              <ToDo key={new Date().getTime()} task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
            </>
          ))}
          </div>
        </div>
        <div className='w-full flex flex-col' ref={drop}>
          <h2 className='text-3xl max-w-lg py-2 px-4 my-4 font-semibold'>Completed:</h2>
          {completed.map((task, index) => (
            <>
              <ToDo key={new Date().getTime()} task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
