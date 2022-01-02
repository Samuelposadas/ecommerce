import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import styled from "styled-components";
import { ButtonDetail } from "../../common/button/button";

const Form = styled.form``;

export const CardStripe = () => {
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
    // eslint-disable-next-line no-undef
    toast.promise(saveSettings(settings), {
      loading: "Saving...",
      success: <b>Your purchase was successful!</b>,
      error: <b>Your purchase could not be made.</b>,
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <CardElement />
        <ButtonDetail width={"100%"}>Place Order</ButtonDetail>
      </Form>
      <Toaster />
    </>
  );
};
