import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import { toast, Toaster } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { Container } from "./styled.jsx";

const CartItem = ({ img, name, salePrice, id, quantity, discount, stock }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product Removed");
  };
  const [input, setInput] = useState(quantity);
  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value >= 0) {
      setInput(e.target.value);
      dispatch(editQuantity(e.target.value, id));
    } else return;
  };
  return (
    <Container>
      <img src={img}></img>
      <p>{name}</p>
      <input
        value={input}
        min="1"
        type="number"
        max={stock}
        onChange={handleChange}
      />
      <FaRegTrashAlt onClick={() => deleteItem(id)}></FaRegTrashAlt>
      {discount ? (
        <h3>{salePrice - (salePrice * discount) / 100} USD</h3>
      ) : (
        <h3>{salePrice} USD</h3>
      )}
      <Toaster />
    </Container>
  );
};

export default CartItem;
