import { SET_CURRENT_USER } from "../actionTypes";
import { apiCall, setTokenHeader } from "../../api/api";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const setAuthToken = token => {
  setTokenHeader(token);
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
};

export const authUser = (type, userData) => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall("post", `http://localhost:8081/api/auth/${type}`, userData)
      .then(({ token, ...user }) => {
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch(setCurrentUser(user));
        resolve();
      })
      .catch(err => {
        reject();
      });
  });
};
