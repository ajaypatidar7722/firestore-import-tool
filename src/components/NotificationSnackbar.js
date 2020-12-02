import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NotificationsSnackbar = ({
  isOpen, message, variant,
}) => (
  <Snackbar
    open={isOpen}
    TransitionComponent={Fade}
  >
    <Alert severity={variant}>
      {message}
    </Alert>
  </Snackbar>
);

const mapStateToProps = (state) => ({
  isOpen: state.app.notification.isOpen,
  message: state.app.notification.message,
  variant: state.app.notification.variant,
});

NotificationsSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(NotificationsSnackbar);
