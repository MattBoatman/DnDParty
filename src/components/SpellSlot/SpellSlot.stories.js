import React from 'react';
import { storiesOf } from '@storybook/react';
import SpellSlot from '.';

storiesOf('SpellSlot', module)
  .add('Level 1', () => <SpellSlot level={1} slots={4} />)
  .add('Level 3', () => <SpellSlot level={3} slots={3} />);
