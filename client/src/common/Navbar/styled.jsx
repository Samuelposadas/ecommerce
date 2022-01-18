import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: #0f1111;
`;
export const Banner = styled.div`
  height: 45px;
  background-color: #232f3e;
  color: #e9e0e0ee;
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
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(9, minmax(10px, auto));
  grid-template-rows: 50px 150px;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  color: #e9e0e0ee;
  justify-self: center;
  align-self: center;
  font-size: 22px;
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
    font-size: 25px;

    svg {
      fill: #e9e0e0ee;
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

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  z-index: 200;
  font-size: 10px;
  font-weight: bold;
  padding: 4px;
  height: 14px;
  color: #2b2929;
  background-color: #e9e0e0ee;
  top: 27px;
  margin-left: 9px;
`;
