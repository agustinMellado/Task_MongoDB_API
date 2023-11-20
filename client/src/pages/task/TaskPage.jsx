import React, { useEffect } from "react";
import { useTasks } from "../../context/taskContext";

function TaskPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);


if(tasks.length === 0) return (<h1>NO HAY TAREAS</h1>)
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>

  );
}

export default TaskPage;
