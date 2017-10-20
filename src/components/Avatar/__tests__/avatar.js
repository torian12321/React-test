import React    from 'react';
import renderer from 'react-test-renderer';
import Avatar   from '../index';

jest.unmock('../index.jsx');

it('Should render Avatar', () => {
  const comp = renderer.create(
    <Avatar src='img.png' />
  );
  
  expect(comp).toMatchSnapshot();
});