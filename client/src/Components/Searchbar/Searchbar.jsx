import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  action_products_controllers,
  getProductByFilter,
} from "../../redux/actions/actionProducts";
import {
  InputStyled,
  FormSt,
  LogoContainer,
  Container,
  Suggestion,
  SuggestionsWrapper,
} from "./styled.jsx";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const products = useSelector((state) => state.products.allProductsNames);
  const dispatch = useDispatch();

  //me traigo el obj controllers products para despachar el producto con el nombre buscado
  const products_controllers = useSelector(
    (state) => state.products.productsControllers
  );

  const handleInputChange = (e) => {
    let matches = [];
    if (e.target.value.length > 0) {
      matches = products.filter((product) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return product.name.match(regex);
      });
    }
    if (matches.length > 5) {
      setSuggestions(matches.slice(0, 6));
    } else {
      setSuggestions(matches);
    }
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    dispatch(
      getProductByFilter({
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
        order: "ASC",
        typeOrder: "salePrice",
        page: 1,
        nameProduct: input,
      })
    );
    dispatch(
      action_products_controllers({
        ram: false,
        storage: false,
        opeSystem: false,
        processor: false,
        display: false,
        typeScreen: false,
        resolution: false,
        sizeScreen: false,
        accessories: false,
        order: "ASC",
        typeOrder: "salePrice",
        page: 1,
        nameProduct: input,
        category: "",
      })
    );
    setInput("");
    // eslint-disable-next-line react/prop-types
    props.reset();
  };

  const onSuggest = () => {
    dispatch(
      getProductByFilter({ ...products_controllers, nameProduct: name })
    );
    dispatch(
      action_products_controllers({
        ...products_controllers,
        nameProduct: name,
      })
    );

    setSuggestions([]);
    setInput("");
  };
  return (
    <Container>
      <FormSt>
        <InputStyled
          type="text"
          value={input}
          placeholder=" Search products, brands and more..."
          onChange={handleInputChange}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <LogoContainer>
          <AiOutlineSearch onClick={handleSubmit} />
        </LogoContainer>
      </FormSt>
      <SuggestionsWrapper>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <Suggestion key={i} onClick={() => onSuggest(suggestion.name)}>
              {suggestion.name}
            </Suggestion>
          ))}
      </SuggestionsWrapper>
    </Container>
  );
};

export default Searchbar;
