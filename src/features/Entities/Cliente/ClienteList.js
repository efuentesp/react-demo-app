import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Row, Col, Table, ButtonToolbar, Pagination } from 'react-bootstrap';

import { fetchClienteList } from './actions';

import Loading from '../../Common/Loading/Loading';

class ClienteList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current_page: 1
    };
  }

  componentWillMount() {
    this.props.fetchClienteList(this.state.current_page);
  }

  onRetryLoad() {
    this.props.fetchClienteList(this.state.current_page);
  }

  onPaginationClick(pageSelected) {
    this.props.fetchClienteList(pageSelected);
    this.setState({
      current_page: pageSelected
    });
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
              <Link className="btn btn-default" to={`/orden_mgmnt?cliente_id=${item.id}`}>
                <em className="fa fa-check-circle-o" />
                <span> Ordenes</span>
              </Link>
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
    // console.log((this.props.cliente || {}).total_count);

    if ((this.props.cliente || {}).loading) {
      return (
        <Loading />
      );
    }

    if ((this.props.cliente || {}).error) {
      return (
        <SweetAlert
          type="error"
          title={this.props.cliente.error.message}
          content="Comunicate con el Administrador del Sistema o intentalo más tarde."
          confirmBtnText="Intentar de nuevo"
          onConfirm={this.onRetryLoad.bind(this)} />
      );
    }

    return (
      <div>
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
        <Row>
          <Col sm={12}>
            <Pagination
              activePage={this.state.current_page}
              items={Math.ceil((this.props.cliente || {}).total_count / this.props.items_per_page)}
              maxButtons={5}
              boundaryLinks
              onSelect={this.onPaginationClick.bind(this)} />
          </Col>
        </Row>
      </div>
    );
  }
}

ClienteList.defaultProps = {
  items_per_page: 10
};

ClienteList.propTypes = {
  fetchClienteList: PropTypes.func.isRequired,
  cliente: PropTypes.object.isRequired,
  items_per_page: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    cliente: state.cliente
  };
}

export default connect(mapStateToProps, { fetchClienteList })(ClienteList);
