import { SET_CURRENT_USER } from "../store/actionTypes";
import * as reducer from "../store/reducers/currentUser";

describe("Auth Reducer:", () => {
  describe("currentUser", () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };

    const user = {
      email: "foo@bar.com",
      username: "pepe",
      password: "lepu"
    };

    it("should return the initial state", () => {
      expect(reducer.currentUser(undefined, {})).toEqual(initialState);
    });

    it("should handle SET_CURRENT_USER", () => {
      expect(
        reducer.currentUser(initialState, {
          type: SET_CURRENT_USER,
          user: user
        })
      ).toEqual({
        isAuthenticated: true,
        user: user
      });
    });
  });
});
