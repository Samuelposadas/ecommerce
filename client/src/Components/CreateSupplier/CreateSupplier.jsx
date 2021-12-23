import React, { useEffect, useState } from "react";
import { StyledCreateSupplier } from "./styled.jsx";
import { validate } from "./validate.jsx";
import axios from "axios";
import { URL_BASE } from "../../redux/constants/index";

const CreateSupplier = () => {
  const [dataSupplier, setDataSupplier] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState({});
  const [apiResponse, setApiResponse] = useState("");

  const onChangeDataSupplier = (e) => {
    const dataForm = { ...dataSupplier, [e.target.name]: e.target.value };
    setDataSupplier(dataForm);
  };
  useEffect(() => {
    setError(validate(dataSupplier));
  }, [dataSupplier]);

  const onSubmitSupplier = async (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      const url = `${URL_BASE}/suppliers/add`;
      const body = dataSupplier;
      const result = await axios.post(url, body);
      setApiResponse(result.data);
      setDataSupplier({ name: "", phone: "", email: "" });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setApiResponse("");
    }, 3000);
  }, [apiResponse]);
  return (
    <StyledCreateSupplier>
      <form action="" onSubmit={onSubmitSupplier}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChangeDataSupplier}
          value={dataSupplier.name}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          pattern="[0-9]{3}"
          onChange={onChangeDataSupplier}
          value={dataSupplier.phone}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeDataSupplier}
          value={dataSupplier.email}
        />
        <button disabled={Object.keys(error).length}>Create</button>
        {apiResponse !== "" ? <div>{apiResponse}</div> : null}
      </form>
    </StyledCreateSupplier>
  );
};

export default CreateSupplier;
