import React from 'react';

import { storiesOf } from '@storybook/react';

import { boolean, select, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Styling } from './Styling';

storiesOf('@features/customizing', module)
  .add(
    'Styling',
    withInfo('some description of comp.')(({ store }) => (
      <Styling
        varboolean={boolean('boolean', true)}
        varselect={select('color', 0, 1, 2)}
        vartext={text('initialValue', '10:00')}
        varnumber={number('number', '0')}
        onChange={value => store.set({ value })}
        onBlur={action('onBlur')}
      />
    )),
  )
  .add('Styling10', () => <Styling some={10} />);
