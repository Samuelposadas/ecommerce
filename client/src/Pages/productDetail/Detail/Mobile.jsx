import React from "react";

export const Mobile = ({ data }) => {
  return (
    <div>
      <h2>RAM: {data.ram} GB</h2>
      <h2>PROCESSOR: {data.processor}</h2>
      <h2>STORAGE: {data.storage} GB</h2>
      <h2>SCREEN SIZE: {`${data.sizeScreen}”`}</h2>
      <h2>OS: {data.opeSystem}</h2>
      <h2>DISPLAY RESOLUTION: {data.resolution}</h2>
      <h2>SCREEN TYPE: {data.typeScreen}</h2>
    </div>
  );
};
