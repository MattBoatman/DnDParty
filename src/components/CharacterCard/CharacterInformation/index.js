import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ControlledRadioButton from '../../ControlledRadioButton';

const stopClick = e => {
  e.stopPropagation();
};
const CharacterInformation = ({
  characterName,
  race,
  classType,
  hitDice,
  level,
}) => {
  return (
    <ContentWrapper>
      <Typography variant="title">{characterName}</Typography>
      <Typography variant="caption">
        {race}/{level} {classType}
      </Typography>
      <HitWrapper>
        <Typography variant="caption">Hit Dice: {hitDice}</Typography>
        <HitDiceWrapper onClick={stopClick}>
          {Array.from({ length: level }, (_, k) => (
            <ControlledRadioButton key={k} />
          ))}
        </HitDiceWrapper>
      </HitWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.span`
  display: flex;
  flex-direction: column;
  padding: 5px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const HitDiceWrapper = styled.span`
  display: flex;
`;

const HitWrapper = styled.span`
  display: flex;
`;

CharacterInformation.propTypes = {
  characterName: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  hitDice: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default CharacterInformation;
