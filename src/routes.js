import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './features/App/App';
import HomePage from './features/Home/Home';
import LoginPage from './features/Common/Pages/Login';
import NotFoundPage from './features/Common/Pages/NotFound';

import ClienteManagement from './features/Entities/Cliente/ClienteManagement';
import ClienteCreate from './features/Entities/Cliente/ClienteCreate';
import ClienteEdit from './features/Entities/Cliente/ClienteEdit';
import ClienteDelete from './features/Entities/Cliente/ClienteDelete';

import RoleManagement from './features/Common/Security/Role/RoleManagement';
import RoleEdit from './features/Common/Security/Role/RoleEdit';
import RoleDelete from './features/Common/Security/Role/RoleDelete';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>

    <Route path="cliente_mgmnt" component={ClienteManagement} />
    <Route path="cliente" component={ClienteCreate} />
    <Route path="cliente/edit/:id" component={ClienteEdit} />
    <Route path="cliente/delete/:id" component={ClienteDelete} />

    <Route path="roles" component={RoleManagement} />
    <Route path="roles/edit/:id" component={RoleEdit} />
    <Route path="roles/delete/:id" component={RoleDelete} />

    <Route path="/login" component={LoginPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
