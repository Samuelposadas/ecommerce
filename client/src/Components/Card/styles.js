import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, e, e, 0.2);
  overflow: hidden;
  margin-top: 70px;
  z-index: -2;
  transition: all 600ms ease;
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
  & > img {
    align-self: center;
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 10px;
  color: black;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
  color: #d391ff;
  margin-left: 10px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
