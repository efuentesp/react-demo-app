import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import FormTextField from "../../Common/Form/FormTextField";
import Loading from '../../Common/Loading/Loading';
import { fetchCliente, updateCliente } from './actions';

class ClienteEdit extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchCliente(this.props.params.id)
      .then(() => {
        this.props.initialize({
          "numero": this.props.cliente.numero,
          "nombre": this.props.cliente.nombre,
          "direccion": this.props.cliente.direccion
        });
      });
  }

  onFormSubmit(props) {
    this.props.updateCliente(this.props.params.id, props)
      .then(() => {
        this.context.router.push('/cliente_mgmnt');
        toastr.success("Cliente modificado", `El Cliente fué modificado exitosamente.`);
      });
  }

  render() {
    const { cliente, handleSubmit, reset, pristine, submitSucceeded } = this.props;

    if ((cliente || {}).loading) {
      return (
        <ContentWrapper>
          <h3>
            <span className="mr">Editar Cliente</span>
          </h3>
          <Panel header="Cliente">
            <Loading />
          </Panel>
        </ContentWrapper>
      );
    }

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
           <li className="active">Editar Cliente</li>
        </ol>
        <h3>
          <span className="mr">Editar Cliente</span>
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
                disabled={pristine || submitSucceeded}>
                  <i className={`${submitSucceeded ? 'fa fa-refresh fa-spin' : 'fa fa-save'}`} />
                  <span> Guardar</span>
              </Button>
              <Button
                type="button"
                bsStyle="default"
                disabled={pristine || submitSucceeded}
                onClick={reset}>
                  <i className="fa fa-undo" />
                  <span> Deshacer</span>
              </Button>
            </ButtonToolbar>
          </form>
        </Panel>
      </ContentWrapper>
    );
  }
}

ClienteEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

ClienteEdit.propTypes = {
  params: PropTypes.object.isRequired,
  fetchCliente: PropTypes.func.isRequired,
  updateCliente: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  cliente: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

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
};

function mapStateToProps(state) {
  return { cliente: state.cliente.item };
}

const form = reduxForm({
  form: 'ClienteEditForm',
  validate
});

export default connect(mapStateToProps, { fetchCliente, updateCliente })(form(ClienteEdit));
