import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';

import { fetchClienteList } from './actions';

class ClienteSearch extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(props) {
    this.props.fetchClienteList(props.term)
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
        onSubmit={handleSubmit(this.onFormSubmit)}>
        <Field
          name="term"
          component="Input"
          className="form-control"
          placeholder="Buscar Cliente..." />
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

ClienteSearch.propTypes = {
  fetchClienteList: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

const form = reduxForm({
  form: 'ClienteSearchForm',
});

export default connect(null, { fetchClienteList })(form(ClienteSearch));
