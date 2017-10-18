import React    from 'react';
import renderer from 'react-test-renderer';
import Img      from '../index';

jest.unmock('../index.jsx');

test('Should render Img', () => {
  const component = renderer.create(
    <Img src='img.png' alt='image description' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});