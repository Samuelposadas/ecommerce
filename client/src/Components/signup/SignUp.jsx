import React from "react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

// style
import {
  Content,
  Container,
  FormLogin,
  LabelLogin,
  InputLogin,
  Welcome,
  ButtonLogin,
} from "../login/styleLogin";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const RegisterSubmit = (e) => {
    e.preventDefault();
    if (
      input.password.length < 1 ||
      input.username.length < 1 ||
      input.email.length < 1
    ) {
      return;
    }
    async function token() {
      const { data } = await axios.post(
        "http://localhost:3001/usuario/signup",
        {
          email: input.email,
          username: input.username,
          password: input.password,
        }
      );

      window.localStorage.setItem("Authorization", `Bearer ${data.token}`);
      setTimeout(() => {
        window.localStorage.removeItem("Authorization");
        alert("session expired");
      }, data.expiresIn * 1000);
      return navigate("/");
    }
    token();
  };

  return (
    <Container>
      <Welcome>Welcome!</Welcome>
      <Content>
        <FormLogin margin={"20px"} onSubmit={RegisterSubmit}>
          <div>
            <LabelLogin>Email: </LabelLogin>
            <InputLogin
              type="email"
              value={input.email}
              onChange={handleInput}
              name="email"
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <LabelLogin>Username: </LabelLogin>
            <InputLogin
              value={input.username}
              onChange={handleInput}
              type="text"
              name="username"
              placeholder="Enter your username..."
            />
          </div>
          <div>
            <LabelLogin>Password: </LabelLogin>
            <InputLogin
              value={input.password}
              onChange={handleInput}
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <div>
            <ButtonLogin>Sign up</ButtonLogin>
          </div>
        </FormLogin>
        <div></div>
      </Content>
    </Container>
  );
};

export default SignUp;
