import styled from "styled-components";

export const StyledAdminProducts = styled.div`
  flex: 4;
  .productsWrapper {
    .product {
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
      .productName {
      }
    }
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
