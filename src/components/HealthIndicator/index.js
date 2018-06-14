import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const propTypes = {
  maxHP: PropTypes.number,
  currentHP: PropTypes.number,
  temporaryHP: PropTypes.number,
};

const defaultProps = {
  maxHP: 10,
  currentHP: 7,
  temporaryHP: 0,
};

const getCurrentPercentage = (current, max) => {
  return 100 / (max / current);
};

const HealthIndicator = ({ classes, maxHP, currentHP, temporaryHP }) => {
  return (
    <HealthIndicatorWrap>
      <Typography
        className={classes.root}
        variant="caption"
      >{`${currentHP}/${maxHP}`}</Typography>
      <Wrapper>
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
    </HealthIndicatorWrap>
  );
};

const HealthIndicatorWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.15);
  width: 100%;
  display: inline-block;
`;
const styles = {
  root: {
    display: 'inline-block',
    padding: '0 5px',
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
