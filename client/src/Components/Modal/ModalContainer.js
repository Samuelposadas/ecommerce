import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

function ModalContainer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>{"I'm a modal"}</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

export default ModalContainer;
