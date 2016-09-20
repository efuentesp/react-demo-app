import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import { fetchRoleList, createRole } from './actions';
import FormSimpleAddBox from './components/FormSimpleAddBox';

class RoleCreate extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(props) {
    this.props.createRole(props)
      .then(() => {
        this.props.fetchRoleList();
        this.props.reset();
      });
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <Row>
        <Col sm={12}>
          <form
            role="form"
            className="form-inline"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              name="name"
              component={FormSimpleAddBox}
              placeholder="Nombre del nuevo Rol" />
          </form>
        </Col>
      </Row>
    );
  }
}

RoleCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createRole: PropTypes.func.isRequired,
  fetchRoleList: PropTypes.func.isRequired,
  reset: PropTypes.func
};

RoleCreate.contextTypes = {
  router: PropTypes.object.isRequired
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Campo requerido.';
  }

  return errors;
};

const form = reduxForm({
  form: 'RoleCreateForm',
  validate
});

export default connect(null, { createRole, fetchRoleList })(form(RoleCreate));
