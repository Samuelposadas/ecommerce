import styled from "styled-components";

export const StyledItem = styled.tr`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
  color: #555;
  border-radius: 10px;
  border-bottom: 1px lightgray dotted;
  &:hover {
    background-color: lightgrey;
  }
  .itemColumn {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
