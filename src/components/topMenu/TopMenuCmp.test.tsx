import * as React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TopMenu from "./TopMenuCmp";


describe('TopMenu Component', () => {

  const component = shallow(<TopMenu>Dummy content</TopMenu>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMenu/>, div);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(component.find('div.top-menu').length).toBe(1);
    expect(component.find('img.top-menu-icon-right').length).toBe(1);
  });

});