import React from "react";
import { FC } from "react";
import { Container, Title, Price, Rating, StyledLink } from "./styles";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  img: string;
  title: string;
  price: number;
  rating: number;
}

const Card: FC<Props> = (props) => {
  return (
    <StyledLink to="/">
      <Container>
        <img src={props.img} alt="image not found" />
        <Title>{props.title}</Title>
        <Price>${props.price}</Price>
        <Rating>{Array(Math.round(props.rating)).fill(<StarIcon />, 0)}</Rating>
      </Container>
    </StyledLink>
  );
};

export default Card;
