import React    from 'react';
import renderer from 'react-test-renderer';
import Switch   from '../index';

describe('component', () => {
  describe('<Switch />', () => {

    it('should render correctly', () => {
      expect(renderer.create(
        <Switch id='sw' />
      )).toMatchSnapshot();
    });

    it('should trigger onChange', () => {
      const changeHander = jest.fn();
      const comp = renderer.create(
        <Switch id='sw' onChange={changeHander} />
      ).toJSON();

      comp.children[0].props.onChange();
      expect(changeHander).toBeCalled();
      expect(comp).toMatchSnapshot();
    });



    it('should render checked', () => {
      expect(renderer.create(
        <Switch id='sw' checked />
      )).toMatchSnapshot();
    });

    it('should render texted', () => {
      expect(renderer.create(
        <Switch id='sw' texted />
      )).toMatchSnapshot();
    });

    it('should render disabled', () => {
      expect(renderer.create(
        <Switch id='sw' disabled />
      )).toMatchSnapshot();
    });

  });
});