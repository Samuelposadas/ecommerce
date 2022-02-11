import axios from "axios";
import { URL_BASE } from "../redux/constants";

export const placeOrder = async (products, adress, userId) => {
  let date = new Date();
  let hours;
  let minutes;
  if (date.getHours() < 10) {
    hours = "0" + date.getHours();
  } else {
    hours = date.getHours();
  }
  if (date.getMinutes() < 10) {
    minutes = "0" + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }
  let hour = hours + ":" + minutes;
  date = date.toLocaleDateString();
  try {
    const { data } = await axios.post(`${URL_BASE}/orders`, {
      date,
      products,
      adress,
      hour,
      userId,
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
