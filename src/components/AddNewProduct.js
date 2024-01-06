import { useState } from "react";
const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const handleClickBtn = () => {
    console.log(">>>check data", name, price, size, color);
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  return (
    <fieldset>
      <legend>Add a new product</legend>
      <div className="input-product">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="input-product">
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
      </div>
      <div className="input-product">
        <label>Size:</label>
        <input
          type="text"
          value={size}
          onChange={(event) => setSize(event.target.value)}
        ></input>
      </div>
      <div className="input-product">
        <label>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        ></input>
      </div>

      <div>
        <button onClick={() => handleClickBtn()}> +Add New </button>
      </div>
    </fieldset>
  );
};

export default AddNewProduct;
