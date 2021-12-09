import React, { FC, useState } from "react";

const Searchbar: FC = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search.."
        onChange={handleInputChange}
      />
      <button type="submit" onSubmit={handleSubmit}>
        buscar
      </button>
    </div>
  );
};

export default Searchbar;
