import React from "react";
import { CardStripe } from "./cardStripe";
import styled from "styled-components";

const REACT_APP_STRIPE = process.env.REACT_APP_STRIPE;
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(REACT_APP_STRIPE);

const ContentCard = styled.div`
  background-color: #3e3c3c;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TarjetStripe = styled.div`
  background-color: #bfbfbf;
  width: 300px;
  height: 300px;
`;

const ImgCard = styled.img`
  background: no-repeat
    url("https://pbs.twimg.com/media/ENs6Tv2XYAA7aS1?format=jpg&name=small");
  background-size: contain;
  width: 150px;
  height: 70px;
`;

export const Shopping = () => {
  return (
    <ContentCard>
      <Elements stripe={stripePromise}>
        <TarjetStripe>
          <ImgCard />
          <CardStripe />
        </TarjetStripe>
      </Elements>
    </ContentCard>
  );
};
