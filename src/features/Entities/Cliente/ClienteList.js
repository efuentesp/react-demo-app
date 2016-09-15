import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Table, ButtonToolbar } from 'react-bootstrap';

import { fetchClienteList } from './actions';

class ClienteList extends Component {

  componentWillMount() {
    this.props.fetchClienteList();
  }

  renderList() {
    return this.props.cliente.all.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.numero}</td>
          <td>{item.nombre}</td>
          <td>{item.direccion}</td>
          <td>
            <ButtonToolbar>
              <Link className="btn btn-default" to={`/cliente/edit/${item.id}`}>
                <em className="fa fa-pencil" />
              </Link>
              <Link className="btn btn-default" to={`/cliente/delete/${item.id}`}>
                <em className="fa fa-trash" />
              </Link>
            </ButtonToolbar>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (!this.props.cliente.all) {
      return (
        <Row>
          <Col sm={12}>
            <i className="fa fa-refresh fa-spin fa-2x fa-fw" aria-hidden="true" />
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col sm={12}>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

ClienteList.propTypes = {
  fetchClienteList: PropTypes.func.isRequired,
  cliente: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    cliente: state.cliente
  };
}

export default connect(mapStateToProps, { fetchClienteList })(ClienteList);
