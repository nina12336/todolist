import React from "react";
import TodoButton from "./TodoButton";

function TodoItem({ todoArray, setTodoArray, todo }) {
  return (
    <ul>
      {todoArray.map((todo) => (
        <li key={todo.id} className={todo.state === true ? "finish" : "notYet"}>
          {todo.inputText}

          <div>
            <TodoButton
              todo={todo}
              todoArray={todoArray}
              setTodoArray={setTodoArray}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
