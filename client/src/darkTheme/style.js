import styled from "styled-components";

export const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  backgroun-color: ${(props) => props.theme.fontColor};
  &:focus {
    outline: none;
  }
  transition: all 0.5s easy;
`;
