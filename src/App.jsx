import "./App.css";
import Task from "./Task";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);

    setTodoList(newTodoList);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <div className="addTask"></div>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      {todoList.map((task) => {
        return (
          <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        );
      })}
      <div className="list"></div>
    </div>
  );
}

export default App;
