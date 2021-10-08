import React, { useState } from "react";

const Twodo = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [priorityLevel, setPriorityLevel] = useState(1);
    const [tasks, setTasks] = useState(null);
    const [completedTasks, setCompletedTasks] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tasks === null) {
            setTasks([
                {
                    taskID: (Math.random() * 1000).toFixed(),
                    taskTitle,
                    priorityLevel,
                    isComplete: false,
                },
            ]);
            console.log(tasks);
            setPriorityLevel(1);
            setTaskTitle("");
            return;
        } else {
            setTasks([
                ...tasks,
                {
                    taskID: (Math.random() * 1000).toFixed(),
                    taskTitle,
                    priorityLevel,
                    isComplete: false,
                },
            ]);
        }
        console.log(tasks);
        setPriorityLevel(1);
        setTaskTitle("");
    };

    const isComplete = (e) => {
        const itemID = e.target.getAttribute("itemid"); //obtenemos el id del item
        const itemIsChecked = e.target.checked; //estado del check
        console.log(itemIsChecked);

        if (itemIsChecked === false) {
            let newIncompleted = completedTasks.find((item) => item.taskID === itemID);
            newIncompleted.isComplete = !newIncompleted.isComplete;

            setTasks([...tasks, newIncompleted]);
            const newCompletedTasks = completedTasks.filter((task) => task.taskID !== itemID);
            setCompletedTasks(newCompletedTasks);
        }
        if (itemIsChecked === true) {
            let newCompleted = tasks.find((item) => item.taskID === itemID);
            newCompleted.isComplete = !newCompleted.isComplete;

            if (completedTasks === null) {
                setCompletedTasks([newCompleted]);

                const updatedTasks = tasks.filter((item) => item.taskID !== itemID);
                setTasks(updatedTasks);
            } else {
                setCompletedTasks([...completedTasks, newCompleted]);

                const updatedTasks = tasks.filter((item) => item.taskID !== itemID);
                setTasks(updatedTasks);
            }
        }
    };
    return (
        <div className="container">
            <h1 className="display-4">Todo App</h1>
            <p className="fs-6">Mini APP ToDo sin bbdd, sistema CRUD sencillo</p>
            <hr />

            {/*CONTROLADOR*/}
            <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#add-task" aria-expanded="true" aria-controls="add-task">
                <i className="bi bi-plus-circle"></i> Nueva Tarea
            </button>
            {completedTasks && (
                <button
                    className="btn btn-outline-warning float-end"
                    type="button"
                    onClick={() => {
                        setCompletedTasks(null);
                    }}
                >
                    <i className="bi bi-trash"></i>Borrar Completos
                </button>
            )}

            <div className="collapse border rounded col-12 col-md-4" id="add-task">
                <div className="card card-body bg-dark">
                    <div className="mb-3">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="task-title" className="form-label">
                                Titulo Tarea
                            </label>
                            <input
                                type="text"
                                className="form-control mb-2"
                                id="task-title"
                                placeholder="Insertar Título"
                                value={taskTitle}
                                autoComplete="off"
                                onChange={(e) => {
                                    setTaskTitle(e.target.value);
                                }}
                            />
                            <div className="accordion mb-3" id="priority-level">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="prioridad">
                                        <button
                                            className="accordion-button collapsed p-2"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Prioridad
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="prioridad" data-bs-parent="#priority-level">
                                        <div className="accordion-body">
                                            <div className="" id="priority-container">
                                                <label htmlFor="" className="text-dark">
                                                    Prioridad: <span className="fw-bold">{priorityLevel}</span>
                                                </label>
                                                <input
                                                    type="range"
                                                    className=" w-100"
                                                    id="priority-level"
                                                    min="1"
                                                    max="3"
                                                    value={priorityLevel}
                                                    onChange={(e) => {
                                                        setPriorityLevel(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success" type="submit" data-bs-toggle="collapse" data-bs-target="#add-task" aria-expanded="true" aria-controls="add-task">
                                <i className="bi bi-file-earmark-plus"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/*LISTA*/}
            <div className="col-12 me-auto mt-3" id="task-list">
                <h4>List</h4>
                <table className="table text-light">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" width="15%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks !== null &&
                            tasks.map((item) => (
                                <tr key={item.taskID}>
                                    <td>
                                        <input
                                            className="me-2"
                                            type="checkbox"
                                            itemID={item.taskID}
                                            onChange={(e) => {
                                                isComplete(e);
                                            }}
                                        />
                                        {item.taskTitle}
                                    </td>
                                    <td>
                                        <button className="btn text-danger border border-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/*COMPLETED TABLE*/}
                {completedTasks !== null && (
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item bg-dark">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button bg-dark text-light float-end fw-normal border p-2"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    completed: {completedTasks.length}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <table className="table text-light">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col" width="15%">
                                                    Acciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {completedTasks !== null &&
                                                completedTasks.map((item) => (
                                                    <tr key={item.taskID}>
                                                        <td>
                                                            <input
                                                                className="me-2"
                                                                type="checkbox"
                                                                itemID={item.taskID}
                                                                checked={item.isComplete}
                                                                onChange={(e) => {
                                                                    isComplete(e);
                                                                }}
                                                            />
                                                            <span className="text-decoration-line-through w-100">{item.taskTitle}</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn text-danger border border-danger">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Twodo;
