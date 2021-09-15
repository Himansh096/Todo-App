import "./AddTask.css"
import React, { useState } from 'react'

function AddTask(props) {
    const [showForm, setShowForm] = useState(false)
    const [showbtn, setShowbtn] = useState(true)
    const [details, setDetails] = useState({ title: "", task: "", date: "", status: "Pending" })
    const CloseHandler = () => {
        setShowbtn(true)
        setShowForm(false)
    }
    const OpenHandler = () => {
        setShowForm(true)
        setShowbtn(false)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details)

        const taskData = { key: Math.random().toString(), title: details.title, task: details.task, date: new Date(details.date), status: details.status }
        props.onAddItem(taskData)

        setDetails({ title: "", task: "", date: "", status: "", key: "" })

    }
    return (
        <div className="addtask" >
            {showbtn && < div className="action_btn" id="add_btn" ><button onClick={OpenHandler} >Add New Task</button></div>}
            {
                showForm && <form onSubmit={submitHandler}>
                    <div className="task_controls">
                        <div className="task_control">
                            <label>Title</label>
                            <input type="text" name="title" value={details.title} onChange={(e) => setDetails({
                                ...details,
                                [e.target.name]: e.target.value
                            })} placeholder="Enter Title...." /></div>
                        <div className="task_control">
                            <label >Task</label>
                            <input type="text" value={details.task} placeholder="Enter task...." name="task" onChange={(e) => setDetails({
                                ...details,
                                [e.target.name]: e.target.value
                            })} /></div>
                        <div className="task_control">
                            <label>Date</label>
                            <input type="date" value={details.date} name="date" onChange={(e) => { setDetails({ ...details, [e.target.name]: e.target.value }) }} /></div>
                        <div className="task_control">
                            <label>Status</label>
                            <select value={details.status} name="status" onChange={(e) => { setDetails({ ...details, [e.target.name]: e.target.value }) }}>
                                <option value='pending'>Pending</option>
                                <option value='abandon'>Abandon</option>
                                <option value='complete'>Complete</option>
                                <option value='inprogress'>Inprogress</option>
                            </select>
                        </div>
                    </div>
                    <div className="action_btn">
                        <button type="button" onClick={CloseHandler}>Cancel</button>
                        <button type="submit" >Add Task</button>
                    </div>
                </form>
            }
        </div >
    )
}

export default AddTask
