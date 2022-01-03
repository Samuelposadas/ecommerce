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

import {
  ramDate,
  storageDate,
  opeSystemDate,
  displayDate,
  typeScreenDate,
  resolutionDate,
  processorDate,
  sizeScreenDate,
} from "./utils";

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
    if (category === "") {
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
    if (category === 1) {
      setSubFilters((e) => {
        return {
          ...e,
          ram: true,
          storage: true,
          opeSystem: true,
          processor: true,
          display: true,
          typeScreen: false,
          resolution: false,
          sizeScreen: false,
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
          processor: category === 2 ? false : true,
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

  //funcion para crear boton de filtro y desaparecer el filtro clickeado

  const clickFilter = (e) => {
    setArrFilters((filters) => [
      ...filters,
      { name: e.target.innerText, type: e.target.title },
    ]);
    setSubFilters({
      ...subFilters,
      [e.target.title]: !subFilters[e.target.title],
    });
  };

  //funcion para quitar el filtro

  const removeFilter = (element) => {
    setSubFilters({
      ...subFilters,
      [element.target.title]: !subFilters[element.target.title],
    });
    setArrFilters(arrFilters.filter((e) => e.name !== element.target.value));
  };

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
        </FilterDiv>
        <Space />
        {arrFilters.length ? <Category>Filters</Category> : null}
        <Space />
        <ButtonContainer>
          {arrFilters.length
            ? arrFilters.map((element) => (
                <ButtonFilter
                  title={element.type}
                  key={element.name}
                  onClick={removeFilter}
                  value={element.name}
                >
                  {element.name}
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
                <ItemLi title="ram" value={element.name} onClick={clickFilter}>
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.storage ? (
          <FilterDiv>
            <Title>Storage</Title>
            <ul>
              {storageDate.map((element) => (
                <ItemLi
                  title="storage"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.opeSystem ? (
          <FilterDiv>
            <Title>Operator System</Title>
            <ul>
              {category === 1 || category === 6
                ? opeSystemDate
                    .filter((e) => e.id === 1)
                    .map((element) => (
                      <ItemLi
                        title="opeSystem"
                        value={element.name}
                        onClick={clickFilter}
                      >
                        {element.name}
                      </ItemLi>
                    ))
                : opeSystemDate
                    .filter((e) => e.id === 2)
                    .map((element) => (
                      <ItemLi
                        title="opeSystem"
                        value={element.name}
                        onClick={clickFilter}
                      >
                        {element.name}
                      </ItemLi>
                    ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.processor ? (
          <FilterDiv>
            <Title>Processor</Title>
            <ul>
              {processorDate.map((element) => (
                <ItemLi
                  title="processor"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.display ? (
          <FilterDiv>
            <Title>Display</Title>
            <ul>
              {displayDate.map((element) => (
                <ItemLi
                  title="display"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.typeScreen ? (
          <FilterDiv>
            <Title>Type Screen</Title>
            <ul>
              {typeScreenDate.map((element) => (
                <ItemLi
                  title="typeScreen"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.resolution ? (
          <FilterDiv>
            <Title>Resolution</Title>
            <ul>
              {resolutionDate.map((element) => (
                <ItemLi
                  title="resolution"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
        {subFilters.sizeScreen ? (
          <FilterDiv>
            <Title>Size Screen</Title>
            <ul>
              {sizeScreenDate.map((element) => (
                <ItemLi
                  title="sizeScreen"
                  value={element.name}
                  onClick={clickFilter}
                >
                  {element.name}
                </ItemLi>
              ))}
            </ul>
          </FilterDiv>
        ) : null}
      </ContainerFilter>
      {/* Responsive */}
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
