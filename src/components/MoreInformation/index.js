import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import EditHealth from './EditHealth';

const propTypes = {
  skills: PropTypes.array.isRequired,
};
const MoreInformation = ({ skills, onHealthEdit }) => {
  return (
    <Wrapper>
      <EditHealth onHealthEdit={onHealthEdit} />
      <SkillsWrapper>
        {skills.map((obj, idx) => (
          <Typography key={idx} style={{ display: 'inline-block' }}>
            {obj.modifier} - {obj.name}
            <Typography variant="caption" style={{ display: 'inline-block' }}>
              ({obj.ability})
            </Typography>
          </Typography>
        ))}
      </SkillsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  background-color: #fff;
  padding: 20px;
  transition: all 0.3s ease-out;
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 120px;
  width: 60%;
  @media (max-width: 980px) {
    height: 200px;
    width: 70%;
  }
  @media (max-width: 600px) {
    margin-left: inherit;
  }
`;

MoreInformation.propTypes = propTypes;

export default MoreInformation;
