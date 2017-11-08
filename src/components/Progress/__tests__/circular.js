import React    from 'react';
import renderer from 'react-test-renderer';
import Progress from '../index';

describe('component', () => {
  describe('<Progress />', () => {
    describe('Circular', () => {
    
      it('should render correctly', () => {
        expect(renderer.create(
          <Progress type='circular' />
        )).toMatchSnapshot();
      });

      it('should render 73 progress', () => {
        expect(renderer.create(
          <Progress type='circular' val={73} />
        )).toMatchSnapshot();
      });

      it('should render small', () => {
        expect(renderer.create(
          <Progress type='circular' size='sm' />
        )).toMatchSnapshot();
      });

      it('should render info state', () => {
        expect(renderer.create(
          <Progress type='circular' state='info' />
        )).toMatchSnapshot();
      });

    });
  });
});
