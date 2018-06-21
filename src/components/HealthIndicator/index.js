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
      <Wrapper>
        <TemporaryHP
          temporaryHP={getCurrentPercentage(currentHP + temporaryHP, maxHP)}
        />
        <HealthBar healthPercent={getCurrentPercentage(currentHP, maxHP)}>
          <Typography
            className={classes.root}
            variant="caption"
          >{`${currentHP}/${maxHP}`}</Typography>
        </HealthBar>
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
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: rgba(245, 237, 240, 1);
`;
const HealthBar = styled.div`
  width: ${props => `${props.healthPercent}%`};
  display: inline-block;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(164, 74, 63, 1);
  z-index: 10;
  position: relative;
`;

const TemporaryHP = styled.div`
  width: ${props => `${props.temporaryHP}%`};
  display: inline-block;
  border-radius: 4px;
  background-color: rgba(231, 63, 41, 0.582);
  position: absolute;
  height: 20px;
`;

const styles = {
  root: {
    display: 'inline-block',
    padding: '0 5px',
    color: 'rgb(253, 203, 197);',
  },
  bar: {
    height: 17,
  },
};

HealthIndicator.propTypes = propTypes;

HealthIndicator.defaultProps = defaultProps;

export default withStyles(styles)(HealthIndicator);
