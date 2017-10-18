import React    from 'react';
import renderer from 'react-test-renderer';
import Loading  from '../index';

jest.unmock('../index.jsx');

test('Should render Loading', () => {
  const component = renderer.create(
    <Loading />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});