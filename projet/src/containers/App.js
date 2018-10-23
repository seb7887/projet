import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { configStore } from "../store";
import { setAuthToken, setCurrentUser } from "../store/actions/auth";

import Main from "./Main";

const store = configStore();

const baseURL = process.env.REACT_APP_ENV === 'production' ? 'projet' : '';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router basename={baseURL}>
      <Main />
    </Router>
  </Provider>
);

export default App;
