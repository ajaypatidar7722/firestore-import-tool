import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Notification from '../components/NotificationSnackbar';

const styles = () => ({
  container: {
    minHeight: 'calc(100% - 64px)',
  },
});

const AppContainer = ({ children, classes }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Firebase Tools
        </Typography>
      </Toolbar>
    </AppBar>
    <Container className={classes.container}>
      {children}
    </Container>
    <Notification />
  </>
);

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(AppContainer);
