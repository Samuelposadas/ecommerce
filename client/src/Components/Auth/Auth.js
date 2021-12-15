import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "./style";

const Auth = () => {
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Container>
      {isAuthenticated ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}

      {isAuthenticated && (
        <Container>
          <h3>{user.name}</h3>
          <img style={{ width: "40px", height: "40px" }} src={user.picture} />
        </Container>
      )}
    </Container>
  );
};

export default Auth;
