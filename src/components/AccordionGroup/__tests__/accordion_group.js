import React          from 'react';
import renderer       from 'react-test-renderer';
import Accordion      from '../../Accordion';
import AccordionGroup from '../index';

describe('component', () => {
  describe('<AccordionGroup />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <AccordionGroup className='accordion-group'>
          <Accordion title="Accordion 1">Content 1</Accordion>
          <Accordion title="Accordion 2" isOpen>Content 2</Accordion>
          <Accordion title="Accordion 3" isOpen>Content 3</Accordion>
        </AccordionGroup>
      )).toMatchSnapshot();

    });
  });
});
