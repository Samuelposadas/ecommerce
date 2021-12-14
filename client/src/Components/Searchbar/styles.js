import styled from "styled-components";

export const InputStyled = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 30px;
  border: 1px solid black;
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
