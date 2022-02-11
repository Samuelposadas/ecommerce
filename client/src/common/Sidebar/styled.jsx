import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin-top: 45px;
  background-color: #b5b4b832;
  width: auto;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const ContainerFilter = styled.div`
  grid-column: 1/2;
  display: ${({ boolean }) => (boolean ? "none" : "flex")};
  flex-direction: column;
  flex-wrap: nowrap;
  grid-row: 1/2;
  justify-content: center;
  background-color: none;
  margin-top: 45px;
  justify-content: center;
  align-self: flex-end;
  width: 200px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-flex-end;
  margin-left: 30px;
  margin-bottom: 40px;
`;

export const ItemLi = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #999999;
  &:hover {
    color: #0066fc;
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  margin-bottom: 5px;
`;

export const Category = styled.div`
  margin-left: 30px;
`;

export const LabelStyled = styled.label`
  margin-right: -15px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 5px;
    margin-bottom: 0px;
  }
`;

export const SelectStyled = styled.select`
  background-color: transparent;
  color: #999999;
  border: none;
  cursor: pointer;
`;

export const OptionStyled = styled.option`
  background-color: #43464f;
  color: #999999;
  &:hover {
    color: black;
  }
`;
export const Space = styled.div`
  margin: 10px;
`;

export const ButtonFilter = styled.button`
  width: max-content;
  background-color: #2b2929;
  color: #dddddd;
  border-radius: 5px;
  border: none;
  margin: 10px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`;
