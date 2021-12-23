import styled from "styled-components";

export const Container = styled.div`
  color: #e9e0e0ee;
  background-color: #0f1111;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 1000px);
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
`;

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: end;
  margin: 20px;
  width: 130px;
`;
export const CardTitle = styled.h1`
  font-size: 21px;
  margin-bottom: 10px;
`;
export const CardLink = styled.li`
  font-size: 14px;
  list-style-type: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s ease;
  :hover {
    padding-left: 15px;
    color: #e9e0e0ee;
  }
`;
