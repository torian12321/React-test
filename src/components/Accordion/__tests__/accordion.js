import React     from 'react';
import renderer  from 'react-test-renderer';
import {shallow} from 'enzyme';
import Accordion from '../index';


it('Should render Accordion', () => {
  const component = renderer.create(
    <Accordion>Accordion content</Accordion>
  );
  let tree = component.toJSON();

  expect(component.toJSON()).toMatchSnapshot();
});