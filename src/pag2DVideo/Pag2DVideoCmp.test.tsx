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

});
