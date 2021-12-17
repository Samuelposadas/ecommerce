import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actionCart";
import styled from "styled-components";

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
  };
  return (
    <Container>
      <button onClick={() => deleteItem(id)}>X</button>
      <img src={img}></img>
      <h2>{name}</h2>
      <h2>{salePrice}</h2>
      <p>{quantity}</p>
    </Container>
  );
};

export default CartItem;
