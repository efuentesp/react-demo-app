
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentWrapper from "../../Common/Layout/ContentWrapper";
import FormTextField from "../../Common/Form/FormTextField";
import Loading from '../../Common/Loading/Loading';
import { fetchOrden, deleteOrden } from './actions';

class OrdenDelete extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchOrden(this.props.params.id)
      .then(() => {
        this.props.initialize({
          "cliente_id": this.props.orden.cliente_id,
          "fecha": this.props.orden.fecha,
          "almacen": this.props.orden.almacen,
          "numero": this.props.orden.numero
        });
      });
  }

  onFormSubmit() {
    const cliente_id = this.props.location.query.cliente_id;
    this.props.deleteOrden(this.props.params.id)
      .then(() => {
        // console.log(this.props.orden);
        if (this.props.orden.status == 200){
          const orden_mgmnt = (cliente_id) ? "/orden_mgmnt?cliente_id=" + cliente_id : "/orden_mgmnt";
          this.context.router.push(orden_mgmnt);
          toastr.success("Orden borrada", `El Orden fué borrado exitosamente.`);
        } else {
          const toastrOptions = {
            timeOut: 8000
          };
          toastr.error("Error al borrar Orden", `${this.props.orden.data}`, toastrOptions);
        }
      });
  }

  render() {
    const { orden, handleSubmit, submitSucceeded } = this.props;

    if (!orden) {
      return (
        <ContentWrapper>
          <h3>
            <span className="mr">Borrar Orden</span>
          </h3>
          <Panel header="Orden">
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
           <li className="active">Orden</li>
           <li>
             <Link to="/orden_mgmnt">Administrar Orden</Link>
           </li>
           <li className="active">Borrar Orden</li>
        </ol>
        <h3>
          <span className="mr">Borrar Orden</span>
        </h3>
        <Panel header="Orden">
          <form
            role="form"
            onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              type="label"
              name="cliente_id"
              component={FormTextField}
              label="Cliente" />
            <Field
              type="label"
              name="numero"
              component={FormTextField}
              label="Numero" />
            <Field
              type="label"
              name="fecha"
              component={FormTextField}
              label="Fecha" />
            <Field
              type="label"
              name="almacen"
              component={FormTextField}
              label="Almacen" />
            <ButtonToolbar>
              <Button
                type="submit"
                bsStyle="danger"
                disabled={submitSucceeded}>
                  <i className="fa fa-trash" />
                  <span> Borrar</span>
              </Button>
            </ButtonToolbar>
          </form>
        </Panel>
      </ContentWrapper>
    );
  }
}

OrdenDelete.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object.isRequired,
  initialize: PropTypes.func.isRequired,
  orden: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  fetchOrden: PropTypes.func.isRequired,
  deleteOrden: PropTypes.func.isRequired
};

OrdenDelete.contextTypes = {
  router: PropTypes.object.isRequired
};

const validate = values => {
  const errors = {};

  if (!values.fecha) {
    errors.fecha = 'Campo requerido.';
  }
  if (!values.almacen) {
    errors.almacen = 'Campo requerido.';
  }
  if (!values.numero) {
    errors.numero = 'Campo requerido.';
  }

  return errors;
};

function mapStateToProps(state) {
  return { orden: state.orden.item };
}

const form = reduxForm({
  form: 'OrdenDeleteForm',
  validate
});

export default connect(mapStateToProps, { fetchOrden, deleteOrden })(form(OrdenDelete));
