import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ControlledRadioButton from '../ControlledRadioButton';

const Tracker = ({ name, count }) => {
  return (
    <TrackerWrapper>
      <Typography variant="caption" align="center" gutterBottom>
        {name}
      </Typography>
      {Array.from({ length: count }, (_, k) => (
        <ControlledRadioButton key={k} />
      ))}
    </TrackerWrapper>
  );
};

const TrackerWrapper = styled.div`
  width: 45px;
  padding: 0 5px;
`;

Tracker.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Tracker;
