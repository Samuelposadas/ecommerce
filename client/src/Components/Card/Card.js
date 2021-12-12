/* eslint-disable react/prop-types */
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 480px;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;
  margin: 20px;
  z-index: -2;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #d8d8d8;
  }
`;

export const Image = styled.img`
  align-self: center;
  height: 250px;
  width: 300px;
  object-fit: contain;
  margin: 20px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 20px;
  color: black;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  color: #d391ff;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = ({ img, name, salePrice, rating }) => {
  return (
    <StyledLink to="/">
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
