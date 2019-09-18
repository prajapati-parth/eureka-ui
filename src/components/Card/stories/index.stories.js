import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../Card';
import Button from '../../Button';

const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const ThemedCard = () => {
  return (
    <div>
      <Card title='Header title' theme='blueGradient'>{bodyText}</Card>
      <br />
      <Card title='Header title' theme='greenGradient'>{bodyText}</Card>
    </div>
  )
};

const CardBody = () => {
  return <Button text='Card body' click={action('clicked')} />
};

storiesOf('Card', module)
  .add('Default card', () => <Card title='Card title'>{bodyText}</Card>)
  .add('Themed card', () => <ThemedCard />)
  .add('Clickable default card with button', () =>
    <Card title='Card title' click={action('clicked')} buttonText='Read more' showButton>{bodyText}</Card>
  )
  .add('Clickable card with themed button', () =>
    <Card title='Card title' click={action('clicked')} theme='blueGradient' buttonText='Read more' showButton>{bodyText}</Card>
  )
  .add('Card with component body', () => (
    <Card title='Card with body component'>
      <CardBody />
    </Card>
  ))
  .add('Card with badges and timestamp', () =>
    <Card title='Card has badges and timestamp' theme='blueGradient' categories={['Card', 'Button']} timeStamp='25 July, 2018'>{bodyText}</Card>
  )
  .add('Card with image', () => (
    <Card title='Card with body component' img='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Maltese_puppy.jpeg/440px-Maltese_puppy.jpeg'>
      <CardBody />
    </Card>
  ));