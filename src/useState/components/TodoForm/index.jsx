//Link: https://www.youtube.com/watch?v=HbERbcazLhY&list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m&index=6
//bt: TodoList - add new todo

//Tao mot from don gian nhu sau:
// .Chua mot the input de user co the nhap du lieu
// .Khi form submit:
//      .Chan browser reload
//      .Tao them mot todo moi vao danh sach

//PHAN TICH

// TodoForm
//    .Props
//         .onSubmit: ham duoc goi khi form duoc submit
//    .State: value
//    .Render: form > input
// Handle submit: goi ham props.onSubmit()

//1. TodoFrom quan ly nhap lieu
//2. Khi submit, TodoFrom bao component cha App, day la du lieu user submit
//3. App: Lay du lieu, cap nhap state todoList
//4. TodoList: thay todoList moi, re-render lai

//Cay component

//App
//|__ TodoFrom
//|__ TodoList

import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent reloading browser
    e.preventDefault();

    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    //reset Form
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
    </form>
  );
}
TodoFrom.propTypes = {
  onSubmit: PropTypes.func,
};

TodoFrom.defaultProps = {
  onSubmit: null,
};

export default TodoFrom;
