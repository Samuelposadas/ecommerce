import React from "react";

export const Notebook = ({ data }) => {
  return (
    <div>
      <h2>RAM: {data.ram} GB</h2>
      <h2>PROCESSOR: {data.processor}</h2>
      <h2>STORAGE: {data.storage}</h2>
      <h2>SCREEN SIZE: {`${data.sizeScreen}”`}</h2>
      <h2>OS: {data.opeSystem}</h2>
      <h2>RESOLUTION: {data.resolution}</h2>
      <h2>SCREEN TYPE: {data.typeScreen}</h2>
    </div>
  );
};
