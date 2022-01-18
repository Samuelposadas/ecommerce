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
    async function getToken() {
      const { data } = await axios.post("http://localhost:3001/usuario/login", {
        email: input.email,
        password: input.password,
      });
      if (data.token) {
        console.log(data);
        window.localStorage.setItem("Authorization", `Bearer ${data.token}`);
        setTimeout(() => {
          window.localStorage.removeItem("Authorization");
          alert("session expired");
        }, data.expiresIn * 1000);
        navigate("/");
      } else {
        alert(token.data);
        setInput({ email: "", password: "" });
      }
    }
    getToken();
  };

  const responseGoogle = (response) => {
    const loginUser = async () => {
      const { data } = await axios.post(
        "http://localhost:3001/usuario/signup",
        {
          email: response.profileObj.email,
          username: response.profileObj.name,
          password: response.profileObj.googleId,
        }
      );
      console.log(data);
      window.localStorage.setItem("Authorization", `Bearer ${data.token}`);
      setTimeout(() => {
        window.localStorage.removeItem("Authorization");
        alert("session expired");
      }, data.expiresIn * 1000);
      return navigate("/");
    };
    loginUser();
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
