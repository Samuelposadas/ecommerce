import styled from "styled-components";

export const Container = styled.div`
  color: #e9e0e0ee;
  background-color: #0f1111;
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
  margin-bottom: 10px;
`;
export const CardLink = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s ease;
  :hover {
    padding-left: 15px;
    color: #e9e0e0ee;
  }
`;
