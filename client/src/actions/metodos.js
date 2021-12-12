import axios from "axios";

export const reqGetAxios = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
export const actionGenerator = (type, payload) => {
  return { type, payload };
};
