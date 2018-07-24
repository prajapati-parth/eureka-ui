import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../Card';

const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const CardWithMargin = () => {
  return (
    <div>
      <Card title='Header title' body={bodyText} theme='blueGradient' click={action('clicked')} />
      <br />
      <Card title='Header title' body={bodyText} theme='greenGradient' click={action('clicked')} />
    </div>
  )
}

storiesOf('Card', module)
  .add('Default card', () => <Card title='Card title' body={bodyText} click={action('clicked')} />)
  .add('Card with top margin', () => <CardWithMargin />);