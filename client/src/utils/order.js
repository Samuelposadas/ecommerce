import axios from "axios";
import { URL_BASE } from "../redux/constants";

export const placeOrder = async (products, adress, userId, province) => {
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
      province,
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export const provinces = [
  "Buenos Aires",
  "Capital Federal",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];
