import React from 'react';
import renderer from 'react-test-renderer';

import Input from '..';

describe('<Input />', () => {
  it('rating was passed for input', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Input />);
    expect(tree).toMatchSnapshot();
  });
});
