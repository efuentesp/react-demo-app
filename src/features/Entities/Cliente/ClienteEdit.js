import React, { Component, PropTypes } from 'react';
//import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field, initialize, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import classNames from 'classnames';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import FormTextField from "../../Common/Form/FormTextField";
import Loading from '../../Common/Loading/Loading';
import { fetchCliente, updateCliente } from './actions';

class ClienteEdit extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

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
    const { cliente, handleSubmit, reset, pristine, submitting } = this.props;

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
                disabled={pristine || submitting}>
                  <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-save'}`} />
                  <span> Guardar</span>
              </Button>
              <Button
                type="button"
                bsStyle="default"
                disabled={pristine || submitting}
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
  form: 'ClienteEditForm',
  validate
});

export default connect(mapStateToProps, { fetchCliente, updateCliente })(form(ClienteEdit));
