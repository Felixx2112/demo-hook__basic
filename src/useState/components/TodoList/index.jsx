//Link : https://www.youtube.com/watch?v=G27sfcWlMzc&list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m&index=5
//bt: TodoList - list and remove
// Cho danh sách todos như bên dưới

// const todoList = [
//   { id: 1, title: "I love Easy Fontend! ☻" },
//   { id: 2, title: "We love Easy Fontend! ♥" },
//   { id: 3, title: "They love Easy Fontend! ☺" },
// ];

//1. Render danh sách todos với dữ liệu được truyền từ component cha
//2. Khi click len một item thì remove item đó khỏi danh sách

//Phan tich

//--App

// Props: N/A
// State: todoList
// Handle: handleTodoClick - Remove todo ra khoi state todoList
// Render: <TodoList todo={todoList} onTodoClick={handleTodoClick} />

//--TodoList

//Props
//    todos: danh sach todos
//    onTodoClick: ham se duoc goi khi mot todo duoc click
//State: N/A
//Handle todo onClick: goi ham props.onTodoClick()
//Render: ul > li > todo.title

//Cây component

//App
// |__ TodoList

import React from "react";
import PropTypes from "prop-types";

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(item) {
    if (onTodoClick) {
      onTodoClick(item);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
//khi khong co isRequied thi phai khai bao gia tri mac dinh
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

export default TodoList;
