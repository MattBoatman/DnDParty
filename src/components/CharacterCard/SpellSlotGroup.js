import React from 'react';
import PropTypes from 'prop-types';
import SpellSlot from './SpellSlot';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ControlledRadioButton from '../ControlledRadioButton';

const SpellSlotGroup = ({ spellInformation }) => {
  return (
    <SpellStatWrapper>
      <Typography variant="caption" align="center">
        Concentrating:<ControlledRadioButton />
      </Typography>
      {spellInformation.map((obj, idx) => (
        <SpellSlot key={idx} level={obj.level} slots={obj.slots} />
      ))}
    </SpellStatWrapper>
  );
};

const SpellStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
SpellSlotGroup.propTypes = {
  spellInformation: PropTypes.array.isRequired,
};

export default SpellSlotGroup;
