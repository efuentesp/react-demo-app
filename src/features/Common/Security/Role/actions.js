import axios from 'axios';

export const FETCH_ROLE_LIST = 'FETCH_ROLE_LIST';
export const FETCH_ROLE = 'FETCH_ROLE';
export const CREATE_ROLE = 'CREATE_ROLE';
export const EDIT_ROLE = 'EDIT_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';

const ROOT_URL = 'http://localhost:3003';

export function fetchRoleList(term) {
  let url = `${ROOT_URL}/roles`;
  if (term) {
    url = `${url}?q=${term}`;
  }
  const request = axios.get(url);

  return {
    type: FETCH_ROLE_LIST,
    payload: request
  };
}

export function fetchRole(id) {
  const url = `${ROOT_URL}/roles/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_ROLE,
    payload: request
  };
}

export function createRole(props) {
  const url = `${ROOT_URL}/roles`;
  const request = axios.post(url, props);

  return {
    type: CREATE_ROLE,
    payload: request
  };
}

export function updateRole(id, props) {
  const url = `${ROOT_URL}/roles/${id}`;
  const request = axios.put(url, props);

  return {
    type: EDIT_ROLE,
    payload: request
  };
}

export function deleteRole(id) {
  const url = `${ROOT_URL}/roles/${id}`;
  const request = axios.delete(url);

  return {
    type: DELETE_ROLE,
    payload: request
  };
}
