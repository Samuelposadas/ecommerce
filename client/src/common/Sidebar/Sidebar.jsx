/* eslint-disable */
import React, { useState, useEffect } from "react";
import { FilterComponents } from "./Filter";
import { BiFilter } from "react-icons/bi";
import {
  ContainerFilter,
  Container,
  FilterDiv,
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
  getProductByFilter,
  get_accesories,
  action_products_controllers,
} from "../../redux/actions/actionProducts";

export const SideBarFilters = () => {
  const nameProduct = useSelector((state) => state.products.nameProduct);

  const [orderAndType, setOrderAndType] = useState({
    order: "ASC",
    typeOrder: "rating",
  });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "null") return;
    //setValueOrder(e.target.value);
    if (e.target.value == 1)
      setOrderAndType({ order: "ASC", typeOrder: "salePrice" });
    if (e.target.value == 2)
      setOrderAndType({ order: "DESC", typeOrder: "salePrice" });
    if (e.target.value == 3)
      setOrderAndType({ order: "DESC", typeOrder: "rating" });
    if (e.target.value == 4)
      setOrderAndType({ order: "ASC", typeOrder: "rating" });
    console.log(e);
  };
  const dispatch = useDispatch();

  const [arrFilters, setArrFilters] = useState([]);
  const [openBarMobile, setOpenBarMobile] = useState(false);

  //Ordenamiento por rating o precio ambos ascen o descen

  /* useEffect(() => {
    dispatch(getProductByFilter({ ...orderAndType, ...queryFilters }));
  }, [orderAndType]); */

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
  const category = useSelector(
    (state) => state.products.productsControllers.category
  );

  // useEffect para traer los accesorios
  useEffect(() => {
    dispatch(get_accesories());
  }, []);
  const accessories = useSelector((state) => state.products.accessories);

  // useEffect para mostrar los filtros segun la categoria,
  useEffect(() => {
    if (category === false) {
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
          accessories: false,
        };
      });
      console.log("hola mundo");
      setQueryFilters({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        category,
        nameProduct: "",
        page: 1,
      });

      setArrFilters([]);
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
      setQueryFilters({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        category,
        nameProduct: "",
        page: 1,
      });
      setArrFilters([]);
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
      setQueryFilters({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        category,
        nameProduct: "",
        page: 1,
      });
      setArrFilters([]);
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
      setQueryFilters({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        category,
        nameProduct: "",
        page: 1,
      });
      setArrFilters([]);
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
          accessories: true,
        };
      });
      setQueryFilters({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        category,
        nameProduct: "",
        page: 1,
      });
      setArrFilters([]);
    }
    /* setQueryFilters({ ...queryFilters, category });
    setArrFilters([]); */
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
    accessories: false,
    category: "",
    nameProduct: "",
    page: 1,
  });
  // useEffect para despachar los filtros

  useEffect(() => {
    dispatch(action_products_controllers({ ...queryFilters }));
    dispatch(getProductByFilter({ ...queryFilters, ...orderAndType }));
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

  //traigo el obj controller product para poder usarlo
  const product_controller = useSelector(
    (state) => state.products.productsControllers
  );
  //useEffect para poder usar order en otros componentes
  useEffect(() => {
    dispatch(action_products_controllers({ ...orderAndType }));
    dispatch(getProductByFilter({ ...product_controller, ...orderAndType }));
  }, [orderAndType]);

  return (
    <Container>
      <ContainerFilter>
        <FilterDiv>
          <LabelStyled>Order by:</LabelStyled>
          <SelectStyled onChange={handleChange}>
            <OptionStyled value={"null"}>Select..</OptionStyled>
            <OptionStyled title="salePrice" value={1}>
              Lower price
            </OptionStyled>
            <OptionStyled title="salePrice" value={2}>
              Higher price
            </OptionStyled>
            <OptionStyled title="rating" value={3}>
              Most relevant
            </OptionStyled>
            <OptionStyled title="rating" value={4}>
              Less relevant
            </OptionStyled>
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
          <FilterComponents
            arr={ramDate}
            funtionClick={clickFilter}
            name="ram"
            title="Ram"
          />
        ) : null}
        {subFilters.storage ? (
          <FilterComponents
            arr={storageDate}
            funtionClick={clickFilter}
            name="storage"
            title="Storage"
          />
        ) : null}
        {subFilters.opeSystem ? (
          category === 1 || category === 6 ? (
            <FilterComponents
              arr={opeSystemDate.filter((e) => e.type === 1)}
              funtionClick={clickFilter}
              name="opeSystem"
              title="Operating System"
            />
          ) : (
            <FilterComponents
              arr={opeSystemDate.filter((e) => e.type === 1)}
              funtionClick={clickFilter}
              name="opeSystem"
              title="Operating System"
            />
          )
        ) : null}
        {subFilters.processor ? (
          category === 1 || category === 6 ? (
            <FilterComponents
              arr={processorDate.filter((e) => e.type === 1)}
              funtionClick={clickFilter}
              name="processor"
              title="Processor"
            />
          ) : (
            <FilterComponents
              arr={processorDate.filter((e) => e.type === 2)}
              funtionClick={clickFilter}
              name="processor"
              title="Processor"
            />
          )
        ) : null}
        {subFilters.display ? (
          <FilterComponents
            arr={displayDate}
            funtionClick={clickFilter}
            name="display"
            title="Display"
          />
        ) : null}
        {subFilters.typeScreen ? (
          <FilterComponents
            arr={typeScreenDate}
            funtionClick={clickFilter}
            name="typeScreen"
            title="Type Screen"
          />
        ) : null}
        {subFilters.resolution ? (
          <FilterComponents
            arr={resolutionDate}
            funtionClick={clickFilter}
            name="resolution"
            title="Resolution"
          />
        ) : null}
        {subFilters.sizeScreen ? (
          <FilterComponents
            arr={sizeScreenDate}
            funtionClick={clickFilter}
            name="sizeScreen"
            title="Size Screen"
          />
        ) : null}
        {subFilters.accessories && category === 4 ? (
          <FilterComponents
            arr={accessories}
            funtionClick={clickFilter}
            name="accessories"
            title="Accessories type"
          />
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
