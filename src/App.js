import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import "./styles/style.css";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText !== "") {
      setTodoArray([...todoArray, { inputText, id: uuidv4(), state: false }]);
      setInputText("");
    } else {
      alert("請輸入待辦事項");
    }
  };

  const handleAddTodo = (event) => {
    setInputText(event.target.value);
  };

  const handleDelete = (id) => {
    const result = todoArray.filter((t) => {
      const b = t.id !== id;
      return b;
    });
    setTodoArray(result);
  };

  const handleFinish = (id) => {
    const newTodoArray = [];
    for (let i = 0; i < todoArray.length; i++) {
      if (id === todoArray[i].id) {
        todoArray[i].state = true;
        newTodoArray.push(todoArray[i]);
      } else {
        newTodoArray.push(todoArray[i]);
      }
    }
    setTodoArray(newTodoArray);
  };

  return (
    <div className="body">
      <div className="title">
        <h1>Todo list</h1>
      </div>
      <div className="inputArea">
        <input
          placeholder="請輸入待辦事項"
          type="text"
          onChange={handleAddTodo}
          value={inputText}
        />
        <button onClick={handleSubmit}>新增</button>
      </div>
      <div className="todoListItem">
        <ul>
          {todoArray.map((todo) => (
            <TodoItem
              handleFinish={handleFinish}
              handleDelete={handleDelete}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
