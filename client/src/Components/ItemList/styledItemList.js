import styled from "styled-components";

export const StyledItemList = styled.table`
  width: 100%;
  padding: 15px;
  border: 1px lightgray dotted;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  tr {
    padding: 10px;
  }
  .header {
    width: 100%;

    .row {
      display: flex;
      align-items: center;
      border-radius: 10px;
      h3 {
        color: #555;
        flex: 3;
      }

      button {
        border: none;
        background-color: lightgreen;
        color: green;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
      }

      .itemColumnHeader {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: lightgrey;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }

  .body {
    width: 100%;
  }
`;
