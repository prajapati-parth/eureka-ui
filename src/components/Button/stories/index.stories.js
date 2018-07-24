import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .add('Default button', () => <Button click={action('clicked')} text='Default more' />)
  .add('Gradient button', () => <Button click={action('clicked')} text='Blue gradient' theme='blueGradient'/>);
