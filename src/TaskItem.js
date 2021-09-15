
import React, { useState, useEffect } from 'react'
import "./TaskItem.css"
function TaskItem(props) {

    const deleteHandler = (data) => {
        props.dataChanger(data)
    }


    return (
        <ul>
            {props.data.map((data) => (<div className="taskitem">
                < div className="taskdate" >
                    <div className="task_month">{data.date.toLocaleString('en-US', { month: 'long' })}</div>
                    <div className="task_year">{data.date.getFullYear()}</div>
                    <div className="task_date">{data.date.toLocaleString('en-US', { day: '2-digit' })}</div>
                </div >
                <div className="task_descriptions">
                    <h2>{data.title}</h2>
                </div>
                <div className="task_btn">
                    <button onClick={() => deleteHandler(data)}>Delete</button>
                </div>
            </div >))
            }
        </ul>
    )
}

export default TaskItem