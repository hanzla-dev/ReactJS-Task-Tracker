import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const AddTask = ({ taskList, setTaskList }) => {
    const [addModel, setAddModel] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    const handleAdd = (e) => {
        e.preventDefault();
        setTaskList(taskList => [
            ...taskList, 
            { projectName, taskName, taskDescription }
        ]);
        setAddModel(false);
        console.log(taskList);
        setProjectName("");
        setTaskName("");
        setTaskDescription("");
    }
    return (
        <div>
            <button type="button" className="thebtn hover:opacity-75"
                onClick={() => setAddModel(true)}>+ NEW</button>
            {addModel ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div className="max-w-lg bg-white w-9/12 border rounded-lg shadow-md relative flex flex-col">
                            <div className="flex flex-row justify-between p-5 border-b border-slate-300">
                                <h3 className="bg-white text-3xl font-semibold">Add new Task</h3>
                                <button onClick={() => setAddModel(false)} className=" block px-1 text-gray-400 float-right text-3xl">X</button>
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
                            </form>
                            <div>
                                <button
                                    onClick={handleAdd}
                                    type="submit" className="thebtn mb-4 mt-0 hover:opacity-80">Add Task!</button>
                            </div>
                        </div>

                    </div>
                </>
            ) : null}
        </div>
    )
};

export default AddTask;
