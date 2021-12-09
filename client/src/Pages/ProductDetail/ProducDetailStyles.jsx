import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "product product info";
`;

export const Product = styled.div`
  grid-area: product;
  margin-top: 20px;
  margin-left: 30px;

  & img {
    width: 50%;
    height: auto;
    margin-bottom: 50px;
    margin-left: 150px;
  }

  & h3 {
    margin-top: 30px;
    font-size: 30px;
  }

  & p {
    font-size: 22px;
    word-wrap: break-word;
  }

  & .comment {
    border: 1px solid grey;
    border-radius: 20px;
    padding: 15px;
    margin-top: 10px;
    word-wrap: break-word;
  }
`;

export const Info = styled.div`
  grid-area: info;
  & .name {
    font-size: 40px;
  }
  & .rating {
    font-size: 40px;
  }
  & .price {
    font-size: 40px;
  }
`;
