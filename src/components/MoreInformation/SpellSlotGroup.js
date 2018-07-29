import React from 'react';
import PropTypes from 'prop-types';
import SpellSlot from '../SpellSlot';
import styled from 'styled-components';

const SpellSlotGroup = ({ spellInformation }) => {
  return (
    <SpellStatWrapper>
      {spellInformation.map((obj, idx) => (
        <SpellSlot key={idx} level={obj.level} slots={obj.slots} />
      ))}
    </SpellStatWrapper>
  );
};

const SpellStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
SpellSlotGroup.propTypes = {
  spellInformation: PropTypes.array.isRequired,
};

export default SpellSlotGroup;
