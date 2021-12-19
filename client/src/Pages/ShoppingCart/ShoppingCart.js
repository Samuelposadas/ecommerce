import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem";
import CartSumary from "../../Components/CartSumary/CartSumary";

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ShoppingCart() {
  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <CartSumary />
      <Products>
        {productsCart &&
          productsCart.map((item) => <CartItem {...item} key={item.id} />)}
      </Products>
    </Container>
  );
}

export default ShoppingCart;
