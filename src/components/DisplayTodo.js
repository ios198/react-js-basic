const DisplayTodo = (props) => {
  const deleteTodoFromChild = (id) => {
    props.handleDeleteTodo(id);
  };
  const listTodo = props.listTodo;
  return (
    <div>
      <div>----- List todo: -----</div>
      {listTodo.map((item, index) => {
        return (
          <div
            id={item.id}
            key={item.id}
            onClick={() => deleteTodoFromChild(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default DisplayTodo;
