import React    from 'react';
import renderer from 'react-test-renderer';
import ImgCard  from '../index';

describe('component', () => {
  describe('<ImgCard />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <ImgCard src='img.png' />
      )).toMatchSnapshot();
    });

    it('should render with alt text', () => {
      expect(renderer.create(
        <ImgCard src='img.png' alt='image description' />
      )).toMatchSnapshot();
    });

    it('should render with alt text', () => {
      expect(renderer.create(
        <ImgCard src='img.png' alt='image description' caption='caption text' />
      )).toMatchSnapshot();
    });

  });
});