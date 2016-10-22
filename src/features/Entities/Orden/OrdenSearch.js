import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';

import { fetchOrdenListByCliente } from './actions';

class OrdenSearch extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(props) {
    this.props.fetchOrdenListByCliente(this.props.clienteId, props.term)
      .then(() => {
        reset;
      });
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return(
      <form
        role="form"
        className="input-group"
        onSubmit={handleSubmit(this.props.onSearchSubmit)}>
        <Field
          name="term"
          component="Input"
          className="form-control"
          placeholder="Buscar Orden..." />
        <span className="input-group-btn">
          <Button
            type="submit"
            className="btn btn-green"
            disabled={submitting}>
              <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-search'}`} />
          </Button>
        </span>
      </form>
    );
  }
}

OrdenSearch.propTypes = {
  clienteId: PropTypes.string,
  fetchOrdenListByCliente: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};

const form = reduxForm({
  form: 'OrdenSearchForm',
});

export default connect(null, { fetchOrdenListByCliente })(form(OrdenSearch));
