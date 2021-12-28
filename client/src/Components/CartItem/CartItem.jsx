import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import { toast } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { Container } from "./styled.jsx";

const CartItem = ({ img, name, salePrice, id, quantity }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product Removed");
  };
  const [input, setInput] = useState(quantity);
  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(editQuantity(e.target.value, id));
  };
  return (
    <Container>
      <img src={img}></img>
      <p>{name}</p>
      <input value={input} min="1" type="number" onChange={handleChange} />
      <FaRegTrashAlt onClick={() => deleteItem(id)}></FaRegTrashAlt>

      <h3>{salePrice}</h3>
    </Container>
  );
};

export default CartItem;
