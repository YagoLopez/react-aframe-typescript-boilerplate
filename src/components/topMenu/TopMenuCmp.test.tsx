import React from 'react';
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

});