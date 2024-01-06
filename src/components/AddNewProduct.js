import { useState } from "react";
import "./AddNewProduct.css";
const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const [isShowDetail, setShowDetail] = useState(true);

  const handleClickBtn = () => {
    let object = { name, price, size, color };
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  const handleHideShow = () => {
    setShowDetail(!isShowDetail);
  };

  return (
    <div>
      {isShowDetail === true && (
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
      )}
      {isShowDetail === true ? (
        <div
          className="showhide"
          onClick={() => {
            handleHideShow();
          }}
        >
          Hide this form
        </div>
      ) : (
        <div
          className="showhide"
          onClick={() => {
            handleHideShow();
          }}
        >
          Show this form
        </div>
      )}
    </div>
  );
};

export default AddNewProduct;
