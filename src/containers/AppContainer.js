import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Notification from '../components/NotificationSnackbar';
import routes from '../sidebar.routes.json';

const drawerWidth = 240;

const styles = (theme) => ({
  container: {
    minHeight: 'calc(100% - 64px)',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icons: {
    fontSize: 18,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const AppContainer = ({ children, classes }) => (
  <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Firebase Tools
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {routes.map((route) => (
              <Link to={route.link} className={classes.link}>
                <ListItem button key={route}>
                  <ListItemIcon>
                    <span className={`${classes.icons} ${route.icon}`} />
                  </ListItemIcon>
                  <ListItemText primary={route.lable} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Container className={classes.container}>
          {children}
        </Container>
        <Notification />
      </main>
    </div>

  </>
);

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(AppContainer);
