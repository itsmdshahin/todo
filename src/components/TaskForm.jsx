// components/TaskForm.jsx
import React, { useState } from 'react';
import axios from 'axios';  
import '../styles/TaskForm.scss'; 

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const submitFormHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior 
    
    const formData = {
      title: taskTitle,
      description: taskDescription,
    };

    try {
       
      const response = await axios.post('https://todoserver-eta.vercel.app/api/todo', formData);
 
      console.log('Response from server:', response.data); 
      setTaskTitle('');
      setTaskDescription('');
    } catch (error) { 
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <form className='maintaskform' onSubmit={submitFormHandler}>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
