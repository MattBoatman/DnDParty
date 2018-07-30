import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StatList = ({ children, title, width, mobileHeight }) => {
  return (
    <Wrapper width={width}>
      <Typography variant="title" gutterBottom>
        {title}
      </Typography>
      <SkillsWrapper mobileHeight={mobileHeight}>{children}</SkillsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${props => `${props.width}%`};
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 120px;
  @media (max-width: 980px) {
    height: ${props => `${props.mobileHeight}px`};
  }
  @media (max-width: 600px) {
    margin-left: inherit;
  }
`;

StatList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
  mobileHeight: PropTypes.number.isRequired,
};

export default StatList;
