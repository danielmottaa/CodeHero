import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '..';

describe('<Pagination />', () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Pagination />);
    expect(tree).toMatchSnapshot();
  });
});
