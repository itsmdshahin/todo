import axios from 'axios';

const API_BASE_URL = 'https://todoserver-eta.vercel.app/api/todo'; // Update with your server URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTasks = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await api.post('/', task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
