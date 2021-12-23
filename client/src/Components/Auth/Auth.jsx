import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "./styled.jsx";
import { AiOutlineUser } from "react-icons/ai";

const Auth = () => {
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Container>
      {isAuthenticated && (
        <Container>
          {/* <h3>{user.name}</h3> */}
          <img src={user.picture} />
        </Container>
      )}
      {isAuthenticated ? (
        <AiOutlineUser onClick={logout}></AiOutlineUser>
      ) : (
        <AiOutlineUser onClick={loginWithRedirect}></AiOutlineUser>
      )}
    </Container>
  );
};

export default Auth;
