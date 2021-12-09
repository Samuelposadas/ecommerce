import React, { FC, useState } from "react";
import { InputStyled, ButtonStyled } from "./styles";

const Searchbar: FC = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
