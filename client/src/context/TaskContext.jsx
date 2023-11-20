import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";

const TaskContext = createContext();
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  //obtener tareas
  const getTasks = async () => {
   try {
    const res = await getTasksRequest();
    setTasks(res.data)
   } catch (error) {
    console.error(error);
    
   }
  };
  //creacion de tareas
  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
