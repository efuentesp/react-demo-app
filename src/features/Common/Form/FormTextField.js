import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FormTextField extends Component {
  render() {
    const { type, input, name, meta, label, placeholder } = this.props;

    if (type == "label") {
      return(
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <FormControl.Static>{input.value}</FormControl.Static>
        </FormGroup>
      );
    }

    return(
      <FormGroup
        controlId={name}
        validationState={meta.dirty && meta.invalid ? "error" : null}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          placeholder={placeholder}
          autoComplete="off" />
        <FormControl.Feedback />
        <HelpBlock>{meta.error}</HelpBlock>
      </FormGroup>
    );
  }
}

FormTextField.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  submitting: PropTypes.bool
};

export default FormTextField;
