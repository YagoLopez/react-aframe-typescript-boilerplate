import 'aframe';
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Pag3DModel} from "./Pag3DModel";

describe('Pag3DModel Component', () => {

  const component = shallow(<Pag3DModel>Dummy content</Pag3DModel>);

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
    expect(component.find('a-scene').children().length).toBe(5);
    expect(component.find('a-assets').length).toBe(1);
    expect(component.find('a-plane').length).toBe(1);
    expect(component.find('a-entity').length).toBe(3);
  });

});