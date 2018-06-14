import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HealthIndicator from '../HealthIndicator';

class CharacterCard extends Component {
  render() {
    return (
      <Paper elevation={4}>
        <Typography variant="headline" component="h3">
          Tug FireBeard
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <HealthIndicator />
      </Paper>
    );
  }
}

CharacterCard.propTypes = {};

export default CharacterCard;
