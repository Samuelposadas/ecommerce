import styled from "styled-components";

export const InputStyled = styled.input`
  height: 23px;
  width: 380px;
  border-radius: 5px;
  border: 6px #c53131e8;
  margin-right: 10px;
  background: #ddd;
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

export const FormSt = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
