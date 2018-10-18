import { LOAD_PROJECTS, REMOVE_PROJECT } from "../actionTypes";

export const projects = (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return [...action.projects];
    case REMOVE_PROJECT:
      return state.filter(proj => proj._id !== action.id);
    default:
      return state;
  }
};
