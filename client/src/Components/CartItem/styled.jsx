import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 70% 10%;
  grid-template-rows: 60px 20%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 25% 60% 15%;
  }

  p {
    font-size: 15px;
    grid-area: name;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  input {
    height: 20px;
    width: 50px;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  svg {
    font-size: 20px;
    grid-area: delete;
    cursor: pointer;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 70px;
  }
  h3 {
    grid-area: price;
    font-size: 15px;
    justify-self: end;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  img {
    height: ${({ height }) => height || "100%"};
    width: ${({ width }) => width || "100%"};
    margin: 0;
    object-fit: contain;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
