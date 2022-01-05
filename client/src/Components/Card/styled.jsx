import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
    cursor: pointer;
  }
`;

export const Image = styled.img`
  align-self: center;
  height: 190px;
  width: 240px;
  object-fit: contain;
  padding: 20px;
`;

export const Title = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  color: black;
  font-size: 13px;
`;

export const Price = styled.p`
  color: #147ce5;
  font-size: 13px;
`;

export const OldPrice = styled.p`
  text-decoration: line-through;
  color: #535a61ac;
  font-size: 13.5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  bottom: 40px;
`;

export const LogoContainer = styled.div`
  color: #0f1111;
  margin-right: 10px;
  font-size: 21px;
  cursor: pointer;
`;
