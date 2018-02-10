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

});