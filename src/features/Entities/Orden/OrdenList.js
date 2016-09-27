
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Row, Col, Table, ButtonToolbar } from 'react-bootstrap';

import { fetchOrdenList, fetchOrdenListByCliente } from './actions';

import Loading from '../../Common/Loading/Loading';

class OrdenList extends Component {

  componentWillMount() {
    if (this.props.clienteId) {
      this.props.fetchOrdenListByCliente(this.props.clienteId);
    } else {
      this.props.fetchOrdenList();
    }
  }

  onRetryLoad() {
    if (this.props.clienteId) {
      this.props.fetchOrdenListByCliente(this.props.clienteId);
    } else {
      this.props.fetchOrdenList();
    }
  }

  renderList() {
    return this.props.orden.all.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.cliente_id}</td>
          <td>{item.numero}</td>
          <td>{item.fecha}</td>
          <td>{item.almacen}</td>
          <td>
            <ButtonToolbar>
              <Link className="btn btn-default" to={`/orden/edit/${item.id}`}>
                <em className="fa fa-pencil" />
              </Link>
              <Link className="btn btn-default" to={`/orden/delete/${item.id}`}>
                <em className="fa fa-trash" />
              </Link>
            </ButtonToolbar>
          </td>
        </tr>
      );
    });
  }

  render() {
    if ((this.props.orden || {}).loading) {
      return (
        <Loading />
      );
    }

    if ((this.props.orden || {}).error) {
      return (
        <SweetAlert
          type="error"
          title={this.props.orden.error.message}
          content="Comunicate con el Administrador del Sistema o intentalo m?s tarde."
          confirmBtnText="Intentar de nuevo"
          onConfirm={this.onRetryLoad.bind(this)} />
      );
    }

    return (
      <Row>
        <Col sm={12}>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Numero</th>
                <th>Fecha</th>
                <th>Almacen</th>
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

OrdenList.propTypes = {
  clienteId: PropTypes.string,
  fetchOrdenList: PropTypes.func,
  fetchOrdenListByCliente: PropTypes.func.isRequired,
  orden: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    orden: state.orden
  };
}

export default connect(mapStateToProps, { fetchOrdenList, fetchOrdenListByCliente })(OrdenList);
