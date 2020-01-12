import produce from 'immer';

const INITIAL_STATE = {
  tools: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tool/TOOLS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@tool/REQUEST_SUCCESS': {
        draft.loading = false;
        draft.tools = action.payload.data;
        break;
      }
      case '@tool/REQUEST_FAIL': {
        draft.loading = false;
        draft.tools = null;
        break;
      }
      default:
    }
  });
}
