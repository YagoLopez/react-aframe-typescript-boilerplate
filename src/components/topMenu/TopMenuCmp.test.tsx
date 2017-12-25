import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from "./TopMenuCmp";
import renderer from 'react-test-renderer';

describe('<TopMenu/>', () => {

  it('Smoke test: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMenu/>, div);
  });

  it('Matches snapshot', () => {
    const componentSnapshot = renderer.create(<TopMenu>Top Menu Content</TopMenu>).toJSON();
    expect(componentSnapshot).toMatchSnapshot();
  });

});