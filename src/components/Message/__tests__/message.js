import React    from 'react';
import renderer from 'react-test-renderer';
import Message  from '../index';

describe('component', () => {
  describe('<Message />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Message>Lorem Ipsum</Message>
      )).toMatchSnapshot();
    });

    it('Should render danger type', () => {
      expect(renderer.create(
        <Message type='danger'>Lorem Ipsum</Message>
      )).toMatchSnapshot();
    });

    it('Should render important state', () => {
      expect(renderer.create(
        <Message important>Lorem Ipsum</Message>
      )).toMatchSnapshot();
    });

  });
});
