import { all } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import toolSaga from './tool/sagas';

export default function* rootSaga() {
  return yield all([authSaga, toolSaga]);
}
