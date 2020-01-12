import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

const GradientButtons = () => {
  return (
    <div>
      <Button click={action('clicked')} text='Blue gradient' theme='blueGradient'/>
      <br />
      <br />
      <Button click={action('clicked')} text='Green gradient' theme='greenGradient'/>
      <br />
      <br />
      <Button click={action('clicked')} text='Pink gradient' theme='pinkGradient'/>
    </div>
  )
}

storiesOf('Button', module)
  .add('Default button', () => <Button click={action('clicked')} text='Default more' />)
  .add('Gradient button', () => <GradientButtons />);
