import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';
import Button from '../Button';

configure({ adapter: new Adapter() });

test('Card should render Button if showButton is true', () => {
  const onCardClick = jest.fn();
  const component = shallow(<Card title='title' click={onCardClick} showButton/>);
  expect(component.find(Button).length).toBe(1);
});

test('It should call the click funtion passed as prop on card and button click', () => {
  const onCardClick = jest.fn();
  const component = shallow(<Card title='title' click={onCardClick} showButton/>);

  component.simulate('click');
  expect(onCardClick.call.length).toBe(1);

  component.find(Button).simulate('click');
  expect(onCardClick.call.length).toBe(1);
});