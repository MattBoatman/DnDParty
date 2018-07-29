import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const propTypes = {
  stat: PropTypes.string.isRequired,
  modifier: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const StatCard = ({ stat, modifier, score, classes }) => {
  return (
    <StatWrapper>
      <MiddleText>
        <Typography
          variant="subheading"
          align="center"
          classes={{ display1: classes.display1 }}
        >
          {stat}
        </Typography>
      </MiddleText>
      <Paper elevation={4} classes={{ root: classes.root }}>
        <Typography variant="headline" align="center">
          {modifier}
        </Typography>
        <Divider />
        <Typography variant="caption" align="center">
          {score}
        </Typography>
      </Paper>
    </StatWrapper>
  );
};

const StatWrapper = styled.div`
  display: inline-block;
`;
const MiddleText = styled.div`
  margin-bottom: -11px;
  position: relative;
`;

const styles = {
  root: {
    display: 'inline-block',
    padding: '10px 15px',
    width: 15,
  },
  display1: {
    fontSize: '1.125rem',
    letterSpacing: 1,
    textAlign: 'center',
    background: '#ffffff',
  },
};

StatCard.propTypes = propTypes;

export default withStyles(styles)(StatCard);
