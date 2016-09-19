import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field, initialize, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import classNames from 'classnames';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import FormTextField from "../../Common/Form/FormTextField";
import { fetchCliente, createCliente } from './actions';

class ClienteCreate extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onFormSubmit(props) {
    this.props.createCliente(props)
      .then(() => {
        this.context.router.push('/cliente_mgmnt');
        toastr.success("Cliente creado", `El Cliente ${this.props.cliente.numero} fué creado exitosamente.`);
      });
  }

  render() {
    const { cliente, handleSubmit, pristine, submitting } = this.props;

    return (
      <ContentWrapper>
        <ol className="breadcrumb pull-right">
           <li>
             <Link to="/">Inicio</Link>
           </li>
           <li>
             <Link to="/cliente_mgmnt">Administrar Cliente</Link>
           </li>
           <li className="active">Agregar Cliente</li>
        </ol>
        <h3>
          <span className="mr">Agregar de Cliente</span>
        </h3>
        <Panel header="Cliente">
          <form
            role="form"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              name="numero"
              component={FormTextField}
              label="Número" />
            <Field
              name="nombre"
              component={FormTextField}
              label="Nombre" />
            <Field
              name="direccion"
              component={FormTextField}
              label="Dirección" />
            <ButtonToolbar>
              <Button
                type="submit"
                bsStyle="primary"
                disabled={pristine || submitting}>
                  <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-save'}`}></i>
                  <span> Guardar</span>
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

  if (!values.numero) {
    errors.numero = 'Campo requerido.';
  }

  if (!values.nombre) {
    errors.nombre = 'Campo requerido.';
  }

  if (!values.direccion) {
    errors.direccion = 'Campo requerido.';
  }

  return errors;
}

function mapStateToProps(state) {
  return { cliente: state.cliente.item };
}

const form = reduxForm({
  form: 'ClienteCreateForm',
  validate
});

export default connect(mapStateToProps, { fetchCliente, createCliente })(form(ClienteCreate));
