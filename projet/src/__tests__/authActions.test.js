import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../store/actions/auth";
import { SET_CURRENT_USER } from "../store/actionTypes";

describe("Auth Actions:", () => {
  const user = {
    email: "foo@bar.com",
    username: "foo",
    password: "pepe"
  };

  const expectedAction = {
    type: SET_CURRENT_USER,
    user
  };

  describe("setCurrentUser", () => {
    it("should create an action to set the current user", () => {
      expect(actions.setCurrentUser(user)).toEqual(expectedAction);
    });
  });
});
