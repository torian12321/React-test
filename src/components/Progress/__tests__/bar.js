import React    from 'react';
import renderer from 'react-test-renderer';
import Progress from '../index';

describe('component', () => {
  describe('<Progress />', () => {
    describe('Bar', () => {
    
      it('should render correctly', () => {
        expect(renderer.create(
          <Progress />
        )).toMatchSnapshot();
      });

      it('should render 73 progress', () => {
        expect(renderer.create(
          <Progress val={73} />
        )).toMatchSnapshot();
      });

      it('should render small', () => {
        expect(renderer.create(
          <Progress size='sm' />
        )).toMatchSnapshot();
      });

      it('should render info state', () => {
        expect(renderer.create(
          <Progress state='info' />
        )).toMatchSnapshot();
      });

    });
  });
});
