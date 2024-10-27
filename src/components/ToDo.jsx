/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EditTask from "./EditTask";
import { useDrag } from 'react-dnd'

const ToDo = ({ task, taskList, setTaskList, index }) => {
    const [time, setTime] = useState(task.duration);
    const [running, setRunning] = useState(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "todo",
        item: {
            id: index,
            projectName: task.projectName,
            taskName: task.taskName,
            taskDescription: task.taskDescription,
            timeStamp: task.timeStamp,
            duration: task.duration
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10);
        }
        else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running])

    const handleStop = () => {
        setRunning(false);
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1, {
            projectName: task.projectName,
            taskName: task.taskName,
            taskDescription: task.taskDescription,
            timeStamp: task.timeStamp,
            duration: time
        })
        localStorage.setItem("tempList", JSON.stringify(taskList));

    }

    const handleDelete = () => {
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);

        localStorage.setItem("tempList", JSON.stringify(taskList));
        window.location.reload();
    }
    return (
        <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg shadow-xl" ref={drag}>
            <div className="flex flex-row w-full justify-between">
                <p className="font-semibold text-2xl">{task.projectName}</p>
                <EditTask index={index} taskList={taskList} setTaskList={setTaskList} task={task} />
            </div>
            <p className="text-xl py-2 mt-2">{task.taskName}</p>
            <p className="text-lg py-1">{task.taskDescription}</p>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-evenly">
                <div className="sm:w-1/4 text-xl font-semibold py-2">
                    <span> {("0" + Math.floor((time / 3600000) % 24)).slice(-2)} :</span>
                    <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
                    <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
                    <span className="text-sm"> {("0" + (time / 10) % 100).slice(-2)} </span>
                </div>
                <div className="flex flex-row justify-evenly gap-4">
                    {running ? (
                        <button onClick={handleStop} className="border rounded-lg py-1 px-3">
                            Stop
                        </button>
                    )
                        : (
                            <button onClick={() => setRunning(true)} className="border rounded-lg py-1 px-3">
                                start
                            </button>
                        )
                    }
                    <button onClick={() => setTime(0)} className="border rounded-lg py-1 px-3">Reset</button>
                </div>
            </div>
            <div className="flex w-full justify-center mt-3">
                <button onClick={handleDelete} className="bg-red-600 text-sm uppercase font-semibold text-white py-1.5 px-3 rounded-lg hover:shadow-md hover:bg-red-500 transition-colors">Delete</button>
            </div>
        </div>
    )
};

export default ToDo;
