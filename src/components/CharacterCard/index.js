import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HealthIndicator from '../HealthIndicator';
import StatCard from '../StatCard';
import styled from 'styled-components';

class CharacterCard extends Component {
  render() {
    return (
      <CharacterWrapper>
        <Paper classes={{ root: this.props.classes.root }} elevation={4}>
          <CharacterContent>
            <Typography variant="headline" component="h3">
              Tug FireBeard
            </Typography>
          </CharacterContent>
          <HealthIndicator />
        </Paper>
      </CharacterWrapper>
    );
  }
}

const AbilityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CharacterContent = styled.div`
  height: 83%;
`;

const CharacterWrapper = styled.div`
  display: inline-block;
  margin-top: 30px;
  width: 100%;
  height: 100px;
`;
const MiddleText = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  justify-content: space-between;
`;

const styles = {
  root: {
    // display: 'inline-block',
    height: '100%',
  },
};

CharacterCard.propTypes = {};

export default withStyles(styles)(CharacterCard);
