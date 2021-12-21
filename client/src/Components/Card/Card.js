/* eslint-disable react/prop-types */
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 330px;
  margin-top: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;
  z-index: -2;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #d8d8d8;
  }
`;

export const Image = styled.img`
  align-self: center;
  height: 190px;
  width: 240px;
  object-fit: contain;
  margin: 20px;
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 200;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
`;

export const Price = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #147ce5;
  margin-left: 20px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  color: #feb236;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
