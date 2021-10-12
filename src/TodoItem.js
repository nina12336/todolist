import React from "react";
import TodoButton from "./TodoButton";

function TodoItem({ handleDelete, handleFinish, todo }) {
  return (
    <li key={todo.id} className={todo.state === true ? "finish" : "notYet"}>
      {todo.inputText}

      <TodoButton
        handleClick={() => {
          handleFinish(todo.id);
        }}
        title="完成"
      />
      <TodoButton
        handleClick={() => {
          handleDelete(todo.id);
        }}
        title="刪除"
      />
    </li>
  );
}

export default TodoItem;
