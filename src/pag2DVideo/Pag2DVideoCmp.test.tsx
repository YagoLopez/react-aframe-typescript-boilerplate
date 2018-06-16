import 'aframe';
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Pag2DVideoCmp} from "./Pag2DVideoCmp";


describe('Pag2DVideoCmp Component', () => {

  const component = shallow(<Pag2DVideoCmp>Dummy Content</Pag2DVideoCmp>);

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
    expect(component.find('Loader').length).toBe(1);
    expect(component.find('SideMenu').length).toBe(1);
    expect(component.find('TopMenu').length).toBe(1);
    expect(component.find('a-scene').length).toBe(1);
    expect(component.find('a-scene').children().length).toBe(4);
    expect(component.find('a-assets').length).toBe(1);
    expect(component.find('a-camera').length).toBe(1);
    expect(component.find('a-videosphere').length).toBe(1);
    expect(component.find('a-entity').length).toBe(2);
  });

});
