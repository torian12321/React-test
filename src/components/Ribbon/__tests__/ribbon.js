import React    from 'react';
import renderer from 'react-test-renderer';
import Ribbon   from '../index';

describe('component', () => {
  describe('<Ribbon />', () => {
    
    it('should render correctly', () => {
      expect(renderer.create(
        <Ribbon>Lorem ipsum</Ribbon>
      )).toMatchSnapshot();
    });

  });
});
