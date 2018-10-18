import { combineReducers } from "redux";

import { currentUser } from "./currentUser";
import { projects } from "./projects";
import { errors } from "./errors";

const rootReducer = combineReducers({
  currentUser,
  projects,
  errors
});

export default rootReducer;
