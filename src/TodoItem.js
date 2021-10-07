import React from "react";
import TodoButton from "./TodoButton";

function TodoItem({ todoArray, setTodoArray, todo }) {
  const handleDelete = (target) => {
    const result = todoArray.filter((t) => {
      const b = t.id !== target;
      return b;
    });
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
    }
    setTodoArray(newTodoArray);
  };
  return (
    <li key={todo.id} className={todo.state === true ? "finish" : "notYet"}>
      {todo.inputText}

      <div>
        <TodoButton
          handleClick={() => {
            handleFinish(todo.id);
          }}
          title={"完成"}
        />
        <TodoButton
          handleClick={() => {
            handleDelete(todo.id);
          }}
          title={"刪除"}
        />
      </div>
    </li>
  );
}

export default TodoItem;
