import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  Products,
  Title,
  ItemWrapper,
  LineBreak,
  Message,
} from "./styled.jsx";
import CartItem from "../../Components/CartItem/CartItem.jsx";
import CartSumary from "../../Components/cartSummary/cartSummary.jsx";

function ShoppingCart() {
  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <Wrapper>
        <Products>
          <Title>Shopping Cart</Title>
          {productsCart.length > 0 ? (
            productsCart.map((item) => (
              <ItemWrapper key={item.id}>
                <CartItem {...item} key={item.id} />
                <LineBreak />
              </ItemWrapper>
            ))
          ) : (
            <Message>Your shopping cart is empty.</Message>
          )}
        </Products>
        <CartSumary />
      </Wrapper>
    </Container>
  );
}

export default ShoppingCart;
