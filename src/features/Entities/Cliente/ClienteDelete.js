import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import FormTextField from "../../Common/Form/FormTextField";
import Loading from '../../Common/Loading/Loading';
import { fetchCliente, deleteCliente } from './actions';

class ClienteDelete extends Component {

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

  onFormSubmit() {
    this.props.deleteCliente(this.props.params.id)
      .then(() => {
        this.context.router.push('/cliente_mgmnt');
        toastr.success("Cliente borrado", `El Cliente fué borrado exitosamente.`);
      });
  }

  render() {
    const { cliente, handleSubmit, submitSucceeded } = this.props;

    if (!cliente) {
      return (
        <ContentWrapper>
          <h3>
            <span className="mr">Borrar Cliente</span>
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
           <li className="active">Borrar Cliente</li>
        </ol>
        <h3>
          <span className="mr">Borrar Cliente</span>
        </h3>
        <Panel header="Cliente">
          <form
            role="form"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              type="label"
              name="numero"
              component={FormTextField}
              label="Número" />
            <Field
              type="label"
              name="nombre"
              component={FormTextField}
              label="Nombre" />
            <Field
              type="label"
              name="direccion"
              component={FormTextField}
              label="Dirección" />
            <ButtonToolbar>
              <Button
                type="submit"
                bsStyle="danger"
                disabled={submitSucceeded}>
                  <i className={`${submitSucceeded ? 'fa fa-refresh fa-spin' : 'fa fa-trash'}`} />
                  <span> Borrar</span>
              </Button>
            </ButtonToolbar>
          </form>
        </Panel>
      </ContentWrapper>
    );
  }
}

ClienteDelete.propTypes = {
  params: PropTypes.object.isRequired,
  initialize: PropTypes.func.isRequired,
  cliente: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  fetchCliente: PropTypes.func.isRequired,
  deleteCliente: PropTypes.func.isRequired
};

ClienteDelete.contextTypes = {
  router: PropTypes.object.isRequired
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
  form: 'ClienteDeleteForm',
  validate
});

export default connect(mapStateToProps, { fetchCliente, deleteCliente })(form(ClienteDelete));
