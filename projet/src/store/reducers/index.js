import { combineReducers } from 'redux';

import { currentUser } from './currentUser';
import { projects } from './projects';

const rootReducer = combineReducers({
  currentUser,
  projects,
});

export default rootReducer;
