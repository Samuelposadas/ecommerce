/* eslint-disable react/prop-types */
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Container, Image, Title, Price, Rating, StyledLink } from "./styled";

const Card = ({ img, name, salePrice, rating, id }) => {
  return (
    <StyledLink to={`/products/${id}`}>
      <Container>
        <Image src={img[0]} alt="image not found" />
        <Title>{name}</Title>
        <Price>${salePrice}</Price>
        <Rating>{Array(Math.round(rating)).fill(<StarIcon />, 0)}</Rating>
      </Container>
    </StyledLink>
  );
};

export default Card;
