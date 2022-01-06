import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-column: 2/7;
  background-color: #b5b4b832;
  margin-top: 45px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 320px));
  gap: 0.1rem;
  justify-content: center;
  align-content: start;
  justify-items: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ContainerDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    display: grid;

    grid-template-columns: 1fr;

    grid-template-rows: 51px 1fr;
  }
`;
export const NoProducts = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
