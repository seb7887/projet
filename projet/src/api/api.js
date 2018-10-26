import axios from "axios";

export const setTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const apiCall = (method, url, data) => {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](url, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
};