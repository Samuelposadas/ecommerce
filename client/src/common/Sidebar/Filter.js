import React from "react";
import { FilterDiv, Title, ItemLi } from "./styled";

export const FilterComponents = ({ arr, funtionClick, name, title }) => {
  return (
    <>
      <FilterDiv>
        <Title>{title}</Title>
        <ul>
          {arr.map((element) => (
            <ItemLi
              id={element.id}
              title={name}
              value={element.name}
              onClick={funtionClick}
              key={element.id}
            >
              {element.name}
            </ItemLi>
          ))}
        </ul>
      </FilterDiv>
    </>
  );
};
