import React     from 'react';
import renderer  from 'react-test-renderer';
import Accordion from '../index';

// Allow 'refs' to be used
function createNodeMock(element) {
  if (element.type === 'div') {
    return {
      clientHeight() {}
    };
  }
  return null;
}


describe('component', () => {
  describe('<Accordion />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Accordion>Accordion content</Accordion>
      ).toJSON()).toMatchSnapshot();
    });

    it('should render with custom title', () => {
      const comp = renderer.create(
        <Accordion title='Open me'>Accordion content</Accordion>
      ).toJSON();

      expect(comp).toMatchSnapshot();
      expect(comp.children[0].children).toContain('Open me');
    });

    it('should render open initially', () => {
      expect(renderer.create(
        <Accordion isOpen>Accordion content</Accordion>
      )).toMatchSnapshot();   
    });

    it('should allow to click the header', () => {
      const comp = renderer.create(
        <Accordion>Accordion content</Accordion>,
        { createNodeMock }
      ).toJSON();

      comp.children[0].props.onClick();
      expect(comp).toMatchSnapshot();
    });

  });
});
