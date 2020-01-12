export function requestTools() {
  return {
    type: '@tool/REQUEST_TOOLS',
  };
}

export function successTools(data) {
  return {
    type: '@tool/REQUEST_SUCCESS',
    payload: { data },
  };
}

export function failTools() {
  return {
    type: '@tool/REQUEST_FAIL',
  };
}

export function searchToolByTags(string) {
  return {
    type: '@tool/SEARCH_TOOL_BY_TAGS',
    string,
  };
}

export function searchToolByDesc(string) {
  return {
    type: '@tool/SEARCH_TOOL_BY_DESC',
    string,
  };
}

export function createTool(payload) {
  return {
    type: '@tool/CREATE_TOOL_REQUEST',
    payload,
  };
}
