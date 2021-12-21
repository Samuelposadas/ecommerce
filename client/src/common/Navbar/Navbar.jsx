import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineAppstore, AiOutlineShopping } from "react-icons/ai";
import { GoThreeBars, GoX } from "react-icons/go";
import {
  getCategory,
  getCategoryAll,
  getAllProducts,
  action_defaul_values,
} from "../../redux/actions/actionProducts";

//components
import Searchbar from "../../Components/Searchbar/Searchbar";

import { Modal } from "../../Components/Modal/Modal";

import Auth from "../../Components/Auth/Auth";

// const SelectStyled = styled.select`
//   background-color: #2b2929;
//   color: #e9e0e0ee;
//   border: none;
//   font-size: 10px;
// `;

// const OptionStyled = styled.option`
//   &:hover {
//     background-color: #2b2929;
//   }
// `;

const Container = styled.div`
  height: 50px;
  background-color: #0f1111;
`;
const Banner = styled.div`
  height: 45px;
  /* background-color: #147ce5cc; */
  background-color: #232f3e;
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
  grid-template-columns: minmax(0px, auto) minmax(770px, auto) minmax(0px, auto);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Space = styled.div``;
const Menu = styled.ul`
  font-size: 12.5px;
  font-weight: 610;
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(9, minmax(10px, auto));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;
const LogoContainer = styled.div`
  font-size: 25px;
  color: #e9e0e0ee;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;
const MenuItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  width: max-content;
  padding: 20px 20px;
  text-decoration: ${(props) => (props.bd ? "underline solid" : "none")};
`;

/* const MobileIconOne = styled.div`
  display: none;
`; */
// const MobileIconOne = styled.div`
//   display: none;

// `;

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
    grid-template-columns: auto auto 72% auto auto;
  }
`;

const MobileDropdown = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    gap: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 28%);
    position: relative;
    z-index: 100;

    animation: ${({ open }) => (open ? "box 0.7s ease" : "box1 0.7s ease")};
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
const MobileDropdownItem = styled.li`
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
// const LabelStyled = styled.label`
//   color: #e9e0e0ee;
//   font-size: 10px;
//   margin-right: -15px;
// `;

const Navbar = () => {
  const categories = useSelector((state) => state.products.allCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAll());
  }, []);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const categoryChange = (categoryId) => {
    dispatch(getCategory(categoryId));
    dispatch(getAllProducts(1, categoryId));
  };

  const [style, setStyle] = useState("");

  const resetValues = () => {
    setStyle("");
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <MobileWrapper>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <GoX /> : <GoThreeBars />}
        </MobileIcon>
        <MobileIcon>
          <AiOutlineAppstore />
        </MobileIcon>
        <Space />
        <MobileIcon>
          <Auth />
        </MobileIcon>
        <MobileIcon>
          <AiOutlineShopping onClick={openModal} />
        </MobileIcon>
      </MobileWrapper>
      <Wrapper>
        <Space />
        <Menu>
          <LogoContainer>
            <AiOutlineAppstore
              onClick={() => {
                resetValues();
                dispatch(action_defaul_values());
              }}
            />
          </LogoContainer>
          {categories.map((category) => (
            <MenuItem
              bd={style === category.id ? true : false}
              mb={style === category.id ? true : false}
              onClick={() => {
                categoryChange(category.id);
                setStyle(category.id);
              }}
              key={category.id}
            >
              {category.name}
            </MenuItem>
          ))}
          <LogoContainer>
            <Auth />
          </LogoContainer>

          <LogoContainer>
            <AiOutlineShopping onClick={openModal} />
          </LogoContainer>
        </Menu>
        <Space />
      </Wrapper>
      <Banner>
        <LogoContainer>
          <Searchbar reset={resetValues} />
        </LogoContainer>
      </Banner>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {showMobileMenu ? (
        <MobileDropdown open={showMobileMenu}>
          <Space />
          {categories.map((category) => (
            <MobileDropdownItem
              onClick={() => categoryChange(category.id)}
              key={category.id}
            >
              {category.name}
            </MobileDropdownItem>
          ))}
        </MobileDropdown>
      ) : (
        <Space />
      )}
    </Container>
  );
};

export default Navbar;
