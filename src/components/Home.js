import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
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
    if (!todo) {
      alert("Todo's name is not empty");
      return;
    }
    let todoID = randomIniFromInterval(4, 999999999999);
    let todoItem = {
      id: `todo${todoID}`,
      name: todo,
    };
    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);
    setTodo("");
  };

  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleClickBt={handleClickBt} />
      <DisplayTodo listTodo={listTodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};
export default Home;
