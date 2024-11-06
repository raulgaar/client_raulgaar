import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
  
    const addTask = () => {
      if (taskText.trim() === '') return;
  
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
  
      setTasks([...tasks, newTask]);
      setTaskText('');
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    };
  
    return (
      <div className="todo-container">
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type="text"
            id="new-task"
            placeholder="New task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="add-task-button" onClick={addTask}>Add Task</button>
        </div>
        <ul id="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ToDoList;
