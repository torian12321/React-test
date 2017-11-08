import React    from 'react';
import renderer from 'react-test-renderer';
import Link     from '../index';

describe('component', () => {
  describe('<Link />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Link href='https://www.google.ie'>Extenal link</Link>
      )).toMatchSnapshot();
    });

    it('should render preview link', () => {
      expect(renderer.create(
        <Link href='https://www.google.ie' preview>Extenal link</Link>
      )).toMatchSnapshot();
    });

  });
});