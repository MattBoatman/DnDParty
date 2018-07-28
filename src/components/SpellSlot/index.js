import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import RadioButton from './RadioButton';
import RadioGroup from '@material-ui/core/RadioGroup';

const SpellSlot = ({ level, slots }) => {
  return (
    <Wrapper>
      <Typography variant="caption" align="center" gutterBottom>
        Spell Level: {level}
      </Typography>
      {Array.from({ length: slots }, (_, k) => <RadioButton />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80px;
`;

SpellSlot.propTypes = {
  level: PropTypes.number.isRequired,
  slots: PropTypes.number.isRequired,
};

export default SpellSlot;
