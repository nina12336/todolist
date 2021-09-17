import React from "react";

function TodoButton({ todoArray, setTodoArray, todo }) {
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
    </div>
  );
}

export default TodoButton;
