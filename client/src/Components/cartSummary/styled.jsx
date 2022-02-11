import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-bottom: 30px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 30px;
  color: black;
`;
export const Items = styled.div``;
export const Total = styled.div``;

export const LineBreak = styled.hr`
  width: 100%;
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const CleanCart = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
