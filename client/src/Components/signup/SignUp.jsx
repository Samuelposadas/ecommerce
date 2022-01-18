import React from "react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={RegisterSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={input.email}
            onChange={handleInput}
            name="email"
            placeholder="Enter your email..."
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            value={input.username}
            onChange={handleInput}
            type="text"
            name="username"
            placeholder="Enter your username..."
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            value={input.password}
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default SignUp;
