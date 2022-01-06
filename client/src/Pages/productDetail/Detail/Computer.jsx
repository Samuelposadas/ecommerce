import React from "react";

export const Computer = ({ data }) => {
  return (
    <div>
      <h1>RAM: {data.ram >= 300 ? `${data.ram} MB` : `${data.ram} GB`}</h1>
      <h2>PROCESSOR: {data.processor}</h2>
      <h2>
        STORAGE:
        {data.storage >= 1000
          ? ` ${Math.floor(data.storage / 1000)} TB`
          : ` ${data.storage} GB`}
      </h2>
      <h2>OS: {data.opeSystem}</h2>
      {data.display === 1 ? (
        <>
          <h2>INCLUDE MONITOR: YES</h2>
          <h2>SCREEN SIZE: {`${data.sizeScreen}”`}</h2>
          <h2>RESOLUTION: {data.resolution}</h2>
          <h2>SCREEN TYPE: {data.typeScreen}</h2>
        </>
      ) : (
        <h2>INCLUDE MONITOR: NO</h2>
      )}
    </div>
  );
};
