import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: 210,
  },
});

function Reminders({ reminders, classes }) {
  return (
    <div className={classes.root}>
      <List dense>
        {reminders.map((obj, idx) => (
          <ListItem key={idx} dense divider>
            <ListItemText primary={obj} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

Reminders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reminders);
