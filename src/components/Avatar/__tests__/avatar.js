import React    from 'react';
import renderer from 'react-test-renderer';
import Avatar   from '../index';

jest.unmock('../index.jsx');

test('Should render Avatar', () => {
  const component = renderer.create(
    <Avatar src='img.png' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});