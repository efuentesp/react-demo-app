import { FETCH_CLIENTE_LIST, FETCH_CLIENTE } from './actions';

const INITIAL_STATE = { all: [], item: null };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_CLIENTE_LIST:
      return { ...state, all: action.payload.data };

    case FETCH_CLIENTE:
      return { ...state, item: action.payload.data };
  }

  return state;
}
