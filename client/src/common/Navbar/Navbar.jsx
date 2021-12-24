import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineAppstore, AiOutlineShopping } from "react-icons/ai";
import { GoThreeBars, GoX } from "react-icons/go";
import {
  getCategory,
  getCategoryAll,
  getAllProducts,
  action_defaul_values,
} from "../../redux/actions/actionProducts";

import {
  Container,
  Banner,
  Wrapper,
  Space,
  Menu,
  LogoContainer,
  MenuItem,
  MobileIcon,
  MobileWrapper,
  MobileDropdown,
  MobileDropdownItem,
} from "./styled";

//components
import Searchbar from "../../Components/Searchbar/Searchbar.jsx";
import { Modal } from "../../Components/Modal/Modal.jsx";
import Auth from "../../Components/Auth/Auth.jsx";

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
          <AiOutlineAppstore
            onClick={() => {
              resetValues();
              dispatch(action_defaul_values());
            }}
          />
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
