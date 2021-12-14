import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: #b5b4b832;
  height: 100%;
  padding-bottom: 50px;
`;

export const Header = styled.h2`
  width: 350px;
  font-size: 35px;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  background-size: cover;
  height: auto;
  margin-top: 20px;
  width: 250px;
`;
export const Content = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  & input {
    border-radius: 10px;
    margin-top: 10px;
    height: 40px;
    width: 350px;
  }
  & p.danger {
    color: red;
    font-size: 15px;
    margin-top: 5px;
    width: 350px;
  }
  & input.danger {
    border: 2px solid red;
  }
`;
export const Select = styled.div`
  margin-top: 20px;
  & h3 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  & select {
    background-color: #060b26;
    color: aliceblue;
    cursor: pointer;
    height: 25px;
    width: 90px;
    border-radius: 7px;
    border: none;
  }
  & p.danger {
    color: red;
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 40px;
  background-color: #060b26;
  border-radius: 10px;
  font-size: 14px;
  padding: 20px;
  width: 350px;
  color: aliceblue;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #1a83ff;
  }
  &:disabled {
    background-color: grey;
  }
`;
