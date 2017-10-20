import React    from 'react';
import renderer from 'react-test-renderer';
import Divider  from '../index';

describe('component', () => {
  describe('<Divider />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Divider />
      )).toMatchSnapshot();
    });

    it('Should render a texted version', () => {
      expect(renderer.create(
        <Divider text='Chapter 1' />
      )).toMatchSnapshot();
    });

  });
});
