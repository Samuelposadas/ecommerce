import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #3355d3, #222266);
`;

export const Content = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #444, #666);
  border-radius: 5%;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 40px;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${({ margin }) => margin || "10px"};
    @media screen and (max-width: 768px) {
      flex-direction: column;
      & > label {
        margin: 10px;
      }
    }
  }
`;
export const LabelLogin = styled.label`
  color: #fff;
  font-size: 15px;
`;
export const InputLogin = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 200px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    width: 95vw;
    padding: 10px;
  }
`;
export const ButtonLogin = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  width: 100px;
  background-color: ${({ brclr }) => brclr || "#750045"};
  color: #fff;
  border-bottom: 2px solid #000;
  cursor: pointer;
  &:hover {
    background-color: ${({ brhover }) => brhover || "#750065"};
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;
export const GoogleSignIn = styled.div`
  & > button {
    color: #000;
    @media screen and (max-width: 768px) {
      width: 80vw;
      border: none;
      border-radius: 10px;
      border-bottom: 2px solid #000;
    }
  }
`;

export const Welcome = styled.h1`
  font-size: 70px;
  margin-bottom: 80px;
  color: #ddd;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
