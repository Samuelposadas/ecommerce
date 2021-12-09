import React, { FC } from "react";
import { iPropsCard } from "../../types/propsCard";

import { Container, Title, Price, Rating, StyledLink } from "./styles";
import StarIcon from "@mui/icons-material/Star";

const Card: FC<iPropsCard> = ({ image, name, price, rating }) => {
  return (
    <StyledLink to="/">
      <Container>
        <img src={image} alt="image not found" />
        <Title>{name}</Title>
        <Price>${price}</Price>
        <Rating>{Array(Math.round(rating)).fill(<StarIcon />, 0)}</Rating>
      </Container>
    </StyledLink>
  );
};

export default Card;
