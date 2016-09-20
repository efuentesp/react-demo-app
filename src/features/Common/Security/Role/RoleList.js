import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Table, ButtonToolbar } from 'react-bootstrap';

import Loading from '../../Loading/Loading';

import { fetchRoleList } from './actions';

class RoleList extends Component {

  componentWillMount() {
    this.props.fetchRoleList();
  }

  renderList() {
    return this.props.roles.all.map((role) => {
      return (
        <tr key={role.id}>
          <td>{role.name}</td>
          <td>
            <ButtonToolbar>
              <Link className="btn btn-default" to={`/roles/edit/${role.id}`}>
                <em className="fa fa-pencil" />
                <span> Editar Rol</span>
              </Link>
              <Link className="btn btn-default" to={`/roles/delete/${role.id}`}>
                <em className="fa fa-trash" />
                <span> Borrar Rol</span>
              </Link>
              <Link className="btn btn-default" to={`/roles/permission/${role.id}`}>
                <em className="fa fa-lock" />
                <span> Editar Permisos</span>
              </Link>
            </ButtonToolbar>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (!this.props.roles.all) {
      return (
        <Loading />
      );
    }

    return (
      <Row>
        <Col sm={12}>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Nombre</th>
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

RoleList.propTypes = {
  fetchRoleList: PropTypes.func.isRequired,
  roles: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    roles: state.roles
  };
}

export default connect(mapStateToProps, { fetchRoleList })(RoleList);
