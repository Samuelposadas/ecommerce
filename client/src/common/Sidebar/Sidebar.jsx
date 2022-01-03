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
import {
  getAllProducts,
  order,
  getProductByFilter,
} from "../../redux/actions/actionProducts";

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

  const [arrFilters, setArrFilters] = useState([]);
  const [openBarMobile, setOpenBarMobile] = useState(false);

  //agregando los filtros especificos
  const [subFilters, setSubFilters] = useState({
    ram: "false",
    storage: "false",
    opeSystem: "false",
    processor: "false",
    display: "false",
    typeScreen: "false",
    resolution: "false",
    sizeScreen: "false",
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
    setArrFilters([]);
  }, [category]);

  //funcion para crear boton de filtro y desaparecer el filtro clickeado

  const clickFilter = (e) => {
    setQueryFilters({
      ...queryFilters,
      [e.target.title]: e.target.id,
    });
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
    setQueryFilters({
      ...queryFilters,
      [element.target.title]: "false",
    });
    setSubFilters({
      ...subFilters,
      [element.target.title]: !subFilters[element.target.title],
    });
    setArrFilters(arrFilters.filter((e) => e.name !== element.target.value));
  };

  //objeto que se va despachar para filtrar

  const [queryFilters, setQueryFilters] = useState({
    ram: false,
    storage: false,
    opeSystem: false,
    processor: false,
    display: false,
    typeScreen: false,
    resolution: false,
    sizeScreen: false,
  });
  // useEffect para despachar los filtros

  useEffect(() => {
    dispatch(getProductByFilter({ ...queryFilters, category }));
  }, [queryFilters]);

  // useEffect cuando se filtra por monitor en la categoria computer se necesita renderizar filtros de monitores
  useEffect(() => {
    if (category === 1) {
      subFilters.display
        ? setSubFilters({
            ...subFilters,
            typeScreen: false,
            resolution: false,
            sizeScreen: false,
          })
        : setSubFilters({
            ...subFilters,
            typeScreen: true,
            resolution: true,
            sizeScreen: true,
          });
    }
  }, [subFilters.display]);

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

        {/*subCategorias de filtros */}

        {subFilters.ram ? (
          <FilterDiv>
            <Title>Ram</Title>
            <ul>
              {ramDate.map((element) => (
                <ItemLi
                  key={element.id}
                  id={element.id}
                  title="ram"
                  value={element.name}
                  onClick={clickFilter}
                >
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
                  id={element.id}
                  title="storage"
                  value={element.name}
                  onClick={clickFilter}
                  key={element.id}
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
                    .filter((e) => e.type === 1)
                    .map((element) => (
                      <ItemLi
                        id={element.id}
                        title="opeSystem"
                        value={element.name}
                        onClick={clickFilter}
                        key={element.id}
                      >
                        {element.name}
                      </ItemLi>
                    ))
                : opeSystemDate
                    .filter((e) => e.type === 2)
                    .map((element) => (
                      <ItemLi
                        id={element.id}
                        title="opeSystem"
                        value={element.name}
                        onClick={clickFilter}
                        key={element.id}
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
              {category === 1 || category === 6
                ? processorDate
                    .filter((e) => e.type === 1)
                    .map((element) => (
                      <ItemLi
                        id={element.id}
                        title="processor"
                        value={element.name}
                        onClick={clickFilter}
                        key={element.id}
                      >
                        {element.name}
                      </ItemLi>
                    ))
                : processorDate
                    .filter((e) => e.type === 2)
                    .map((element) => (
                      <ItemLi
                        id={element.id}
                        title="processor"
                        value={element.name}
                        onClick={clickFilter}
                        key={element.id}
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
                  id={element.id}
                  title="display"
                  value={element.id}
                  onClick={clickFilter}
                  key={element.id}
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
                  id={element.id}
                  title="typeScreen"
                  value={element.name}
                  onClick={clickFilter}
                  key={element.id}
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
                  id={element.id}
                  title="resolution"
                  value={element.name}
                  onClick={clickFilter}
                  key={element.id}
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
                  id={element.id}
                  title="sizeScreen"
                  value={element.name}
                  onClick={clickFilter}
                  key={element.id}
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

            <ButtonMobile></ButtonMobile>
            <DivMobile></DivMobile>
          </>
        ) : null}
      </ContainerFilterMobile>
    </Container>
  );
};
