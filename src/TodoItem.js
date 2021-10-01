import React from "react";
import TodoButton from "./TodoButton";

function TodoItem({ todoArray, handleDelete, handleFinish }) {
  return (
    <ul>
      {todoArray.map((todo) => (
        <li key={todo.id} className={todo.state === true ? "finish" : "notYet"}>
          {todo.inputText}

          <div>
            <TodoButton
              todo={todo}
              handleDelete={handleDelete}
              handleFinish={handleFinish}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
