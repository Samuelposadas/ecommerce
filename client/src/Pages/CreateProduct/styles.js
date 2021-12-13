import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: aliceblue;
  height: 100vh;
`;

export const StyledForm = styled.form`
  background-size: cover;
  height: auto;
  align-items: center;
  margin-top: 20px;
  width: 300px;
`;
export const Content = styled.div`
  height: 70px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  & input {
    border-radius: 10px;
    height: 30px;
  }
  & p.danger {
    color: red;
    font-size: 15px;
  }
  & input.danger {
    border: 2px solid red;
  }
`;
export const Select = styled.div`
  margin-left: 10px;
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
    border-radius: 10px;
    border: none;
  }
  & p.danger {
    color: red;
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #060b26;
  border-radius: 10px;
  height: 20px;
  width: 80px;
  font-size: 14px;
  color: aliceblue;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #1a83ff;
  }
`;
