import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 30px;
  }
`;

const CartItem = ({ img, name, salePrice, id, quantity }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product Remove");
  };
  const [input, setInput] = useState(quantity);
  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(editQuantity(e.target.value, id));
  };
  return (
    <Container>
      <button onClick={() => deleteItem(id)}>X</button>
      <img src={img}></img>
      <h2>{name}</h2>
      <h2>{salePrice}</h2>
      <input value={input} min="1" type="number" onChange={handleChange} />
      <Toaster />
    </Container>
  );
};

export default CartItem;
