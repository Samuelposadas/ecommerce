/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    async function token() {
      const token = await axios.post("http://localhost:3001/usuario/login", {
        email: input.email,
        password: input.password,
      });
      if (token.data.token) {
        window.localStorage.setItem(
          "Authorization",
          `Bearer ${token.data.token}`
        );

        const user = await axios.get("http://localhost:3001/usuario/profile", {
          headers: { Authorization: window.localStorage.Authorization },
        });
        console.log(user.data);
      } else {
        alert(token.data);
        setInput({ email: "", password: "" });
      }
    }
    token();
    navigate("/login");
  };
  const googleId = process.env.REACT_CLIENT_ID_GOOGLE;
  const responseGoogle = (response) => {
    console.log(response);
  };
  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={loginSubmit}>
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
          <button>Sign in</button>
        </div>
      </form>
      <div>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
      <div>
        <GoogleLogin
          clientId="636326131032-vokrr752kne36q5bd4qigdfetkcenof8.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
