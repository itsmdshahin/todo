// pages/Home.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

import axios from 'axios';
import '../styles/Home.scss';

const Home = () => {

  return (
    <div className="home-container">
      <h1>TODO</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
