import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";
import { MdClose } from "react-icons/md";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { ButtonDetail } from "../../common/Btn/BtnStyled";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: end;
  align-content: center;
  z-index: 200;
`;

const ModalWrapper = styled.div`
  width: 390px;
  height: 650px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px;
  position: sticky;
  z-index: 50;
  border-radius: 1px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #141414;
  overflow: scroll;
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 50;
`;
const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 5px;
`;

const Title = styled.h2`
  margin-top: 18px;
  font-size: 25px;
  margin-left: 10px;
  color: black;
`;
const ItemWrapper = styled.div``;

const LineBreak = styled.hr`
  height: 1px;
  color: #f5eded50;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Checkout = styled.div`
  position: absolute;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
      precision: 100,
    },
    opacity: showModal ? 1 : 0,
    from: { transform: "translateX(0)" },
    to: { transform: showModal ? "translateX(0)" : "translateX(100%)" },
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const productsCart = useSelector((state) => state.cart.cart);

  return (
    <>
      {showModal ? (
        <>
          <GlobalStyle />
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
                <Title>Shopping Cart</Title>
                <ModalContent>
                  <Products>
                    {productsCart &&
                      productsCart.map((item) => (
                        <ItemWrapper key={item.id}>
                          <CartItem {...item} key={item.id} />
                          <LineBreak />
                        </ItemWrapper>
                      ))}
                  </Products>
                </ModalContent>
                <Checkout>
                  <Link to={"/shop"}>
                    <ButtonDetail width={"380px"}>Checkout</ButtonDetail>
                  </Link>
                </Checkout>
              </ModalWrapper>
            </animated.div>
          </Background>
        </>
      ) : null}
    </>
  );
};
