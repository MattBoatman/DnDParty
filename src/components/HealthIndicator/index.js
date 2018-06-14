import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const propTypes = {
  maxHP: PropTypes.number.isRequired,
  currentHP: PropTypes.number.isRequired,
  temporaryHP: PropTypes.number,
};

const defaultProps = {
  temporaryHP: 0,
};

const getCurrentPercentage = (current, max) => {
  return 100 / (max / current);
};


const HealthIndicator = ({ classes, maxHP, currentHP, temporaryHP }) => {
  return (
    <Wrapper>
      <Typography
        className={classes.root}
        variant="caption"
      >{`${currentHP}/${maxHP}`}</Typography>
      <LinearProgress
        classes={{
          bar: classes.bar,
          colorSecondary: classes.colorSecondary,
        }}
        className={classes.bar}
        variant="buffer"
        color="secondary"
        value={getCurrentPercentage(currentHP, maxHP)}
        valueBuffer={getCurrentPercentage(currentHP + temporaryHP, maxHP)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.15);
`;
const styles = {
  root: {
    position: 'absolute',
    zIndex: 200,
    top: 8,
    left: 10,
    color: 'hsl(0, 99%, 88%)',
  },
  bar: {
    height: 17,
  },
  dashedColorSecondary: {},
  colorSecondary: {
    // backgroundColor: '#A3A09C',
  },
};

HealthIndicator.propTypes = propTypes;

HealthIndicator.defaultProps = defaultProps;

export default withStyles(styles)(HealthIndicator);
