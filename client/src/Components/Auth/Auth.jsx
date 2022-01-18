import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styled.jsx";
import { AiOutlineUser } from "react-icons/ai";

const Auth = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("Authorization");
  const login = () => {
    if (!token) {
      navigate("/login");
    }
  };
  const [navUser, setNavUser] = useState(false);
  return (
    <>
      {token ? (
        <>
          <AiOutlineUser onClick={() => setNavUser((prev) => !prev)} />
        </>
      ) : (
        <AiOutlineUser onClick={() => login()} />
      )}
      {navUser ? (
        <Container>
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button>Shopping</button>
          <button
            onClick={() => {
              window.localStorage.removeItem("Authorization");
              setNavUser((prev) => !prev);
              navigate("/");
            }}
          >
            Logout
          </button>
        </Container>
      ) : null}
    </>
  );
};

export default Auth;
