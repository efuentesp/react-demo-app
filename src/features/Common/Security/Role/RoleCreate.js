import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { reduxForm, Field, reset } from 'redux-form';
import classNames from 'classnames';

import { fetchRoleList, createRole } from './actions';
import FormSimpleAddBox from './components/FormSimpleAddBox';

class RoleCreate extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onFormSubmit(props) {
    this.props.createRole(props)
      .then(() => {
        this.props.fetchRoleList();
        this.props.reset();
      });
  }


  render() {
    const { handleSubmit, submitting } = this.props;

    const renderTextField = field => (
      <FormGroup
        controlId={field.input.name}>
        <ControlLabel></ControlLabel>
        <FormControl
          {...field.input}
          placeholder={field.placeholder}
          autoComplete="off" />
      </FormGroup>
    );

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

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Campo requerido.';
  }

  return errors;
}

const form = reduxForm({
  form: 'RoleCreateForm',
  validate
});

export default connect(null, { createRole, fetchRoleList })(form(RoleCreate));
