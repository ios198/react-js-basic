import React, { useState } from "react";
import _ from "lodash";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "watching youtube" },
    { id: "todo2", name: "using facebook" },
    { id: "todo3", name: "reading book" },
  ]);

  const randomIniFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };
  console.log(">>> check data", listTodo);
  const handleClickBt = () => {
    let todoID = randomIniFromInterval(4, 999999999999);
    let todoItem = {
      id: `todo${todoID}`,
      name: todo,
    };
    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);
    console.log("---> list", listTodo);
  };
  return (
    <div>
      <label>Todo's Name: </label>
      <input
        value={todo}
        type="text"
        onChange={(event) => {
          console.log(">>> --- check event input", event);
          setTodo(event.target.value);
        }}
      />
      <button type="submit" onClick={() => handleClickBt()}>
        Submit
      </button>
      <br />
      <br />
      <div>----- List todo: -----</div>
      {listTodo.map((item, index) => {
        return (
          <div
            id={item.id}
            key={item.id}
            onClick={() => handleDeleteTodo(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
