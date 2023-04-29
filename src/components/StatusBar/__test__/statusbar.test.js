import React from 'react';
import renderer from 'react-test-renderer';
import StatusBar from '..';

describe('<StatusBar />', () => {
  it("renders correctly", () => {
    const tree = renderer.create(<StatusBar />);
    expect(tree).toMatchSnapshot();
  });
});
