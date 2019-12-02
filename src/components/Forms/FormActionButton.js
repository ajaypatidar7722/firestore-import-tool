import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import noop from '../../utils/noop';

const FormActionButton = ({
  buttonText, pristine, submitting, ...props
}) => (
  <Button disabled={pristine || submitting} {...props}>
    {buttonText}
  </Button>
);

FormActionButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'contained',
    'outlined',
    'text',
  ]),
};

FormActionButton.defaultProps = {
  variant: 'outlined',
  type: 'button',
  onClick: noop,
};

export default FormActionButton;
