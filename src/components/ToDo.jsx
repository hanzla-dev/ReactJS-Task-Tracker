/* eslint-disable react/prop-types */

import EditTask from "./EditTask";

const ToDo = ({ task, taskList, setTaskList, index }) => {
    return (
        <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg shadow-xl">
            <div className="flex flex-row w-full justify-between">
                <p className="font-semibold text-2xl">{task.projectName}</p>
                <EditTask index={index} taskList={taskList} setTaskList={setTaskList} task={task} />
            </div>
            <p className="text-xl py-2 mt-2">{task.taskName}</p>
            <p className="text-lg py-1">{task.taskDescription}</p>
            <div className="flex w-full justify-center mt-3">
                <button className="bg-red-600 text-sm uppercase font-semibold text-white py-1.5 px-3 rounded-lg hover:shadow-md hover:bg-red-500 transition-colors">Delete</button>
            </div>
        </div>
    )
};

export default ToDo;
