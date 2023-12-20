// components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      {/* Add an "Update" button to mark the task as completed */}
      {!task.completed && (
        <button onClick={() => onUpdate(task.id, { ...task, completed: true })}>
          Update
        </button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
