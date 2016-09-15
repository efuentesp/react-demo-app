import React from 'react';
import { Panel } from 'react-bootstrap';

import ContentWrapper from "../../Layout/ContentWrapper";
import RoleCreate from './RoleCreate';
import RoleList from './RoleList';

const RoleManagement = () => {
  return (
    <ContentWrapper>
      <h3>Administración de Roles</h3>
      <Panel header="Roles registrados">
        <RoleCreate />
        <RoleList />
      </Panel>
    </ContentWrapper>
  );
};

export default RoleManagement;
