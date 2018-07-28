import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import StatList from './StatList';

const propTypes = {
  skills: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
};
const MoreInformation = ({ skills, savingThrows }) => {
  return (
    <Wrapper>
      {skills && (
        <StatList title="Skills" stats={skills} width={50}>
          {skills.map((obj, idx) => (
            <div key={idx}>
              <Typography style={{ display: 'inline-block', paddingRight: 5 }}>
                {obj.modifier} - {obj.name}{' '}
              </Typography>
              <Typography variant="caption" style={{ display: 'inline-block' }}>
                ({obj.ability})
              </Typography>
            </div>
          ))}
        </StatList>
      )}
      {savingThrows && (
        <StatList title="Saving Throws" stats={savingThrows} width={40}>
          {savingThrows.map((obj, idx) => (
            <div key={idx}>
              <Typography style={{ display: 'inline-block' }}>
                {obj.modifier} -{' '}
              </Typography>
              <Typography style={{ display: 'inline-block' }}>
                {obj.ability}
              </Typography>
            </div>
          ))}
        </StatList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

MoreInformation.propTypes = propTypes;

export default MoreInformation;
