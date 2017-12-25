import React from 'react';
import ReactDOM from 'react-dom';
import SideMenu from "./SideMenuCmp";
import renderer from 'react-test-renderer';

describe('<SideMenu/>', () => {

  it('Smoke test: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideMenu />, div);
  });

  it('Matches snapshot', () => {
    const componentSnapshot = renderer.create(<SideMenu>Side Menu Content</SideMenu>).toJSON();
    expect(componentSnapshot).toMatchSnapshot();
  });

});