import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Fontend! ☻" },
    { id: 2, title: "We love Easy Fontend! ♥" },
    { id: 3, title: "They love Easy Fontend! ☺" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    console.log(index);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <h1>React hooks - TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
