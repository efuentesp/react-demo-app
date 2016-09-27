
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row, Panel } from 'react-bootstrap';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import { fetchCliente } from '../Cliente/actions';
import OrdenSearch from './OrdenSearch';
import OrdenList from './OrdenList';

class OrdenManagement extends Component {

  componentWillMount() {
    if (this.props.location.query.cliente_id) {
      this.props.fetchCliente(this.props.location.query.cliente_id);
    }
  }

  render() {
    return (
      <ContentWrapper>
        <ol className="breadcrumb pull-right">
           <li>
             <Link to="/">Inicio</Link>
           </li>
           <li className="active">Cliente</li>
           <li>
             <Link to="/cliente_mgmnt">Administrar Cliente</Link>
           </li>
           <li className="active">Administrar Orden</li>
        </ol>
        <h3>Administración de Orden <small>{(this.props.cliente || {}).nombre}</small></h3>
        <Panel header="Orden registrados">
          <Col sm={12}>
            <Row>
              <OrdenSearch
                clienteId={this.props.location.query.cliente_id} />
              <br />
            </Row>
            <Row>
              <Link className="btn btn-info" to={`/orden/${this.props.location.query.cliente_id}`}>
                <em className="fa fa-plus" />
              </Link>
            </Row>
            <Row>
              <OrdenList
                clienteId={this.props.location.query.cliente_id} />
            </Row>
          </Col>
        </Panel>
      </ContentWrapper>
    );
  }
}

OrdenManagement.propTypes = {
  location: PropTypes.object,
  cliente: PropTypes.object,
  fetchCliente: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { cliente: state.cliente.item };
}

export default connect(mapStateToProps, { fetchCliente })(OrdenManagement);
