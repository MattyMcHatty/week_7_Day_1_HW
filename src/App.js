import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"}
  ])

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");

  const taskNodes = tasks.map((task, index) =>{
    return(
    <li key = {index} >

      <span>{task.name} : {task.priority}</span>
      
    </li>   
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handlePrioritySelect = (event) =>{
    setPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: priority});
    setTasks(copyTasks);
    setNewTask("");
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr></hr>
      
      <form onSubmit={saveNewTask}>
        <input id = "new-task" type = "text" value={newTask} onChange={handleTaskInput}/>

        <label htmlFor = "high">High</label>
        <input type = "radio" id = "high" name = "priority" value="high" onChange={handlePrioritySelect} ></input>

        <label htmlFor = "low">Low</label>
        <input type = "radio" id = "low" name ="priority" value="low" checked  onChange={handlePrioritySelect}></input>

        <input type="submit" value = "Save Task" />
      </form>

      <ul>
        {taskNodes}
      </ul>
      
    </div>
  );
}

export default App;
