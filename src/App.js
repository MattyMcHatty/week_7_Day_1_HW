import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy shopping", priority: true},
    {name: "Clean bathroom", priority: false},
    {name: "Car's MOT", priority: true}
  ])

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) =>{
    return(
    <li key = {index} className={task.priority ? "is-priority" : "isnt-priority"}>
      <span>{task.name} </span>
      {
        task.priority ? <span className = "is-priority">High</span> :
        <span className = "isnt-priority">Low</span>
      }
      
    </li>   
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: this.state.selectedOption});
    setTasks(copyTasks);
    setNewTask("");
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr></hr>
      
      <form onSubmit={saveNewTask}>
        <input id = "new-task" type = "text" value={newTask} onChange={handleTaskInput}/>
        <label for = "high">High</label>
        <input type = "radio" id = "high" checked={this.state.selectedOption === true} onChange={handleOptionChange}></input>
        <label for = "low">Low</label>
        <input type = "radio" id = "low"checked={this.state.selectedOption === false} onChange={handleOptionChange}></input>
        <input type="submit" value = "Save Task" />
      </form>

      <ul>
        {taskNodes}
      </ul>
      
    </div>
  );
}

export default App;
