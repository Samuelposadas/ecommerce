import styled from "styled-components";

export const CardsContainer = styled.div`
  grid-column: 2/7;
  display: grid;
  background-color: #b5b4b832;
  margin-top: 45px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 440px));
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ContainerDisplay = styled.div`
  display: grid;
  grid-template-columns: 180px 6fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    display: grid;

    grid-template-columns: 1fr;

    grid-template-rows: 40px 1fr;
  }
`;
