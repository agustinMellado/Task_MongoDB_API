import axios from "./axios"

export const getTasksRequest = () => axios.get('/task')
export const getTaskRequest = (id) => axios.get(`/task/${id}`)
export const createTaskRequest = (task) => axios.post('/task', task)
export const updateTaskRequest = (task) => axios.put(`/task/${task._id}`, task)
export const deleteTasksRequest = (id) => axios.delete(`/task/${id}`)