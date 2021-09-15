import AddTask from "./AddTask"
import './App.css';
import React, { useState } from 'react'
import Login from "./Login/Login";
import ShowTask from './ShowTask'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Login/Register";
import Header from "./Header"

function App() {
  const [task, setTask] = useState([])
  const saveTaskData = (enteredTask) => {
    setTask((preTask) => [enteredTask, ...preTask])
  }
  const valueHandler = (data) => {
    setTask(task.filter((task) => task.key !== data.key))

  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact ><AddTask onAddItem={saveTaskData} />
            <ShowTask data={task} filterData={valueHandler} /></Route>
          <Route path="/login" exact ><Login /></Route>
          <Route path="/signup" exact ><Register /></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
