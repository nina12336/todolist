import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/style.css";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText !== "") {
      setTodoArray([...todoArray, { inputText, id: uuidv4(), state: false }]);
      setInputText("");
      console.log(todoArray);
    } else {
      alert("請輸入待辦事項");
    }
  };

  const handleAddTodo = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = (target) => {
    const result = todoArray.filter((t) => {
      const b = t.id !== target;
      return b;
    });
    console.log(result);
    setTodoArray(result);
  };

  const handleFinish = (c) => {
    const newTodoArray = [];
    for (var i = 0; i < todoArray.length; i++) {
      if (c === todoArray[i].id) {
        todoArray[i].state = true;
        newTodoArray.push(todoArray[i]);
      } else {
        newTodoArray.push(todoArray[i]);
      }
      // console.log(c);
    }
    setTodoArray(newTodoArray);
  };

  return (
    <div>
      <input
        placeholder={"請輸入待辦事項"}
        type={"text"}
        onChange={handleAddTodo}
        value={inputText}
      ></input>
      <button onClick={handleSubmit}>新增</button>
      <ul>
        {todoArray.map((todo) => (
          <li
            key={todo.id}
            className={todo.state === true ? "finish" : "notYet"}
          >
            {todo.inputText}
            <button
              onClick={() => {
                handleFinish(todo.id);
              }}
            >
              完成
            </button>
            <button
              onClick={() => {
                // console.log("onClick");
                handleDelete(todo.id);
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
