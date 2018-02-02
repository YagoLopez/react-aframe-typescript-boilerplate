import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from "enzyme-to-json";
import TopMenu from "./TopMenuCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('TopMenu Component', () => {

  const component = shallow(<TopMenu>Dummy content</TopMenu>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMenu/>, div);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

});