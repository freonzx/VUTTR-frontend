import { put, call, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { successTools, failTools } from './actions';

function* ToolsRequest() {
  try {
    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
  } catch {
    yield put(failTools());
    toast.error('Erro na API, tente novamente mais tarde');
  }
}

export default all([takeLatest('@tool/REQUEST_TOOLS', ToolsRequest)]);
