import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText !== "") {
      setTodoArray([...todoArray, { inputText, id: uuidv4() }]);
      setInputText("");
      // console.log(todoArray);
    } else {
      alert("請輸入待辦事項");
    }
  };

  const handleAddTodo = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
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
          <li key={todo.id}>
            {todo.inputText}
            <button>完成</button>
            <button>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
