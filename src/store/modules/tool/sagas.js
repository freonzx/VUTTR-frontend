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

function* SearchByDescRequest({ string }) {
  try {
    const { data } = yield call(api.get, `/tools?q=${string}`);

    if (data.length === 0) {
      toast.warn('Nada encontrado');
    }

    yield put(successTools(data));
  } catch {
    yield put(failTools());
    toast.error('Erro na API, tente novamente mais tarde');
  }
}

function* SearchByTagsRequest({ string }) {
  try {
    const { data } = yield call(api.get, `/tools?tag=${string}`);

    if (data.length === 0) {
      toast.warn('Nada encontrado');
    }

    yield put(successTools(data));
  } catch {
    yield put(failTools());
    toast.error('Erro na API, tente novamente mais tarde');
  }
}

export default all([
  takeLatest('@tool/REQUEST_TOOLS', ToolsRequest),
  takeLatest('@tool/SEARCH_TOOL_BY_DESC', SearchByDescRequest),
  takeLatest('@tool/SEARCH_TOOL_BY_TAGS', SearchByTagsRequest),
]);
