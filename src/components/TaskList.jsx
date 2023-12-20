// components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TaskList.scss'; // Import the SCSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todo');
        console.log("Here is the data:", response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
        // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  const promptForUpdate = async (field) => {
    return new Promise((resolve) => {
      const userInput = window.prompt(`Enter new ${field}:`);
      resolve(userInput || '');
    });
  };

  const handleUpdateSubmit = async (taskId) => {
    try {
      setLoading(true); // Set loading to true while updating

      // Prompt the user for a new title and description
      const newTitle = await promptForUpdate('title');
      const newDescription = await promptForUpdate('description');

      // Send a PUT request to update the task with the new data
      await axios.put(`http://localhost:5000/api/todo/${taskId}`, {
        title: newTitle,
        description: newDescription,
      });

      // Fetch the updated task list after the update
      const updatedResponse = await axios.get('http://localhost:5000/api/todo');
      setTasks(updatedResponse.data);

      console.log('Task updated successfully!');
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false); // Set loading to false after deleting
    }
  };

  const handleDelete = async (taskId) => {
    try {
      // Implement the logic to delete the task
      await axios.delete(`http://localhost:5000/api/todo/${taskId}`);

      // Update the local state to remove the deleted task
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

      console.log('Delete Task with ID:', taskId);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  return (
    <div className="maintasklist">
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="task-list">
          {/* maping data form tasks and show the titile and description */}
          {tasks.map((task) => (
            <li className="task-item" key={task._id}>
              <div className="headers">
                <div className="title">
                  <h1>{task.title}</h1>
                </div>
                <div className="description">
                  <p>{task.description}</p>
                </div>
                <div className="due-date">
                  <p><i>Due Date: {new Date(task.dueDate).toLocaleDateString()}</i></p>
                </div>
              </div>
              <div className="buttons">
                <button className='updatebtn' onClick={() => handleUpdateSubmit(task._id)}>Update</button>
                <button className='deletebtn' onClick={() => handleDelete(task._id)}>Delete</button>
              </div>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};

export default TaskList;
