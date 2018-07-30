import React from 'react';
import { storiesOf } from '@storybook/react';
import WeaponTable from '.';

const weapons = [
  {
    id: 1,
    name: 'Grapier',
    proficient: true,
    range: 'Melee',
    toHit: 7,
    damage: '1d8+4',
    damageType: 'Piercing',
    description: 'Touching the hilt turns user purple',
  },
  {
    id: 2,
    name: 'Dagger',
    proficient: false,
    range: 'Melee 20/60ft',
    toHit: 6,
    damage: '1d4+3',
    damageType: 'Piercing',
    description: 'Finesse, light, thrown',
  },
  {
    id: 3,
    name: 'Rapier',
    proficient: true,
    range: 'Melee',
    toHit: 6,
    damage: '1d8+3',
    damageType: 'Piercing',
    description: 'Finesse',
  },
  {
    id: 4,
    name: 'Warhammer',
    proficient: true,
    range: 'Melee',
    toHit: 5,
    damage: '1d8+2',
    damageType: 'Bludgeoning',
    description: 'Versatile (1d10)',
  },
];

storiesOf('WeaponTable', module).add('weapon table', () => (
  <WeaponTable weapons={weapons} />
));
