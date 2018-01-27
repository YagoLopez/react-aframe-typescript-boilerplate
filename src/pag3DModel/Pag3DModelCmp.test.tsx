import 'aframe';
import * as React from 'react';
import {Pag3DModel} from "./Pag3DModel";
import TestRenderer from 'react-test-renderer';

describe('<Pag3DModel/>', () => {

  it('Matches snapshot', () => {
    const component = TestRenderer.create(<Pag3DModel>Dummy Content</Pag3DModel>);
    expect(component.toJSON()).toMatchSnapshot();
  });

});