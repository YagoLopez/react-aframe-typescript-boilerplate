import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from "enzyme-to-json";
import SideMenu from "./SideMenuCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('SideMenu Component', () => {

  const component = shallow(<SideMenu>Dummy content</SideMenu>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideMenu itemActive={null} />, div);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

});