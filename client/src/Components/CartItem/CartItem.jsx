import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantity, removeFromCart } from "../../redux/actions/actionCart";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 70% 10%;
  grid-template-rows: 60px 20%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 25% 60% 15%;
  }

  p {
    font-size: 15px;
    grid-area: name;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  input {
    height: 20px;
    width: 50px;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  svg {
    font-size: 20px;
    grid-area: delete;
    cursor: pointer;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 70px;
  }
  h3 {
    grid-area: price;
    font-size: 15px;
    justify-self: end;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  img {
    height: ${({ height }) => height || "100%"};
    width: ${({ width }) => width || "100%"};
    margin: 0;
    object-fit: contain;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

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

      <h3>${salePrice}</h3>
      <Toaster />
    </Container>
  );
};

export default CartItem;
