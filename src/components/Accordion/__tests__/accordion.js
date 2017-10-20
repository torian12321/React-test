import React     from 'react';
import renderer  from 'react-test-renderer';
import Accordion from '../index';

describe('component', () => {
  describe('<Accordion />', () => {
    it('should render correctly', () => {
      const comp = renderer.create(
        <Accordion>Accordion content</Accordion>
      ).toJSON();

      expect(comp).toMatchSnapshot();
      expect(comp.props.className).toEqual('accordion');      
    });
  });
});
