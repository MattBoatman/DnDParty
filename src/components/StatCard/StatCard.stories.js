import React from 'react';
import { storiesOf } from '@storybook/react';
import StatCard from '.';

storiesOf('StatCard', module)
  .add('STR', () => <StatCard stat="STR" modifier={5} score={20} />)
  .add('DEX', () => <StatCard stat="DEX" modifier={2} score={14} />)
  .add('CON', () => <StatCard stat="CON" modifier={2} score={14} />)
  .add('INT', () => <StatCard stat="INT" modifier={-1} score={8} />)
  .add('WIS', () => <StatCard stat="WIS" modifier={0} score={10} />)
  .add('CHA', () => <StatCard stat="CHA" modifier={3} score={15} />);
