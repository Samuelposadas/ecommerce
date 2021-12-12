import axios from "axios";
module.exports = {
  reqGetAxios: function (url) {
    return axios.get(url).data;
  },
  actionGenerator: function (type, payload) {
    return { type, payload };
  },
};
