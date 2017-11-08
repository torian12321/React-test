import React    from 'react';
import renderer from 'react-test-renderer';
import Rating   from '../index';

describe('component', () => {
  describe('<Rating />', () => {
    
    it('should render correctly', () => {
      const comp = renderer.create(
        <Rating />
      ).toJSON();

      expect(comp).toMatchSnapshot();
      expect(comp.children).toHaveLength(5);
      expect(comp.props.className).toEqual('rating');
    });

    it('should render 7 starts', () => {
      const comp = renderer.create(
        <Rating val={5} of={7} />
      ).toJSON();

      expect(comp).toMatchSnapshot();
      expect(comp.children).toHaveLength(7);
    });

    it('should render hearts', () => {
      expect(renderer.create(
        <Rating icon='heart' />
      )).toMatchSnapshot();
    });

  });
});
