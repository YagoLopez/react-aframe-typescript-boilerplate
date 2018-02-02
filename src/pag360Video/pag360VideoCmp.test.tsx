import 'aframe';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, ShallowWrapper} from 'enzyme';
import {shallowToJson} from "enzyme-to-json";
import {Pag360VideoCmp} from "./Pag360VideoCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('Pag360VideoCmp Component', () => {

  const component = shallow(<Pag360VideoCmp>Dummy content</Pag360VideoCmp>);

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