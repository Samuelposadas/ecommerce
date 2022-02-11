import React from "react";
import styled from "styled-components";
import {
  MdMemory,
  MdScreenShare,
  MdStorage,
  MdFitScreen,
  MdDone,
  MdOutlineSmartScreen,
  MdGridView,
  MdOutlineSettings,
} from "react-icons/md";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  font-size: 15px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 65px;

    svg {
      font-size: 30px;
      margin-right: 10px;
    }

    p {
      margin-top: 10px;
    }
  }
`;

export const Computer = ({ data }) => {
  return (
    <Container>
      <div>
        <MdMemory></MdMemory>
        <p>RAM: {data.ram >= 300 ? `${data.ram} MB` : `${data.ram} GB`}</p>
      </div>
      <div>
        <MdOutlineSettings></MdOutlineSettings>
        <p>PROCESSOR: {data.processor}</p>
      </div>
      <div>
        <MdStorage></MdStorage>
        <p>
          STORAGE:
          {data.storage >= 1000
            ? ` ${Math.floor(data.storage / 1000)} TB`
            : ` ${data.storage} GB`}
        </p>
      </div>
      <div>
        <MdGridView></MdGridView>
        <p>OS: {data.opeSystem}</p>
      </div>
      {data.display === 1 ? (
        <>
          <div>
            <MdDone></MdDone>
            <p>INCLUDE MONITOR: YES</p>
          </div>
          <div>
            <MdFitScreen></MdFitScreen>
            <p>SCREEN SIZE: {`${data.sizeScreen}”`}</p>
          </div>
          <div>
            <MdOutlineSmartScreen></MdOutlineSmartScreen>
            <p>RESOLUTION: {data.resolution}</p>
          </div>
          <div>
            <MdScreenShare></MdScreenShare>
            <p>SCREEN TYPE: {data.typeScreen}</p>
          </div>
        </>
      ) : (
        <p>INCLUDE MONITOR: NO</p>
      )}
    </Container>
  );
};
