import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem";
import CartSumary from "../../Components/CartSumary/CartSumary";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 90% 20%;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 60%;
  grid-template-rows: repeat(auto, 400px);
`;

function ShoppingCart() {
  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Wrapper>
        <Products>
          {productsCart &&
            productsCart.map((item) => <CartItem {...item} key={item.id} />)}
        </Products>
        <CartSumary />
      </Wrapper>
    </Container>
  );
}

export default ShoppingCart;
