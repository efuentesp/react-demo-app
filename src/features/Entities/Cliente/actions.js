import axios from 'axios';

export const FETCH_CLIENTE_LIST = 'FETCH_CLIENTE_LIST';
export const FETCH_CLIENTE = 'FETCH_CLIENTE';
export const CREATE_CLIENTE = 'CREATE_CLIENTE';
export const EDIT_CLIENTE = 'EDIT_CLIENTE';
export const DELETE_CLIENTE = 'DELETE_CLIENTE';

const ROOT_URL = 'http://localhost:3003';

export function fetchClienteList(term) {
  let url = `${ROOT_URL}/cliente`;
  if (term) {
    url = `${url}?q=${term}`;
  }
  const request = axios.get(url);

  return {
    type: FETCH_CLIENTE_LIST,
    payload: request
  };
}

export function fetchCliente(id) {
  const url = `${ROOT_URL}/cliente/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_CLIENTE,
    payload: request
  };
}

export function createCliente(props) {
  const url = `${ROOT_URL}/cliente`;
  const request = axios.post(url, props);

  return {
    type: CREATE_CLIENTE,
    payload: request
  };
}

export function updateCliente(id, props) {
  const url = `${ROOT_URL}/cliente/${id}`;
  const request = axios.put(url, props);

  return {
    type: EDIT_CLIENTE,
    payload: request
  };
}

export function deleteCliente(id) {
  const url = `${ROOT_URL}/cliente/${id}`;
  const request = axios.delete(url);

  return {
    type: DELETE_CLIENTE,
    payload: request
  };
}
