import axios from 'axios';

export const FETCH_ORDEN_LIST_REQUEST = 'FETCH_ORDEN_LIST_REQUEST';
export const FETCH_ORDEN_LIST_SUCCESS = 'FETCH_ORDEN_LIST_SUCCESS';
export const FETCH_ORDEN_LIST_FAILURE = 'FETCH_ORDEN_LIST_FAILURE';
export const FETCH_ORDEN_REQUEST = 'FETCH_ORDEN_REQUEST';
export const FETCH_ORDEN_SUCCESS = 'FETCH_ORDEN_SUCCESS';
export const FETCH_ORDEN_FAILURE = 'FETCH_ORDEN_FAILURE';
export const CREATE_ORDEN_REQUEST = 'CREATE_ORDEN_REQUEST';
export const CREATE_ORDEN_SUCCESS = 'CREATE_ORDEN_SUCCESS';
export const CREATE_ORDEN_FAILURE = 'CREATE_ORDEN_FAILURE';
export const UPDATE_ORDEN_REQUEST = 'UPDATE_ORDEN_REQUEST';
export const UPDATE_ORDEN_SUCCESS = 'UPDATE_ORDEN_SUCCESS';
export const UPDATE_ORDEN_FAILURE = 'UPDATE_ORDEN_FAILURE';
export const DELETE_ORDEN_REQUEST = 'DELETE_ORDEN_REQUEST';
export const DELETE_ORDEN_SUCCESS = 'DELETE_ORDEN_SUCCESS';
export const DELETE_ORDEN_FAILURE = 'DELETE_ORDEN_FAILURE';

const ROOT_URL = 'http://localhost:3003';

/**
 ** Fetch Orden List actions
 **/

export function fetchOrdenListRequest() {
  return { type: FETCH_ORDEN_LIST_REQUEST };
}

export function fetchOrdenListSuccess(payload) {
  return { type: FETCH_ORDEN_LIST_SUCCESS, payload };
}

export function fetchOrdenListFailure(error) {
  return { type: FETCH_ORDEN_LIST_FAILURE, payload: error };
}

export function fetchOrdenList(page, term) {

  let url = `${ROOT_URL}/orden?_page=${page}`;
  if (term) {
    url = `${url}&q=${term}`;
  }

  const request = axios({
    method: 'get',
    url: url,
    headers: []
  });

  return dispatch => {
    dispatch(fetchOrdenListRequest());
    return request
      .then(res => dispatch(fetchOrdenListSuccess(res)))
      .catch(ex => dispatch(fetchOrdenListFailure(ex)));
  };
}

export function fetchOrdenListByCliente(page, cliente_id, term) {

  let url = `${ROOT_URL}/orden?_page=${page}&cliente_id=${cliente_id}`;
  if (term) {
    url = `${url}&q=${term}`;
  }

  const request = axios({
    method: 'get',
    url: url,
    headers: []
  });

  return dispatch => {
    dispatch(fetchOrdenListRequest());
    return request
      .then(res => dispatch(fetchOrdenListSuccess(res)))
      .catch(ex => dispatch(fetchOrdenListFailure(ex)));
  };
}

/**
 ** Fetch Cliente actions
 **/

export function fetchOrdenRequest() {
  return { type: FETCH_ORDEN_REQUEST };
}

export function fetchOrdenSuccess(payload) {
  return { type: FETCH_ORDEN_SUCCESS, payload };
}

export function fetchOrdenFailure(error) {
  return { type: FETCH_ORDEN_FAILURE, payload: error };
}

export function fetchOrden(id) {

  const url = `${ROOT_URL}/orden/${id}`;

  const request = axios({
    method: 'get',
    url: url,
    headers: []
  });

  return dispatch => {
    dispatch(fetchOrdenRequest());
    return request
      .then(res => dispatch(fetchOrdenSuccess(res)))
      .catch(ex => dispatch(fetchOrdenFailure(ex)));
  };
}

/**
 ** Create Orden actions
 **/

export function createOrdenRequest() {
  return { type: CREATE_ORDEN_REQUEST };
}

export function createOrdenSuccess(payload) {
  return { type: CREATE_ORDEN_SUCCESS, payload };
}

export function createOrdenFailure(error) {
  return { type: CREATE_ORDEN_FAILURE, payload: error };
}

export function createOrden(props) {

  const url = `${ROOT_URL}/orden`;

  const request = axios({
    method: 'post',
    url: url,
    data: props,
    headers: []
  });

  return dispatch => {
    dispatch(createOrdenRequest());
    return request
      .then(res => dispatch(createOrdenSuccess(res)))
      .catch(ex => dispatch(createOrdenFailure(ex)));
  };
}

/**
 ** Update Orden actions
 **/

export function updateOrdenRequest() {
  return { type: UPDATE_ORDEN_REQUEST };
}

export function updateOrdenSuccess(payload) {
  return { type: UPDATE_ORDEN_SUCCESS, payload };
}

export function updateOrdenFailure(error) {
  return { type: UPDATE_ORDEN_FAILURE, payload: error };
}

export function updateOrden(id, props) {

  const url = `${ROOT_URL}/orden/${id}`;

  const request = axios({
    method: 'put',
    url: url,
    data: props,
    headers: []
  });

  return dispatch => {
    dispatch(updateOrdenRequest());
    return request
      .then(res => dispatch(updateOrdenSuccess(res)))
      .catch(ex => dispatch(updateOrdenFailure(ex)));
  };
}

/**
 ** Delete Orden actions
 **/

export function deleteOrdenRequest() {
  return { type: DELETE_ORDEN_REQUEST };
}

export function deleteOrdenSuccess(payload) {
  return { type: DELETE_ORDEN_SUCCESS, payload };
}

export function deleteOrdenFailure(error) {
  return { type: DELETE_ORDEN_FAILURE, payload: error };
}

export function deleteOrden(id) {

  const url = `${ROOT_URL}/orden/${id}`;

  const request = axios({
    method: 'delete',
    url: url,
    headers: []
  });

  return dispatch => {
    dispatch(deleteOrdenRequest());
    return request
      .then(res => {
        if (res.status == 200){
          dispatch(deleteOrdenSuccess(res));
        } else {
          dispatch(deleteOrdenFailure(res));
        }
      })
      .catch(ex => dispatch(deleteOrdenFailure(ex)));
  };
}
