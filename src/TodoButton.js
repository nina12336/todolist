import React from "react";

function TodoButton({ handleClick, title }) {
  return <button onClick={handleClick}>{title}</button>;
}

export default TodoButton;
