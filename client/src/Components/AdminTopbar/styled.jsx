import styled from "styled-components";

export const StyledAdminTopbar = styled.div`
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: white;
  z-index: 2;
  .topbarWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px #555 dotted;
    .topLeft {
      .logo {
        cursor: pointer;
      }
    }
    .topRight {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .topbarIconContainer {
        margin-right: 10px;
        position: relative;
        cursor: pointer;
        .icon {
        }
        .topIconBadge {
          position: absolute;
          top: -5px;
          right: 0px;
          color: white;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: red;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;
