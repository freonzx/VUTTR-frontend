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
