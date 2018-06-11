import React from 'react';
import { storiesOf } from '@storybook/react';
import CharacterCard from '.';

storiesOf('CharacterCard', module)
  .add('Basic', () => (
    <CharacterCard  />
  ));