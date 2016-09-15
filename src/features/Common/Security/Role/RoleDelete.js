import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { reduxForm, Field, reset } from 'redux-form';

import ContentWrapper from "../../Layout/ContentWrapper";
import { fetchRole, deleteRole } from './actions';

class RoleDelete extends Component {

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
    this.props.deleteRole(this.props.params.id)
      .then(() => {
        this.context.router.push('/roles');
      });
  }

  render() {
    const { role, handleSubmit, submitting } = this.props;

    if (!role) {
      return <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>;
    }

    const renderTextField = field => (
      <FormGroup>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl.Static>{field.input.value}</FormControl.Static>
      </FormGroup>
    );

    return (
      <ContentWrapper>
        <Panel header="Borrar Rol">
          <form
            role="form"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field name="name" type="text" component={renderTextField} label="Rol" />
            <Button type="submit" bsStyle="danger" disabled={submitting}>
              <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-trash'}`}></i>
              <span> Borrar</span>
            </Button>
          </form>
        </Panel>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { role: state.roles.item };
}

const form = reduxForm({
  form: 'RoleDeleteForm'
});

export default connect(mapStateToProps, { fetchRole, deleteRole })(form(RoleDelete));
