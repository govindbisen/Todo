import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const addList = () => setTodoList([...todolist, todo]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <b>TODO</b>
        </header>
        <div>
          <input
            type="text"
            className="Todo"
            id="inp"
            onChange={(event) => setTodo(event.target.value)}
          />
          <button onClick={addList}>Add Task</button>
          {console.log(todolist)}
          <div className="tasks">
            <ul>
              {todolist.map((t) => (
                <li key={Math.random()}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
