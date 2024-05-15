// main.jsx

import { useState, useEffect } from 'react';
import './Sidemain.css';

const Sidemain = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('Data');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = () => {
    if (text.trim() === '') {
      alert('Please write some task.');
    } else {
      const newTasks = [...tasks, text];
      setTasks(newTasks);
      localStorage.setItem('Data', JSON.stringify(newTasks));
      setText('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = !updatedTasks[index];
    setTasks(updatedTasks);
    localStorage.setItem('Data', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('Data', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <div className="to-do">
        <div className="box">
          <h2>My To Do List:</h2>
          <br />
          <img src="images/icon.png" alt="" />
        </div>
        <div className="Inbtn">
          <input
            type="text"
            placeholder="Enter Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTask}>Add to list</button>
        </div>
        <div>
          <ul id="list-container">
            {tasks.map((task, index) => (
              <li key={index} className={task ? 'item' : ''} onClick={() => toggleTask(index)}>
                {task}
                <span onClick={() => deleteTask(index)}>&times;</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidemain;
