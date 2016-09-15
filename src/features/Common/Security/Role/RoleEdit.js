import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field, initialize, reset } from 'redux-form';
import classNames from 'classnames';

import ContentWrapper from "../../Layout/ContentWrapper";
import FormTextField from "../../Form/FormTextField";
import { fetchRole, updateRole } from './actions';

class RoleEdit extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchRole(this.props.params.id)
      .then(() => {
        this.props.initialize({
          "name": this.props.role.name
        });
      });
  }

  onFormSubmit(props) {
    this.props.updateRole(this.props.params.id, props)
      .then(() => {
        this.context.router.push('/roles');
      });
  }

  render() {
    const { role, handleSubmit, reset, pristine, submitting } = this.props;

    if (!role) {
      return <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>;
    }

    return (
      <ContentWrapper>
        <Panel header="Editar Rol">
          <form
            role="form"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              name="name"
              component={FormTextField}
              label="Rol"
              placeholder="Nombre del Rol" />
            <ButtonToolbar>
              <Button
                type="submit"
                bsStyle="primary"
                disabled={pristine || submitting}>
                <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-save'}`}></i>
                  <span> Guardar</span>
              </Button>
              <Button
                type="button"
                bsStyle="default"
                disabled={pristine || submitting}
                onClick={reset}>
                  <i className="fa fa-undo"></i>
                  <span> Deshacer</span>
              </Button>
            </ButtonToolbar>
          </form>
        </Panel>
      </ContentWrapper>
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

function mapStateToProps(state) {
  return { role: state.roles.item };
}

const form = reduxForm({
  form: 'RoleEditForm',
  validate
});

export default connect(mapStateToProps, { fetchRole, updateRole })(form(RoleEdit));
