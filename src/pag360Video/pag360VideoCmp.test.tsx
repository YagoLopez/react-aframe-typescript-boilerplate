import 'aframe';
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Pag360VideoCmp} from "./Pag360VideoCmp";


describe('Pag360VideoCmp Component', () => {

  const component = shallow(<Pag360VideoCmp>Dummy content</Pag360VideoCmp>);

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