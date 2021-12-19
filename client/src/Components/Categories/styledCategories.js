import styled from "styled-components";

export const StyledCategories = styled.section`
  background-color: aliceblue;
  ul {
    li {
      .deleteCategory {
        padding: 0 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
