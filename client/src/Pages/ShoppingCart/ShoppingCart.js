import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function ShoppingCart() {
  const productsCart = useSelector((state) => state.cart.cart);
  return (
    <Container>
      {productsCart &&
        productsCart.map((item) => <CartItem {...item} key={item.id} />)}
    </Container>
  );
}

export default ShoppingCart;
