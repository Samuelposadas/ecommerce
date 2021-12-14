import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineAppstore, AiOutlineShopping } from "react-icons/ai";
import { GoThreeBars, GoX } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryAll,
  getAllProducts,
  order,
  action_defaul_values,
} from "../../actions/index";
import Searchbar from "../../Components/Searchbar/Searchbar";

const SelectStyled = styled.select`
  background-color: #2b2929;
  color: #e9e0e0ee;
  border: none;
  font-size: 10px;
`;

const OptionStyled = styled.option`
  &:hover {
    background-color: #2b2929;
  }
`;

/* const Categories = [
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
]; */

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
  grid-template-columns: minmax(0px, auto) minmax(800px, auto) minmax(
      30px,
      auto
    );

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Space = styled.div``;
const Menu = styled.ul`
  font-size: 10px;
  font-weight: 610;
  color: #e9e0e0ee;
  display: grid;
  grid-template-columns: repeat(14, minmax(10px, auto));
  grid-gap: 1rem;
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
  width: max-content;
  padding: 20px 20px;
  background: ${(props) =>
    props.bd ? "linear-gradient( to bottom, #000 , #555555)" : "none"};
  padding: ${(props) => (props.mb ? "20px 20px" : null)};
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
    gap: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 28%);
    margin-left: -40.7px;
    margin-top: 0px;
    position: relative;
    -o-transition-property: all;
    transition-duration: 10s;
    transition-timing-function: linear;
    transition-delay: 10s;
    z-index: 1;

    animation: ${({ open }) => (open ? "box 1.2s ease" : "box1 1.2s ease")};
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

const LabelStyled = styled.label`
  color: #e9e0e0ee;
  font-size: 10px;
  margin-right: -15px;
`;

const Navbar = () => {
  const categories = useSelector((state) => state.allCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAll());
  }, []);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const categoryChange = (categoryId) => {
    dispatch(getCategory(categoryId));
    dispatch(getAllProducts(1, categoryId));
  };
  const idCategory = useSelector((state) => state.category);
  const nameProduct = useSelector((state) => state.nameProduct);
  const [valueOrder, setValueOrder] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValueOrder(e.target.value);
  };
  useEffect(() => {
    dispatch(getAllProducts(1, idCategory, valueOrder, nameProduct));
    dispatch(order(valueOrder));
  }, [valueOrder]);

  /*   const onSearch = () => {
    dispatch(getProductByName(document.getElementById("idSearch").value));
  }; */

  const [style, setStyle] = useState("");

  const resetValues = () => {
    setStyle("");
  };

  return (
    <Container>
      <MobileWrapper>
        <MobileIconOne onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <GoX /> : <GoThreeBars />}
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
            {/*            <input type="text" placeholder="Search" id="idSearch" />
            <AiOutlineSearch onClick={onSearch} /> */}
            <Searchbar reset={resetValues} />
          </LogoContainer>
          <LogoContainer>
            <AiOutlineShopping />
          </LogoContainer>
          <LabelStyled>Order by:</LabelStyled>
          <SelectStyled onChange={handleChange}>
            <OptionStyled value={"ASC"}>Lower price</OptionStyled>
            <OptionStyled value={"DESC"}>Higher price</OptionStyled>
          </SelectStyled>
        </Menu>
        <Space />
      </Wrapper>
      <Banner>
        Shop early for the best selection of holiday favorites. Shop now.
      </Banner>
      {showMobileMenu ? (
        <MobileDropdown open={showMobileMenu}>
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
