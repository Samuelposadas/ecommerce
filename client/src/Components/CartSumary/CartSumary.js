import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cleanCart } from "../../redux/actions/actionCart";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid grey 2px;
  & span {
    font-size: 30px;
  }
`;

const CartSumary = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    productsCart.forEach((item) => {
      items += item.quantity;
      price += item.salePrice * item.quantity;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [productsCart, totalItems, totalPrice, setTotalItems, setTotalPrice]);
  return (
    <Container>
      <span>TOTAL: {totalItems} ITEMS</span>
      <span>${totalPrice}</span>
      <button onClick={() => dispatch(cleanCart())}>CLEAN CART</button>
    </Container>
  );
};

export default CartSumary;
