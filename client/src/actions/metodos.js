import axios from "axios";

export const reqGetAxios = (url) => axios.get(url).data;
export const actionGenerator = (type, payload) => {
  return { type, payload };
};
