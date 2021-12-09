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
const Wrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: auto auto auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Space = styled.div``;
const Menu = styled.ul`
  font-size: 10px;
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(16, auto);
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
const MobileIcon = styled.div`
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

const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    display: grid;
    grid-template-columns: auto 85% auto;
  }
`;

const Navbar: FC = () => {
  return (
    <Container>
      <MobileWrapper>
        <MobileIcon>
          <GoThreeBars />
        </MobileIcon>
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
    </Container>
  );
};

export default Navbar;
