import { combineReducers } from 'redux';

import auth from './auth/reducer';
import tool from './tool/reducer';

export default combineReducers({
  auth,
  tool,
});
