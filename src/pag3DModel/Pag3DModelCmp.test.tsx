import 'aframe';
import React from 'react';
import Pag3dModel from "./Pag3DModel";
import TestRenderer from 'react-test-renderer';

describe('<Pag3DModel/>', () => {

  it('Matches snapshot', () => {
    const component = TestRenderer.create(<Pag3dModel>Dummy Content</Pag3dModel>);
    expect(component.toJSON()).toMatchSnapshot();
  });

});