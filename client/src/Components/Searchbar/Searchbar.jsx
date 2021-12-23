import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, saveName } from "../../redux/actions/actionProducts";
import { InputStyled, FormSt, LogoContainer } from "./styled.jsx";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
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

  return (
    <div>
      <FormSt>
        <InputStyled
          type="text"
          value={input}
          placeholder=" Search products, brands and more..."
          onChange={handleInputChange}
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
    </div>
  );
};

export default Searchbar;
