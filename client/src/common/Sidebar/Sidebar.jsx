/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BiFilter } from "react-icons/bi";
import {
  ContainerFilter,
  Container,
  FilterDiv,
  ItemLi,
  Title,
  OptionStyled,
  SelectStyled,
  LabelStyled,
  Space,
  ButtonFilter,
  Category,
  ButtonContainer,
} from "./styled";

import {
  ContainerFilterMobile,
  DivMobile,
  OrderFilter,
  IconContainer,
  ButtonMobile,
  ClearButton,
} from "./styledMobile";

//import array con datos de los filtros;

import { ramDate, storageDate } from "./utils";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, order } from "../../redux/actions/actionProducts";

export const SideBarFilters = () => {
  const idCategory = useSelector((state) => state.products.category);
  const nameProduct = useSelector((state) => state.products.nameProduct);
  const [valueOrder, setValueOrder] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "null") return;
    setValueOrder(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(1, idCategory, valueOrder, nameProduct));
    dispatch(order(valueOrder));
  }, [valueOrder]);

  const [filter, setFilter] = useState({ discount: true, brand: true });
  const [arrFilters, setArrFilters] = useState([]);
  const [openBarMobile, setOpenBarMobile] = useState(false);

  //agregando los filtros especificos
  const [subFilters, setSubFilters] = useState({
    ram: false,
    storage: false,
    opeSystem: false,
    processor: false,
    display: false,
    typeScreen: false,
    resolution: false,
    sizeScreen: false,
  });

  //trayendo la categoria en donde el usuario esta parado.
  const category = useSelector((state) => state.products.category);

  // useEffect para mostrar los filtros segun la categoria,
  useEffect(() => {
    if (category === 1) {
      setSubFilters((e) => {
        return {
          ...e,
          ram: true,
          storage: true,
          opeSystem: true,
          processor: true,
          display: true,
          typeScreen: true,
          resolution: true,
          sizeScreen: true,
        };
      });
    }
    if (category === 2 || category === 5 || category === 6) {
      setSubFilters((e) => {
        return {
          ...e,
          ram: true,
          storage: true,
          opeSystem: true,
          processor: true,
          display: false,
          typeScreen: true,
          resolution: true,
          sizeScreen: true,
        };
      });
    }
    if (category === 4) {
      setSubFilters((e) => {
        return {
          ...e,
          ram: false,
          storage: false,
          opeSystem: false,
          processor: false,
          display: false,
          typeScreen: false,
          resolution: false,
          sizeScreen: false,
        };
      });
    }
    if (category === 3) {
      setSubFilters((e) => {
        return {
          ...e,
          ram: false,
          storage: false,
          opeSystem: false,
          processor: false,
          display: false,
          typeScreen: true,
          resolution: true,
          sizeScreen: true,
        };
      });
    }
  }, [category]);

  return (
    <Container>
      <ContainerFilter>
        <FilterDiv>
          <LabelStyled>Order by:</LabelStyled>
          <SelectStyled onChange={handleChange}>
            <OptionStyled value={"null"}>Select..</OptionStyled>
            <OptionStyled value={"ASC"}>Lower price</OptionStyled>
            <OptionStyled value={"DESC"}>Higher price</OptionStyled>
          </SelectStyled>
          <Space />
          <Space />
        </FilterDiv>
        <Space />
        {arrFilters.length ? <Category>Filters</Category> : null}
        <Space />
        <ButtonContainer>
          {arrFilters.length
            ? arrFilters.map((element) => (
                <ButtonFilter
                  key={element}
                  onClick={() => {
                    element === "Lenovo"
                      ? setFilter({ ...filter, brand: !filter.brand })
                      : setFilter({ ...filter, discount: !filter.discount });
                    setArrFilters(arrFilters.filter((e) => e !== element));
                  }}
                >
                  {element} x
                </ButtonFilter>
              ))
            : null}
        </ButtonContainer>
        <Space />
        <Space />
        {filter.brand ? (
          <FilterDiv>
            <Title>Brands</Title>
            <ul>
              <ItemLi
                onClick={() => {
                  setFilter({ ...filter, brand: !filter.brand });
                  setArrFilters([...arrFilters, "Lenovo"]);
                }}
              >
                Lenovo
              </ItemLi>
              <ItemLi>Asus</ItemLi>
              <ItemLi>HP</ItemLi>
              <ItemLi>Sony</ItemLi>
            </ul>
          </FilterDiv>
        ) : null}

        {filter.discount ? (
          <FilterDiv>
            <Title>Discount</Title>
            <ul>
              <ItemLi
                onClick={() => {
                  setFilter({ ...filter, discount: !filter.discount });
                  setArrFilters([...arrFilters, "10% OFF"]);
                }}
              >
                10% OFF
              </ItemLi>
              <ItemLi>20% OFF</ItemLi>
              <ItemLi>30% OFF</ItemLi>
              <ItemLi>40% OFF</ItemLi>
            </ul>
          </FilterDiv>
        ) : null}

        {/*subCategorias de filtros */}

        {subFilters.ram ? (
          <FilterDiv>
            <Title>Ram</Title>
            <ul>
              {ramDate.map((element) => (
                <ItemLi>{element.name}</ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
      </ContainerFilter>
      <ContainerFilterMobile open={openBarMobile}>
        <IconContainer>
          <BiFilter onClick={() => setOpenBarMobile(!openBarMobile)} />
        </IconContainer>
        {openBarMobile ? (
          <>
            <OrderFilter>
              <div>
                <LabelStyled>Order by:</LabelStyled>
                <SelectStyled onChange={handleChange}>
                  <OptionStyled value={"null"}>Select..</OptionStyled>
                  <OptionStyled value={"ASC"}>Lower price</OptionStyled>
                  <OptionStyled value={"DESC"}>Higher price</OptionStyled>
                </SelectStyled>
              </div>

              <ClearButton
                onClick={() => {
                  setArrFilters([]);
                  setFilter({ brand: true, discount: true });
                }}
              >
                Clean filters
              </ClearButton>
            </OrderFilter>

            <ButtonMobile>
              {arrFilters.length
                ? arrFilters.map((element) => (
                    <ButtonFilter
                      key={element}
                      onClick={() => {
                        element === "Lenovo"
                          ? setFilter({ ...filter, brand: !filter.brand })
                          : setFilter({
                              ...filter,
                              discount: !filter.discount,
                            });
                        setArrFilters(arrFilters.filter((e) => e !== element));
                      }}
                    >
                      {element} x
                    </ButtonFilter>
                  ))
                : null}
            </ButtonMobile>
            <DivMobile>
              <div>
                {filter.discount ? (
                  <FilterDiv>
                    <Title>Discount</Title>
                    <ul>
                      <ItemLi
                        onClick={() => {
                          setFilter({ ...filter, discount: !filter.discount });
                          setArrFilters([...arrFilters, "10% OFF"]);
                        }}
                      >
                        10% OFF
                      </ItemLi>
                      <ItemLi>20% OFF</ItemLi>
                      <ItemLi>30% OFF</ItemLi>
                      <ItemLi>40% OFF</ItemLi>
                    </ul>
                  </FilterDiv>
                ) : null}
              </div>
              <div>
                {filter.brand ? (
                  <FilterDiv>
                    <Title>Brands</Title>
                    <ul>
                      <ItemLi
                        onClick={() => {
                          setFilter({ ...filter, brand: !filter.brand });
                          setArrFilters([...arrFilters, "Lenovo"]);
                        }}
                      >
                        Lenovo
                      </ItemLi>
                      <ItemLi>Asus</ItemLi>
                      <ItemLi>HP</ItemLi>
                      <ItemLi>Sony</ItemLi>
                    </ul>
                  </FilterDiv>
                ) : null}
              </div>
            </DivMobile>
          </>
        ) : null}
      </ContainerFilterMobile>
    </Container>
  );
};
