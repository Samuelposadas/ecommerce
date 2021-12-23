import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { cleanCart } from "../../redux/actions/actionCart";
import Paypal from "../Paypal/Paypal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-bottom: 30px;
  }
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 30px;
  color: black;
`;
const Items = styled.div`
  font-size: 15px;
`;
const Total = styled.div`
  font-size: 15px;
`;

const LineBreak = styled.hr`
  width: 100%;
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
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
      <Title>Summary</Title>
      <Items>Items: {totalItems}</Items>
      <LineBreak />
      <Total>Total: ${totalPrice}</Total>
      <LineBreak />
      <ButtonDetail
        width={"max-width"}
        backgroundcolor={"#d60a0ad1"}
        onClick={() => dispatch(cleanCart())}
      >
        Clean Cart
      </ButtonDetail>
      <Paypal></Paypal>
      <ButtonDetail width={"max-width"} backgroundcolor={"#0077ED"}>
        Bitcoin
      </ButtonDetail>
    </Container>
  );
};

export default CartSumary;
