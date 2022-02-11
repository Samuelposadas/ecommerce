import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { cleanCart } from "../../redux/actions/actionCart";
import { placeOrder } from "../../utils/order";
// import Paypal from "../../Components/Paypal/Paypal";
// import { CardStripe } from "../Shopping/cardStripe";

function Order() {
  //hay que verificar que el user este logueado
  //   const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [adress, setAdress] = useState("");
  const handleChange = (e) => {
    setAdress(e.target.value);
    console.log(adress);
  };
  const handleClick = () => {
    if (productsCart.length === 0) return;
    let userId = 2; //id del user que hacela orden
    placeOrder(productsCart, adress, userId);
    // dispatch(cleanCart());
    return;
  };
  return (
    <div>
      <p>Insert your adress</p>
      <input
        placeholder="adress"
        value={adress}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Place order</button>
      <p>Total: {totalPrice}</p>
      {/* <CardStripe></CardStripe> */}
      {/* <Paypal></Paypal>  */}
    </div>
  );
}

export default Order;
