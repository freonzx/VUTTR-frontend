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

function* createToolRequest(action) {
  try {
    yield call(api.post, `/tools`, action.payload);

    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
    toast.info('Ferramenta adicionada');
  } catch {
    yield put(failTools());
    toast.error('Erro na API, tente novamente mais tarde');
  }
}

function* deleteToolRequest(action) {
  try {
    yield call(api.delete, `/tools/${action.payload}`);

    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
    toast.info('Ferramenta deletada');
  } catch {
    yield put(failTools());
    toast.error('Erro na API, tente novamente mais tarde');
  }
}

export default all([
  takeLatest('@tool/REQUEST_TOOLS', ToolsRequest),
  takeLatest('@tool/SEARCH_TOOL_BY_DESC', SearchByDescRequest),
  takeLatest('@tool/SEARCH_TOOL_BY_TAGS', SearchByTagsRequest),
  takeLatest('@tool/CREATE_TOOL_REQUEST', createToolRequest),
  takeLatest('@tool/DELETE_TOOL_REQUEST', deleteToolRequest),
]);
