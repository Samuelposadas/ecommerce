import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: #0f1111;
`;
export const Banner = styled.div`
  height: 45px;
  background-color: #232f3e;
  color: #e9e0e0ee;
  font-size: 12px;
  font-weight: 500;
  display: grid;
  align-items: center;
  justify-items: center;
`;
export const Wrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: minmax(0px, auto) minmax(770px, auto) minmax(0px, auto);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Space = styled.div``;
export const Menu = styled.ul`
  font-size: 12.5px;
  font-weight: 610;
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(9, minmax(10px, auto));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  font-size: 25px;
  color: #e9e0e0ee;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;
export const MenuItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  width: max-content;
  padding: 20px 20px;
  text-decoration: ${(props) => (props.bd ? "underline solid" : "none")};
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: center;

    svg {
      fill: #e9e0e0ee;
      font-size: 26px;
      cursor: pointer;
    }
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    display: grid;
    grid-template-columns: auto auto 72% auto auto;
  }
`;

export const MobileDropdown = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    gap: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 28%);
    position: relative;
    z-index: 100;

    animation: ${({ open }) => (open ? "box 0.7s ease" : "null")};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes box {
      from {
        height: 0;
        top: -250%;
      }
      to {
        height: 226px;
        top: 0;
      }
    }

    @keyframes box1 {
      from {
        height: 226px;
        top: 0;
      }
      to {
        height: 0px;
        top: -250%;
      }
    }
  }
`;
export const MobileDropdownItem = styled.li`
  font-size: 15px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: #2b2929;
  color: #e9e0e0ee;
  list-style-type: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;