import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #b5b4b832;

  @media screen and (max-width: 900px) {
    background-color: white;
  }
`;
export const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 20px;
  width: 100%;
  max-width: 950px;

  background-color: white;
  border-radius: 20px;

  display: grid;
  gap: 2rem;
  grid-template-columns: 55% 45%;
  grid-template-rows: repeat(auto, 4);
  grid-template-areas:
    "image info"
    "image info"
    "description description"
    "rating rating";

  @media screen and (max-width: 900px) {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0;
    border-radius: 0%;
    width: 98%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto, 4);
    grid-template-areas:
      "image"
      "info"
      "description"
      "rating";
  }
`;

export const ProductImage = styled.div`
  grid-area: image;
  display: flex;
  align-content: center;
  justify-content: center;

  img {
    object-fit: contain;
    width: 420px;
    height: 370px;
  }
`;
export const ProductInfo = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  margin-right: 15px;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #feb236;
  }

  div {
    font-size: 25px;
    margin-bottom: 30px;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 25px;

    img {
      width: 65px;
      height: 65px;
    }
  }
`;
export const ProductDescription = styled.div`
  grid-area: description;
  font-size: 15px;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const ProductRating = styled.div`
  grid-area: rating;
  font-size: 15px;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 15px;
    svg {
      color: #feb236;
    }
  }
`;
