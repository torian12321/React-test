import React    from 'react';
import renderer from 'react-test-renderer';
import Icon     from '../index';

describe('component', () => {
  describe('<Icon />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Icon />
      )).toMatchSnapshot();
    });

    it('Should render a mail icon', () => {
      expect(renderer.create(
        <Icon name='mail' />
      )).toMatchSnapshot();
    });

    it('Should render with grey color', () => {
      expect(renderer.create(
        <Icon color='#DDD' />
      )).toMatchSnapshot();
    });

    it('Should render rotated', () => {
        expect(renderer.create(
          <Icon rotate={180} />
        )).toMatchSnapshot();
      });

  });
});
