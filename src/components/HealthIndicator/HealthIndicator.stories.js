import React from 'react';
import { storiesOf } from '@storybook/react';
import HealthIndicator from '.';

storiesOf('HealthIndicator', module)
  .add('Half HP', () => <HealthIndicator maxHP={100} currentHP={50} />)
  .add('Quarter HP', () => <HealthIndicator maxHP={100} currentHP={25} />)
  .add('Over 3/4', () => <HealthIndicator maxHP={17} currentHP={14} />)
  .add('0 HP', () => <HealthIndicator maxHP={100} currentHP={0} />)
  .add('3/4 HP', () => <HealthIndicator maxHP={100} currentHP={75} />)
  .add('3/4 HP with 1/4 temp', () => (
    <HealthIndicator maxHP={100} currentHP={75} temporaryHP={25} />
  ))
  .add('Half HP with temporary hp', () => (
    <HealthIndicator maxHP={100} currentHP={50} temporaryHP={25} />
  ));
