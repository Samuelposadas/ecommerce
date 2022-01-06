import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonDetail } from "../../common/button/button.jsx";
import { cleanCart, setCartTotalPrice } from "../../redux/actions/actionCart";
import Paypal from "../Paypal/Paypal.jsx";
import { Container, Title, Items, LineBreak, Total, CleanCart } from "./styled";

import { CardStripe } from "../../Pages/Shopping/cardStripe.jsx";

const REACT_APP_STRIPE = process.env.REACT_APP_STRIPE;
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(REACT_APP_STRIPE);

const CartSumary = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showStripe, setShowStripe] = useState(false);
  useEffect(() => {
    let items = 0;
    let price = 0;
    productsCart.forEach((item) => {
      items += item.quantity;
      if (item.discount) {
        price +=
          (item.salePrice - (item.discount * item.salePrice) / 100) *
          item.quantity;
      } else {
        price += item.salePrice * item.quantity;
      }
    });
    setTotalPrice(price);
    dispatch(setCartTotalPrice(price));
    setTotalItems(items);
  }, [productsCart, totalItems, totalPrice, setTotalItems, setTotalPrice]);
  return (
    <Container>
      <Title>Summary</Title>
      <Items>Items: {totalItems}</Items>
      <LineBreak />
      <Total>Total: ${totalPrice}</Total>
      <LineBreak />
      <CleanCart onClick={() => dispatch(cleanCart())}>Clean Cart</CleanCart>
      <LineBreak />

      {totalItems > 0 && (
        <div>
          <Paypal></Paypal>
          <LineBreak />
          <ButtonDetail
            width={"max-width"}
            backgroundcolor={"#0077ED"}
            onClick={() => setShowStripe(!showStripe)}
          >
            Credit Card
          </ButtonDetail>
          {showStripe && (
            <Elements stripe={stripePromise}>
              <CardStripe />
            </Elements>
          )}
        </div>
      )}
    </Container>
  );
};

export default CartSumary;
