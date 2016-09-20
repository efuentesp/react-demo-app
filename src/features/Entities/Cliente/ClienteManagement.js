import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Panel } from 'react-bootstrap';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import ClienteSearch from './ClienteSearch';
import ClienteList from './ClienteList';

const ClienteManagement = () => {
  return (
    <ContentWrapper>
      <ol className="breadcrumb pull-right">
         <li>
           <Link to="/">Inicio</Link>
         </li>
         <li className="active">Cliente</li>
         <li className="active">Administrar Cliente</li>
      </ol>
      <h3>Administración de Cliente</h3>
      <Panel header="Cliente registrados">
        <Col sm={12}>
          <Row>
            <ClienteSearch />
            <br />
          </Row>
          <Row>
            <Link className="btn btn-info" to="/cliente">
              <em className="fa fa-plus" />
            </Link>
          </Row>
          <Row>
            <ClienteList />
          </Row>
        </Col>
      </Panel>
    </ContentWrapper>
  );
};

export default ClienteManagement;
