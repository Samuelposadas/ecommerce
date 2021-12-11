import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../actions";
import { InputStyled, ButtonStyled } from "./styles";

const Searchbar: FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
