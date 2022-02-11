import styled, { createGlobalStyle } from "styled-components";
import { MdClose } from "react-icons/md";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: end;
  align-content: center;
  z-index: 200;
`;

export const ModalWrapper = styled.div`
  width: 390px;
  height: 650px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px;
  position: sticky;
  z-index: 50;
  border-radius: 1px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: #141414;
  overflow: scroll;
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 75px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 50;
`;

export const Title = styled.h2`
  margin-top: 10px;
  color: black;
  align-self: center;
  justify-self: center;
`;
export const ItemWrapper = styled.div``;

export const LineBreak = styled.hr`
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const LineBreakTop = styled.hr`
  height: 1px;
  color: #f5eded50;
`;

export const Message = styled.div`
  margin-left: 10px;
`;
