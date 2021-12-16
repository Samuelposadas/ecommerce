import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CarStripe = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      //El amount está en centavos, así que debe multiplicarce por 10
      const { data } = await axios.post(
        "http://localhost:3001/payment/addPayment",
        {
          id,
          amount: 1000,
        }
      );
      console.log(data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>BUY</button>
    </form>
  );
};
