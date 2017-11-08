import React    from 'react';
import renderer from 'react-test-renderer';
import Avatar   from '../index';

describe('component', () => {
  describe('<Avatar />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Avatar src='img.png' />
      )).toMatchSnapshot();
    });

    it('Should render small size', () => {
      expect(renderer.create(
        <Avatar src='img.png' size='sm' />
      )).toMatchSnapshot();
    });

    it('Should render small danger State', () => {
      expect(renderer.create(
        <Avatar src='img.png' state='danger' />
      )).toMatchSnapshot();
    });

  });
});
