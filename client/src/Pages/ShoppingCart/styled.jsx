import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  color: black;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 880px;
  display: grid;
  grid-template-columns: 3fr 1.5fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  color: black;
`;
export const ItemWrapper = styled.div``;

export const LineBreak = styled.hr`
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Message = styled.div`
  margin-bottom: 60px;
`;
