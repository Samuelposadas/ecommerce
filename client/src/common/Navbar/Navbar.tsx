import React, { FC } from "react";
import styled from "styled-components";
import {
  AiOutlineAppstore,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Categories: Array<string> = [
  "Shop All",
  "Computers",
  "Tablet",
  "Drones & Cameras",
  "Audio",
  "Mobile",
  "T.V & Home",
  "Cinema",
  "Wearable Tech",
  "Sale",
];

const Container = styled.div`
  height: 50px;
  background-color: #2b2929;
`;
const Banner = styled.div`
  height: 45px;
  background-color: #c53131e8;
  color: #e9e0e0ee;
  font-size: 12px;
  font-weight: 500;
  display: grid;
  align-items: center;
  justify-items: center;
`;
const Wrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: auto minmax(800px, auto) auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Space = styled.div``;
const Menu = styled.ul`
  font-size: 10px;
  font-weight: 500;
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(14, auto);
  grid-gap: 0.9rem;
  justify-items: center;
  align-items: center;
`;
const LogoContainer = styled.div`
  font-size: 20px;
  color: #e9e0e0ee;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;
const MenuItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
const MobileIconOne = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    svg {
      fill: #e9e0e0ee;
      font-size: 26px;
    }
  }
`;
const MobileIcon = styled.div`
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

const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    display: grid;
    grid-template-columns: auto 85% auto;
  }
`;

const MobileDropdown = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    gap: 0.1rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 28%);
    margin-left: -40.7px;
    margin-top: 0px;
  }
`;
const MobileDropdownItem = styled.li`
  background-color: #2b2929;
  color: #e9e0e0ee;
  list-style-type: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar: FC = () => {
  return (
    <Container>
      <MobileWrapper>
        <MobileIconOne>
          <GoThreeBars />
        </MobileIconOne>
        <MobileIcon>
          <AiOutlineAppstore />
        </MobileIcon>
        <MobileIcon>
          <AiOutlineShopping />
        </MobileIcon>
      </MobileWrapper>
      <Wrapper>
        <Space />
        <Menu>
          <LogoContainer>
            <AiOutlineAppstore />
          </LogoContainer>
          {Categories.map((item, id) => (
            <MenuItem key={id}>{item}</MenuItem>
          ))}
          <LogoContainer>
            <AiOutlineSearch />
          </LogoContainer>
          <LogoContainer>
            <AiOutlineShopping />
          </LogoContainer>
        </Menu>
        <Space />
      </Wrapper>
      <Banner>
        Shop early for the best selection of holiday favorites. Shop now.
      </Banner>
      <MobileDropdown>
        {Categories.map((item, id) => (
          <MobileDropdownItem key={id}>{item}</MobileDropdownItem>
        ))}
      </MobileDropdown>
    </Container>
  );
};

export default Navbar;
