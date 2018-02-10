import 'aframe';
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {PagIndexCmp} from './PagIndexCmp';


describe('PagIndexCmp Component', () => {

  const component = shallow(<PagIndexCmp history={null}>Mock content</PagIndexCmp>);

  it("is defined", () => {
    expect(component).toBeDefined();
  });

  it('renders without crashing', () => {
    expect(component).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(component.find('Loader').children().length).toBe(1);
    expect(component.find('Dialog').children().length).toBe(5);
    expect(component.find('SideMenu').children().length).toBe(2);
    expect(component.find('TopMenu').children().length).toBe(3);
    expect(component.find('a-scene').children().length).toBe(4);
  });

});

