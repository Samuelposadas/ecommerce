import React from "react";
export const renderCategories = (categories) => {
  return (
    <ul>
      {categories.map((category) => {
        return <li key={category.id}>{category.name}</li>;
      })}
    </ul>
  );
};
