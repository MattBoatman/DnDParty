import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import StatList from './StatList';
import Reminders from './Reminders';

const propTypes = {
  skills: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
  reminders: PropTypes.array.isRequired,
};
const MoreInformation = ({ skills, savingThrows, reminders }) => {
  return (
    <MoreInformationWrapper>
      <QuickStatWrapper>
        {skills && (
          <StatList title="Skills" stats={skills} width={50} mobileHeight={200}>
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
          <StatList
            title="Saving Throws"
            stats={savingThrows}
            width={10}
            mobileHeight={120}
          >
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
        {reminders && (
          <ReminderWrapper>
            <Reminders reminders={reminders} />
          </ReminderWrapper>
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
const ReminderWrapper = styled.div`
  width: 40%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

MoreInformation.propTypes = propTypes;

export default MoreInformation;
