import React from "react";
import ReactDOM from "react-dom";
import { DivPay } from "./styled.jsx";

export const PayPalButton = window.paypal.Buttons.driver("react", {
  React,
  ReactDOM,
});

const Paypal = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <DivPay>
      <PayPalButton
        style={{
          layout: "vertical",
          color: "silver",
          shape: "rect",
          label: "paypal",
          height: 40,
        }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </DivPay>
  );
};

export default Paypal;
