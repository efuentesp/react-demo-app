import { FETCH_ROLE_LIST, FETCH_ROLE } from './actions';

const INITIAL_STATE = { all: [], item: null };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_ROLE_LIST:
      return { ...state, all: action.payload.data };

    case FETCH_ROLE:
      return { ...state, item: action.payload.data };
  }

  return state;
}
