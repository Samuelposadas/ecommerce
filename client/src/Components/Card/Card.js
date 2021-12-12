/* eslint-disable react/prop-types */
import React from "react";

import { Container, Title, Price, Rating, StyledLink } from "./styles";
import StarIcon from "@mui/icons-material/Star";

const Card = ({ img, name, salePrice, rating, discount }) => {
  return (
    <StyledLink to="/">
      <Container>
        <img src={img[0]} alt="image not found" />
        <Title>{name}</Title>
        <Price>${salePrice}</Price>
        <p>{discount}</p>
        <Rating>{Array(Math.round(rating)).fill(<StarIcon />, 0)}</Rating>
      </Container>
    </StyledLink>
  );
};

export default Card;
