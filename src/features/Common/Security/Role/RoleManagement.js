import React from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

import ContentWrapper from "../../Layout/ContentWrapper";
import RoleCreate from './RoleCreate';
import RoleList from './RoleList';

const RoleManagement = () => {
  return (
    <ContentWrapper>
      <ol className="breadcrumb pull-right">
         <li>
           <Link to="/">Inicio</Link>
         </li>
         <li className="active">Seguridad</li>
         <li className="active">Administrar Roles</li>
      </ol>
      <h3>Administración de Roles</h3>
      <Panel header="Roles registrados">
        <RoleCreate />
        <RoleList />
      </Panel>
    </ContentWrapper>
  );
};

export default RoleManagement;
