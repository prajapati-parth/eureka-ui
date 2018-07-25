import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../Card';

const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const ThemedCard = () => {
  return (
    <div>
      <Card title='Header title' theme='blueGradient'>{bodyText}</Card>
      <br />
      <Card title='Header title' theme='greenGradient'>{bodyText}</Card>
    </div>
  )
}

storiesOf('Card', module)
  .add('Default card', () => <Card title='Card title'>{bodyText}</Card>)
  .add('Themed card', () => <ThemedCard />)
  .add('Clickable default card with button', () =>
    <Card title='Card title' click={action('clicked')} buttonText='Read more' showButton>{bodyText}</Card>
  )
  .add('Clickable card with themed button', () =>
    <Card title='Card title' click={action('clicked')} theme='blueGradient' buttonText='Read more' showButton>{bodyText}</Card>
  );