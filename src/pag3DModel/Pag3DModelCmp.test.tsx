import 'aframe';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, ShallowWrapper} from 'enzyme';
import {shallowToJson} from "enzyme-to-json";
import {Pag3DModel} from "./Pag3DModel";
Enzyme.configure({ adapter: new Adapter() });

describe('Pag3DModel Component', () => {

  const component = shallow(<Pag3DModel>Dummy content</Pag3DModel>);

  it("is defined", () => {
    expect(component).toBeDefined();
  });

  it('renders without crashing', () => {
    expect(component).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

});