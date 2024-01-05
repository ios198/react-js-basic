import React from "react";
const AddTodo = (props) => {
  const { todo, setTodo, handleClickBt } = props;
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
    </div>
  );
};

export default AddTodo;
