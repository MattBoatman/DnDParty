import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import EditHealth from '../CharacterCard/EditHealth';

const propTypes = {
  skills: PropTypes.array.isRequired,
};
const MoreInformation = ({ skills, onHealthEdit }) => {
  return (
    <Wrapper>
      <SkillsWrapper>
        {skills.map((obj, idx) => (
          <Typography key={idx} style={{ display: 'inline-block' }}>
            {obj.modifier} - {obj.name}{' '}
            <Typography variant="caption" style={{ display: 'inline-block' }}>
              ({obj.ability})
            </Typography>
          </Typography>
        ))}
      </SkillsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 120px;
  @media (max-width: 980px) {
    height: 200px;
  }
  @media (max-width: 600px) {
    margin-left: inherit;
  }
`;

MoreInformation.propTypes = propTypes;

export default MoreInformation;
