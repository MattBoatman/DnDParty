import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const CharacterInformation = ({ characterName, race, classType }) => {
  return (
    <ContentWrapper>
      <Typography variant="title">{characterName}</Typography>
      <Typography variant="caption">
        {race} {classType}
      </Typography>
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

CharacterInformation.propTypes = {
  characterName: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
};

export default CharacterInformation;
