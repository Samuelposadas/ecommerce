import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, saveName } from "../../redux/actions/actionProducts";
import {
  InputStyled,
  FormSt,
  LogoContainer,
  Container,
  Suggestion,
} from "./styled.jsx";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const products = useSelector((state) => state.products.allProductsNames);
  const dispatch = useDispatch();

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
    dispatch(getAllProducts(1, null, null, input));
    dispatch(saveName(input));
    setInput("");
    // eslint-disable-next-line react/prop-types
    props.reset();
  };

  const onSuggest = (name) => {
    dispatch(getAllProducts(1, null, null, name));
    dispatch(saveName(name));
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
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <Suggestion key={i} onClick={() => onSuggest(suggestion.name)}>
            {suggestion.name}
          </Suggestion>
        ))}
    </Container>
  );
};

export default Searchbar;
