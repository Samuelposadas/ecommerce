import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem.jsx";
import CartSumary from "../../Components/CartSumary/CartSumary.jsx";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  color: black;
`;

const Wrapper = styled.div`
  width: 850px;
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 800px) {
		grid-template-columns: 100%;
		margin-left: 10px;
		margin-right: 10px;

	}
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr;

`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 30px;
  color: black;
`;
const ItemWrapper = styled.div``;

const LineBreak = styled.hr`
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
`;

function ShoppingCart() {
  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Wrapper>
        <Products>
          <Title>Shopping Cart</Title>
          {productsCart &&
            productsCart.map((item) => (
              <ItemWrapper key={item.id}>
                <CartItem {...item} key={item.id} />
                <LineBreak />
              </ItemWrapper>
            ))}
        </Products>
        <CartSumary />
      </Wrapper>
    </Container>
  );
}

export default ShoppingCart;
