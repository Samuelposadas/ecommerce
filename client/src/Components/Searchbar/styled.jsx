import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SuggestionsWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.3px solid #9898c4a7;
  border-radius: 0px 0px 15px 15px;
  z-index: 2;
`;

export const Suggestion = styled.div`
  display: flex;
  align-content: center;
  background-color: white;
  color: black;
  z-index: 2;
  font-size: 12px;
  height: 40px;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 5px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    color: #1a85ffe4;
    background-color: #c5c5f311;
  }
`;

export const FormSt = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputStyled = styled.input`
  height: 34px;
  width: 390px;
  border-radius: 4px 0px 0px 4px;
  border: 6px #c53131e8;
  z-index: 100;

  background-color: white;
  &:focus {
    outline: none;
  }
  &:active {
    border: yellow;
    border-width: 4px;
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
  border-radius: 0px 4px 4px 0px;
  border: 6px #c53131e8;
  background-color: #147ce5cc;
  color: #0f1111;
  z-index: 100;

  svg {
  }
`;
