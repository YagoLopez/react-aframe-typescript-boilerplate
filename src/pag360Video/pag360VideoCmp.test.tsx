import 'aframe';
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import {Pag360VideoCmp} from "./Pag360VideoCmp";

describe('<Pag360VideoCmp/>', () => {

  it('Matches snapshot', () => {
    const component = TestRenderer.create(<Pag360VideoCmp>Dummy Content</Pag360VideoCmp>);
    expect(component.toJSON()).toMatchSnapshot();
  });

});