import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { cleanCart } from "../../redux/actions/actionCart";
import { placeOrder, provinces } from "../../utils/order";
// import Paypal from "../../Components/Paypal/Paypal";
// import { CardStripe } from "../Shopping/cardStripe";

function Order() {
  //hay que verificar que el user este logueado
  //   const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [input, setInput] = useState({
    adress: "",
    province: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (input) => {
    const errors = {};
    if (!input.adress) {
      errors.adress = "Adress is required";
    }
    if (input.province === "empty" || !input.province) {
      errors.province = "Select a province";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      adress: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        adress: e.target.value,
      })
    );
  };
  const handleClick = () => {
    if (productsCart.length === 0) return;
    let userId = 2; //id del user que hacela orden
    placeOrder(productsCart, input.adress, userId, input.province);
    // dispatch(cleanCart());
    return;
  };
  const handleSelect = (value) => {
    if (value !== "empty") {
      setInput({ ...input, province: value });
    }
    setErrors(validate({ ...input, province: value }));
  };
  return (
    <div>
      <p>Insert your adress</p>
      <input
        placeholder="adress"
        value={input.adress}
        onChange={handleChange}
      ></input>
      {errors.adress ? <p>{errors.adress}</p> : null}
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="empty">Select province</option>
        {provinces.map((province, i) => (
          <option value={province} key={i}>
            {province}
          </option>
        ))}
      </select>
      {errors.province ? <p>{errors.province}</p> : null}
      <button
        onClick={handleClick}
        disabled={
          errors.province || errors.adress || !input.adress || !input.province
        }
      >
        Place order
      </button>
      <p>Total: {totalPrice}</p>
      {/* <CardStripe></CardStripe> */}
      {/* <Paypal></Paypal>  */}
    </div>
  );
}

export default Order;
