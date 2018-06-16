import 'aframe';
import React, {ReactElement} from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Pag360VideoCmp} from "./Pag360VideoCmp";


describe('Pag360VideoCmp Component', () => {

  const shallowComponent = shallow(<Pag360VideoCmp>Dummy content</Pag360VideoCmp>);

  it('renders without crashing', () => {
    expect(shallowComponent).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(shallowComponent).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(shallowComponent.find('Loader').length).toBe(2);
    expect(shallowComponent.find('TopMenu').length).toBe(1);
    expect(shallowComponent.find('SideMenu').length).toBe(1);
    expect(shallowComponent.find('a-scene').length).toBe(1);
    expect(shallowComponent.find('a-scene').children().length).toBe(3);
  });

});