import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: white;
  height: 100%;
  padding-bottom: 50px;
`;

export const StyledForm = styled.form`
  background-size: cover;
  height: auto;
  margin-top: 20px;
  width: auto;
`;

export const Header = styled.h2`
  width: 350px;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  position: relative;

  :focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 14px 16px 0 10px;
  border: ${({ error }) => (error ? "1.5px solid red" : "1px solid #b9babbb8")};
  width: 100%;
  height: 53px;
  color: #242323d8;
  -moz-appearance: textfield;

  :focus-within {
    outline: 4px solid #0076ed6a;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #999;
  margin-left: 15px;
  pointer-events: none;
  position: absolute;
  transform: ${({ active }) =>
    active ? "translate(0, 12px) scale(0.75)" : "translate(0, 26px) scale(1)"};
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const Danger = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 8px;
  width: 350px;
`;

export const Select = styled.div`
  margin-top: 20px;
  & h3 {
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
  }
`;

export const StyledButton = styled.button`
  margin-top: 40px;
  background-color: #060b26;
  border-radius: 10px;
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

export const ShowCategories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  & button {
    /* border: none; */
    border-radius: 10px;
    margin-left: 5px;
  }
`;

export const InputImg = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;

  & input {
    border-radius: 10px;
    margin-top: 10px;
    height: 40px;
    width: 350px;
  }
  & p.danger {
    color: red;
    margin-top: 5px;
    width: 350px;
  }
  & input.danger {
    border: 2px solid red;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    height: 60px;
    width: 60px;
  }
`;
