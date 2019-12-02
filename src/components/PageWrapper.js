import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import PageTitle from './PageTitle';

const styles = (theme) => ({
  paddedTitle: {
    padding: theme.spacing(1, 0),
  },
});

const PageWrapper = ({
  classes,
  className,
  children,
  title,
  padded,
}) => (
  <>
    <Box
      display="flex"
      justifyContent="space-between"
      className={classnames(className, {
        [classes.paddedTitle]: padded,
      })}
    >
      <PageTitle title={title} />
    </Box>
    {children}
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  padded: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

PageWrapper.defaultProps = {
  padded: true,
  className: '',
};

export default withStyles(styles)(PageWrapper);
