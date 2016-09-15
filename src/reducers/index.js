import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import ClienteReducer from '../features/Entities/Cliente/reducer';

import RoleReducer from '../features/Common/Security/Role/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  cliente: ClienteReducer,
  roles: RoleReducer
});

export default rootReducer;
