import React from "react";

export const TV = ({ data }) => {
  return (
    <div>
      <h2>SIZE SCREEN: {`${data.sizeScreen}”`}</h2>
      <h2>RESOLUTION: {data.resolution}</h2>
      <h2>SCREEN TYPE: {data.typeScreen}</h2>
    </div>
  );
};
