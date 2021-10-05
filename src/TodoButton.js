import React from "react";

function TodoButton({ handleClick, title }) {
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  );
}

export default TodoButton;
