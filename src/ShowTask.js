import React, { useState } from 'react'
import "./ShowTask.css"
import TaskItem from "./TaskItem"
function ShowTask(props) {
    const [filterValue, setFilterValue] = useState("Pending")
    const changeHandler = (data) => {
        props.filterData(data)
    }
    const dropdownChangeHandler = (e) => {
        setFilterValue(e.target.value);
        console.log(e.target.value)
    };
    return (
        <div className="showTask">
            <div className="top_header">
                <h3>Filter By status</h3>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='pending'>Pending</option>
                    <option value='abandon'>Abandon</option>
                    <option value='complete'>Complete</option>
                    <option value='inprogress'>Inprogress</option>
                </select>
            </div>
            <br />
            <TaskItem data={props.data} dataChanger={changeHandler} filterValue={filterValue} />
        </div>
    )
}

export default ShowTask
