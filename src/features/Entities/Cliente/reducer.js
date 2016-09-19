import {
  FETCH_CLIENTE_LIST_REQUEST,
  FETCH_CLIENTE_LIST_SUCCESS,
  FETCH_CLIENTE_LIST_FAILURE,
  FETCH_CLIENTE_REQUEST,
  FETCH_CLIENTE_SUCCESS,
  FETCH_CLIENTE_FAILURE
} from './actions';

const INITIAL_STATE = { all: [], item: null, loading: false, error:null };

export default function (state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_CLIENTE_LIST_REQUEST:
      return { ...state, all: [], loading: true, error: null };

    case FETCH_CLIENTE_LIST_SUCCESS:
      return { ...state, all: action.payload.data, loading: false, error: null };

    case FETCH_CLIENTE_LIST_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return { ...state, all: [], loading: false, error: error };

    case FETCH_CLIENTE_REQUEST:
      return { ...state, item: null, loading: true, error: null};

    case FETCH_CLIENTE_SUCCESS:
      return { ...state, item: action.payload.data, loading: false, error: null };

    case FETCH_CLIENTE_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return { ...state, item: null, loading: false, error: error };
  }

  return state;
}
