import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../redux/constants";
const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(`${URL_BASE}/usuario/profile`, {
          headers: { authorization: window.localStorage["Authorization"] },
        });
        console.log(data);
        setUser(data);
      } catch (error) {
        alert(error);
      }
    };
    getProfile();
  }, []);
  return (
    <>
      {user ? (
        <>
          <div>
            <h1>USER : {user.username}</h1>
            <h1>EMAIL : {user.email}</h1>
          </div>
          <div>
            <button>Edit</button>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Profile;
