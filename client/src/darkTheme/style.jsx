import styled from "styled-components";

export const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.fontColor};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  &:focus {
    outline: none;
  }
  transition: all 0.5s easy;
`;
