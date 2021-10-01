import React from "react";

function TodoButton({ handleDelete, handleFinish, todo }) {
  return (
    <div>
      <button
        onClick={() => {
          handleFinish(todo.id);
        }}
      >
        完成
      </button>
      <button
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        刪除
      </button>
    </div>
  );
}

export default TodoButton;
