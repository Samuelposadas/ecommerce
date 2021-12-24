import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonDetail } from "../../common/button/button.jsx";
import { cleanCart } from "../../redux/actions/actionCart";
import Paypal from "../Paypal/Paypal.jsx";
import { Container, Title, Items, LineBreak, Total } from "./styled";

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
