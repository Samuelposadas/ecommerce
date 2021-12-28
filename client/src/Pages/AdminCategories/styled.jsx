import styled from "styled-components";

export const StyledAdminCategories = styled.div`
  flex: 4;
  .categoriesWrapper {
    display: flex;
    flex-wrap: wrap;
    .actionsColumn {
      display: flex;
      justify-content: center;
      .editItem {
        border: none;
        border-radius: 5px;
        background-color: lightgreen;
        color: green;
        padding: 5px 10px;
        margin-right: 5px;
        cursor: pointer;
      }
      .deleteItem {
        color: red;
        cursor: pointer;
      }
    }
  }
`;
