import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { ButtonDetail } from "../../common/button/button.jsx";
import { Link } from "react-router-dom";
import {
  GlobalStyle,
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  ItemWrapper,
  LineBreak,
  Message,
  LineBreakTop,
} from "./styled";

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
                <LineBreakTop />
                <ModalContent>
                  {productsCart.length > 0 ? (
                    productsCart.map((item) => (
                      <ItemWrapper key={item.id}>
                        <CartItem {...item} key={item.id} />
                        <LineBreak />
                      </ItemWrapper>
                    ))
                  ) : (
                    <Message>
                      Your shopping cart is empty. Go to home page to add
                      products.
                    </Message>
                  )}
                  <Link to={"/shop"}>
                    <ButtonDetail
                      width={"365px"}
                      disabled={!productsCart.length}
                    >
                      Checkout
                    </ButtonDetail>
                  </Link>
                </ModalContent>
              </ModalWrapper>
            </animated.div>
          </Background>
        </>
      ) : null}
    </>
  );
};
