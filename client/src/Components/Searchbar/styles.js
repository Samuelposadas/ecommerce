import styled from "styled-components";

export const FormSt = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputStyled = styled.input`
  height: 34px;
  width: 390px;
  border-radius: 5px 0px 0px 5px;
  border: 6px #c53131e8;

  background-color: #e9e0e0ee;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #2b2929;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 38px;
  border-radius: 0px 5px 5px 0px;
  border: 6px #c53131e8;
  background-color: #147ce5cc;
  color: #e9e0e0ee;

  svg {
  }
`;
