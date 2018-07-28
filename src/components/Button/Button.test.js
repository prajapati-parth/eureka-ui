import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });  

test('Button calls buttonClick function om click', () => {
  const onButtonClick = jest.fn();
  const component = shallow(<Button text='click test' click={onButtonClick} />);
  component.simulate('click');

  expect(onButtonClick.call.length).toBe(1);
});