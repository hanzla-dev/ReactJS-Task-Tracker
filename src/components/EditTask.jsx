/* eslint-disable react/prop-types */
import { useState } from "react";
const EditTask = ({ taskList, setTaskList, index, task }) => {
    const [editModel, setEditModel] = useState(false);
    const [projectName, setProjectName] = useState(task.projectName);
    const [taskName, setTaskName] = useState(task.taskName);
    const [taskDescription, setTaskDescription] = useState(task.taskDescription);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (projectName == "" || taskName == "" || taskDescription == "") {
            document.getElementById("error").classList.remove("hidden");
            return;
        }

        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);

        setTaskList(taskList => [
            ...taskList,
            { projectName, taskName, taskDescription }
        ]);
        setEditModel(false);
    }

    return (
        <>
            <button onClick={() => setEditModel(true)} className="bg-blue-200 text-sm font-semibold text-black py-1.5 px-3 rounded-lg hover:bg-blue-300 transition-colors">Edit</button>
            {editModel ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div className="max-w-lg bg-white w-9/12 border rounded-lg shadow-md relative flex flex-col">
                            <div className="flex flex-row justify-between p-5 border-b border-slate-300">
                                <h3 className="bg-white text-3xl font-semibold">Edit Task</h3>
                                <button onClick={() => setEditModel(false)} className=" block px-1 text-gray-400 float-right text-3xl">X</button>
                            </div>
                            <form className="p-6">
                                <div>
                                    <label
                                        className="tracking-wide text-gray-400 uppercase text-sm font-semibold mb-2 block" htmlFor="project-name"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                        className="w-full rounded border-gray-200 border bg-gray-200 text-gray-700 focus:outline-none py-3 px-4 mb-5 leading-tight focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        id="project-name"
                                        placeholder="Project name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="tracking-wide text-gray-400 uppercase text-sm font-semibold mb-2 block" htmlFor="task-name"
                                    >
                                        Task Name
                                    </label>
                                    <input
                                        value={taskName}
                                        onChange={(e) => setTaskName(e.target.value)}
                                        className="w-full rounded border-gray-200 border bg-gray-200 text-gray-700 focus:outline-none py-3 px-4 mb-5 leading-tight focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        id="task-name"
                                        placeholder="Task name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="tracking-wide text-gray-400 uppercase text-sm font-semibold mb-2 block" htmlFor="text-description">Description</label>
                                    <textarea
                                        value={taskDescription}
                                        onChange={(e) => setTaskDescription(e.target.value)}
                                        className="w-full rounded border-gray-200 border bg-gray-200 text-gray-700 focus:outline-none py-3 px-4 mb-5 leading-tight focus:border-gray-400 focus:bg-white"
                                        id="text-description"
                                        placeholder="Task description"
                                        rows={3}
                                        required
                                    ></textarea>
                                </div>
                                <div id="error" className="hidden"> <span className="text-red-700 text-2xl w-auto">Fill out all fields!</span></div>
                            </form>
                            <div>
                                <center>
                                    <button
                                        onClick={handleUpdate}
                                        type="submit" className="thebtn mb-4 mt-0 hover:opacity-80">Update Task!</button>
                                </center>
                            </div>
                        </div>

                    </div>
                </>
            ) : null}
        </>
    )
};

export default EditTask;
