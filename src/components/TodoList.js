import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState();
  const handleClickBt = (event, mgs) => {
    console.log(">>run handleClickBt function", mgs);
  };
  return (
    <div>
      <label>Name: </label>
      <input
        value={name}
        type="text"
        onChange={(event) => {
          //console.log("check event", event);
          setName(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(event) => {
          console.log("check event", event);
          handleClickBt(event, "buttonClick");
        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello Todo List with the name: {name}
    </div>
  );
};

/*
class TodoList extends React.Component {
  //Khai baos sate
  state = {
    name: "Quan",
    channel: "Hoi dan IT",
  };
  // gan lai gia tri cho state
  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        Hello Todo List with the name = {this.state.name}
      </div>
    );
  }
}
*/
export default TodoList;
