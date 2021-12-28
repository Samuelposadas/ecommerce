import styled from "styled-components";

export const StyledAdminSidebar = styled.div`
  flex: 1;
  height: calc(100vh - 120px);
  position: sticky;
  top: 120px;
  background-color: #ccc;
  border-radius: 10px;
  .sidebarWrapper {
    padding: 15px;
    .sidebarMenu {
      margin-bottom: 10px;
      .sidebarTitle {
        color: #666;
      }
      .sidebarList {
        padding: 10px;
        a {
          color: black;
        }
        .sidebarListItem {
          display: flex;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          border-radius: 10px;
          &:hover {
            background-color: #aaa;
          }
          .active {
            background-color: #aaa;
          }
          .sidebarIcon {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
