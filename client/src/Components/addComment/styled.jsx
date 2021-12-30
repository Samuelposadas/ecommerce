import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;

  input {
    width: 100%;
    height: 200px;

    &::placeholder {
    }
  }

  div {
    margin-top: 15px;
    svg {
      font-size: 25px;
    }
  }
`;

export const Star = styled.label`
  & .star {
    cursor: pointer;
    transition: color 200ms;
  }
  & .starDisable {
    color: lightgrey;
    cursor: pointer;
    transition: color 200ms;
  }
  & input[type="radio"] {
    display: none;
  }
`;
