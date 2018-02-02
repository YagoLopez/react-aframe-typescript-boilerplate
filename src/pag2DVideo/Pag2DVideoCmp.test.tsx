import 'aframe';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, ShallowWrapper} from 'enzyme';
import {shallowToJson} from "enzyme-to-json";
import {Pag2DVideoCmp} from "./Pag2DVideoCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('Pag2DVideoCmp Component', () => {

  const component = shallow(<Pag2DVideoCmp>Dummy Content</Pag2DVideoCmp>);

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
