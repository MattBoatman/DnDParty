import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import StatList from './StatList';
import SpellSlotGroup from './SpellSlotGroup';

const propTypes = {
  skills: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
  spellInformation: PropTypes.array.isRequired,
};
const MoreInformation = ({ skills, savingThrows, spellInformation }) => {
  return (
    <MoreInformationWrapper>
      {spellInformation && (
        <SpellSlotGroup spellInformation={spellInformation} />
      )}
      <QuickStatWrapper>
        {skills && (
          <StatList title="Skills" stats={skills} width={50}>
            {skills.map((obj, idx) => (
              <div key={idx}>
                <Typography
                  style={{ display: 'inline-block', paddingRight: 5 }}
                >
                  {obj.modifier} - {obj.name}{' '}
                </Typography>
                <Typography
                  variant="caption"
                  style={{ display: 'inline-block' }}
                >
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
      </QuickStatWrapper>
    </MoreInformationWrapper>
  );
};

const QuickStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
`;
const MoreInformationWrapper = styled.div`
  width: 100%;
`;

MoreInformation.propTypes = propTypes;

export default MoreInformation;
