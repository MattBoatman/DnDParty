import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const QuickStats = ({ quickStats }) => {
  return (
    <ContentWrapper>
      {quickStats.map((obj, idx) => (
        <StatWrapper key={idx}>
          <Typography variant="subheading" align="center">
            {obj.value}
          </Typography>
          <Typography variant="caption" align="center">
            {obj.type}
          </Typography>
        </StatWrapper>
      ))}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StatWrapper = styled.div`
  padding: 0 5px;
  width: 65px;
`;

QuickStats.propTypes = {
  quickStats: PropTypes.array.isRequired,
};

export default QuickStats;
