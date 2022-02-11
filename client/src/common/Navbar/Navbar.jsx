import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineAppstore, AiOutlineShopping } from "react-icons/ai";
import { GoThreeBars, GoX } from "react-icons/go";
import {
  getCategoryAll,
  getProductByFilter,
  action_products_controllers,
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
  CartQuantity,
} from "./styled";

//components
import Searchbar from "../../Components/Searchbar/Searchbar.jsx";
import { Modal } from "../../Components/Modal/Modal.jsx";
import Auth from "../../Components/Auth/Auth.jsx";

const Navbar = () => {
  const productObj = useSelector((state) => state.products.productsControllers);
  const dispatch = useDispatch();

  //reset categories y trae todos los productos
  const resetProductController = () => {
    dispatch(
      action_products_controllers({
        category: false,
        nameProduct: "",
        page: 1,
        accessories: false,
      })
    );
    setCategory(false);
  };

  const categories = useSelector((state) => state.products.allCategories);

  useEffect(() => {
    dispatch(getCategoryAll());
  }, []);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [category, setCategory] = useState("");

  const categoryChange = (id) => {
    setCategory(id);
  };
  useEffect(() => {
    dispatch(
      action_products_controllers({
        category,
      })
    );
  }, [category]);

  useEffect(() => {
    dispatch(getProductByFilter({ ...productObj, category }));
  }, [category]);

  const [style, setStyle] = useState("");

  const resetValues = () => {
    setStyle("");
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <Container>
      <MobileWrapper>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <GoX /> : <GoThreeBars />}
        </MobileIcon>
        <MobileIcon>
          <AiOutlineAppstore
            onClick={(e) => {
              resetProductController(e);
            }}
          />
        </MobileIcon>
        <Space />
        <MobileIcon>
          <Auth />
        </MobileIcon>
        <MobileIcon>
          <AiOutlineShopping onClick={openModal} />
          {productsCart.length > 0 ? (
            <CartQuantity onClick={openModal}>
              {productsCart.length}
            </CartQuantity>
          ) : null}
        </MobileIcon>
      </MobileWrapper>
      <Wrapper>
        <Space />
        <Menu>
          <LogoContainer>
            <AiOutlineAppstore
              onClick={(e) => {
                resetValues();
                resetProductController(e);
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
            {productsCart.length > 0 ? (
              <CartQuantity onClick={openModal}>
                {productsCart.length}
              </CartQuantity>
            ) : null}
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
