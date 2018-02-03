import 'aframe';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, ShallowWrapper} from 'enzyme';
import {shallowToJson } from 'enzyme-to-json';
import {PagIndexCmp} from './PagIndexCmp';
Enzyme.configure({ adapter: new Adapter() });


describe('PagIndexCmp Component', () => {

  const component = shallow(<PagIndexCmp history={null}>Mock content</PagIndexCmp>);

  it("is defined", () => {
    expect(component).toBeDefined();
  });

  it('renders without crashing', () => {
    expect(component).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(component.find('Loader').children().length).toBe(1);
    expect(component.find('Dialog').children().length).toBe(5);
    expect(component.find('SideMenu').children().length).toBe(2);
    expect(component.find('TopMenu').children().length).toBe(3);
    expect(component.find('a-scene').children().length).toBe(4);
  });

});

