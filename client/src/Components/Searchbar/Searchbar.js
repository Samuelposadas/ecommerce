import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../actions";
import { InputStyled, ButtonStyled } from "./styles";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductByName(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          value={input}
          placeholder="Search.."
          onChange={handleInputChange}
        />
        <ButtonStyled> Search </ButtonStyled>
      </form>
    </div>
  );
};

export default Searchbar;
