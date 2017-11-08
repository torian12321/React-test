import React    from 'react';
import renderer from 'react-test-renderer';
import Quote    from '../index';

describe('component', () => {
  describe('<Quote />', () => {
    
    it('should render correctly', () => {
      expect(renderer.create(
        <Quote>Lorem ipsum</Quote>
      )).toMatchSnapshot();
    });

    it('should render Autor and Cite', () => {
      expect(renderer.create(
        <Quote author='someone' cite='somewhere'>Lorem ipsum</Quote>
      )).toMatchSnapshot();
    });

  });
});
