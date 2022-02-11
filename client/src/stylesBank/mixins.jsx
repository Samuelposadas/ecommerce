import { css } from "styled-components";
import { blue } from "./Variables";

export const displayGrid = () => css`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 5px;
`;
export const basicStyle = () => css`
  padding: 8px;
  border-radius: 15px;
  border: none;
  outline: none;
`;
export const btnStyle = () => css`
  ${basicStyle()};
  background-color: ${blue};
  color: white;
`;
