import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 55% 15%;
  grid-template-rows: 60px 1fr;

  p {
    grid-area: name;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  input {
    height: 20px;
    width: 40px;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    -moz-appearance: textfield;
  }
  svg {
    grid-area: delete;
    cursor: pointer;
    color: #636060e2;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    font-size: 18px;
    margin-left: 70px;
  }
  h3 {
    grid-area: price;
    justify-self: end;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  img {
    height: ${({ height }) => height || "95%"};
    width: ${({ width }) => width || "95%"};
    margin: 0px;
    object-fit: contain;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
