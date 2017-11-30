import React      from 'react';
import renderer   from 'react-test-renderer';
import MessageBar from '../index';

describe('component', () => {
  describe('<MessageBar />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <MessageBar>Lorem Ipsum</MessageBar>
      )).toMatchSnapshot();
    });

    it('Should render danger type', () => {
      expect(renderer.create(
        <MessageBar type='danger'>Lorem Ipsum</MessageBar>
      )).toMatchSnapshot();
    });

    it('Should render important state', () => {
      expect(renderer.create(
        <MessageBar important>Lorem Ipsum</MessageBar>
      )).toMatchSnapshot();
    });

  });
});
