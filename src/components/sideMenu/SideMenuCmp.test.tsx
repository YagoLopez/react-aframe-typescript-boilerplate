import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SideMenu from "./SideMenuCmp";


describe('SideMenu Component', () => {

  const component = shallow(<SideMenu>Dummy content</SideMenu>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideMenu itemActive={null} />, div);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(component.find('div.sideMenuContainer').length).toBe(1);
    expect(component.find('div.sideMenuContent').length).toBe(1);
    expect(component.find('h1.side-menu-title').length).toBe(1);
    expect(component.find('div.side-menu-btn-close').length).toBe(1);
    expect(component.find('div.items-container').length).toBe(1);
    expect(component.find('img.icon-item').length).toBeGreaterThanOrEqual(0);
  });

});