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

});