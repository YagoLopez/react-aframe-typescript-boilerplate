import 'aframe';
import React, {ReactElement} from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Pag360VideoCmp} from "./Pag360VideoCmp";


describe('Pag360VideoCmp Component', () => {

  const shallowComponent = shallow(<Pag360VideoCmp>Dummy content</Pag360VideoCmp>);

  it("is defined", () => {
    expect(shallowComponent).toBeDefined();
  });

  it('renders without crashing', () => {
    expect(shallowComponent).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(shallowComponent).toMatchSnapshot();
  });


});