import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, saveName } from "../../actions";
import { InputStyled, FormSt } from "./styles";
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
          placeholder="Search.."
          onChange={handleInputChange}
        />
        <AiOutlineSearch onClick={handleSubmit} />
        {/* <ButtonStyled> Search </ButtonStyled> */}
      </FormSt>
    </div>
  );
};

export default Searchbar;
