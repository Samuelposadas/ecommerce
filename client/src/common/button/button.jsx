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
`;

export const ButtonDetail = styled.button`
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#0077ED"};
  color: ${({ color }) => color || "white"};
  width: ${({ width }) => width || "400px"};
  height: ${({ height }) => height || "40px"};
  margin-bottom: 10px;
  min-width: 150px;
  font-size: 16px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background-color: #1a85ffe4;
  }

  &:disabled {
    background-color: #1a85ff49;
    cursor: auto;
  }
`;
