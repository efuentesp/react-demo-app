import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class FormSimpleAddBox extends Component {
  render() {
    const { input, name, label, placeholder, submitting } = this.props;

    return (
      <div className="form-searchbox">
        <FormGroup
          controlId={name}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            {...input}
            placeholder={placeholder}
            autoComplete="off" />
        </FormGroup>
        <Button type="submit" bsStyle="primary" >
          <i className={`${submitting ? 'fa fa-refresh fa-spin' : 'fa fa-plus'}`} />
        </Button>
      </div>
    );
  }
}

FormSimpleAddBox.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  submitting: PropTypes.bool
};

export default FormSimpleAddBox;
