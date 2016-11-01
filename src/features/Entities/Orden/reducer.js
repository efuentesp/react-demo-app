import {
  FETCH_ORDEN_LIST_REQUEST,
  FETCH_ORDEN_LIST_SUCCESS,
  FETCH_ORDEN_LIST_FAILURE,
  FETCH_ORDEN_REQUEST,
  FETCH_ORDEN_SUCCESS,
  FETCH_ORDEN_FAILURE,
  DELETE_ORDEN_REQUEST,
  DELETE_ORDEN_SUCCESS,
  DELETE_ORDEN_FAILURE
} from './actions';

const INITIAL_STATE = { all: [], item: null, loading: false, error:null, items_count: 0 };

export default function (state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_ORDEN_LIST_REQUEST:
      return { ...state, all: [], loading: true, error: null };

    case FETCH_ORDEN_LIST_SUCCESS:
      return { ...state,
               all: action.payload.data,
               loading: false,
               error: null,
               items_count: (Number.parseInt(action.payload.headers['x-total-count']) || 0) };

    case FETCH_ORDEN_LIST_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return { ...state, all: [], loading: false, error: error };

    case FETCH_ORDEN_REQUEST:
      return { ...state, item: null, loading: true, error: null };

    case FETCH_ORDEN_SUCCESS:
      return { ...state, item: action.payload.data, loading: false, error: null };

    case FETCH_ORDEN_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return { ...state, item: null, loading: false, error: error };

    case DELETE_ORDEN_REQUEST:
      // console.log("DELETE_ORDEN_REQUEST");
      return { ...state, item: null, loading: true, error: null };

    case DELETE_ORDEN_SUCCESS:
      // console.log("DELETE_ORDEN_SUCCESS");
      // console.log(action);
      return { ...state, item: action.payload, loading: false, error: null };

    case DELETE_ORDEN_FAILURE:
      // console.log("DELETE_ORDEN_FAILURE");
      // console.log(action);
      return { ...state, item: null, loading: false, error: action.payload };
  }

  return state;
}
