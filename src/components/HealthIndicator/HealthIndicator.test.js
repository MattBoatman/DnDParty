import React from 'react';
// import { shallow } from 'enzyme';
import HealthIndicator from '.';
import Typography from '@material-ui/core/Typography';
import { createShallow } from '@material-ui/core/test-utils';
import LinearProgress from '@material-ui/core/LinearProgress';

const minProps = {
  maxHP: 100,
  currentHP: 23,
};

describe('HealthIndicator', () => {
  let shallow;
  let renderedComponent;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  beforeEach(() => {
    renderedComponent = shallow(<HealthIndicator {...minProps} />);
  });
  it('renders without blowing up', () => {
    expect(renderedComponent.length).toEqual(1);
  });
  it('renders a Typography component with current and max hp shown', () => {
    const result = renderedComponent.find(Typography);
    expect(result.props().children).toEqual('23/100');
  });
  it('renders a LinearProgress a value of 23', () => {
    const result = renderedComponent.find(LinearProgress);
    expect(result.props().value).toEqual(23);
  });
  it('renders a LinearProgress a value of 23 and a buffer of 25', () => {
    renderedComponent = shallow(<HealthIndicator {...minProps} temporaryHP={2} />);
    const result = renderedComponent.find(LinearProgress);
    expect(result.props().valueBuffer).toEqual(25);
  });
});
