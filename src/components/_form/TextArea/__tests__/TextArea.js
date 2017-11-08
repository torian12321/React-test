import React    from 'react';
import renderer from 'react-test-renderer';
import TextArea from '../index';

describe('component', () => {
  describe('<TextArea />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <TextArea id='ta' />
      )).toMatchSnapshot();
    });

    it('should render placeholder', () => {
      expect(renderer.create(
        <TextArea id='ta' placeholder='Add your comments' />
      )).toMatchSnapshot();
    });

    it('should render disabled', () => {
      expect(renderer.create(
        <TextArea id='ta' disabled />
      )).toMatchSnapshot();
    });

  });
});