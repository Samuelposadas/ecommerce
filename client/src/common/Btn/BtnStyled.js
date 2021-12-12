import styled from "styled-components";
//styledComponent reciclado de otro proyecto,tiene estilos independientes.
export const Btn = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || "#202020"};
  color: ${({ color }) => color || "white"};
  width: 100px;
  padding: 8px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 5px 1px black;
  font-weight: bold;
`;

export const ButtonDetail = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || "#202020"};
  color: ${({ color }) => color || "white"};
  width: 300px;
  height: 40px;
  font-size: 17px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;
