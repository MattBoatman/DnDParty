import React from 'react';
import { storiesOf } from '@storybook/react';
import CharacterCard from '.';

storiesOf('CharacterCard', module).add('Basic', () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
    <CharacterCard />
  </div>
));
