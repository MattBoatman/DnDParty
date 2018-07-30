import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ControlledRadioButton from '../../ControlledRadioButton';

const SpellSlot = ({ level, slots }) => {
  return (
    <Wrapper>
      <Typography variant="caption" align="center" gutterBottom>
        Spell Level:{level}
      </Typography>
      {Array.from({ length: slots }, (_, k) => (
        <ControlledRadioButton key={k} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 45px;
  padding: 0 5px;
`;

SpellSlot.propTypes = {
  level: PropTypes.number.isRequired,
  slots: PropTypes.number.isRequired,
};

export default SpellSlot;
