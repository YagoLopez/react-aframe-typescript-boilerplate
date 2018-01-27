import 'aframe';
import * as React from 'react';
import {Pag2DVideoCmp} from "./Pag2DVideoCmp";
import TestRenderer from 'react-test-renderer';

describe('<Pag2DVideoCmp/>', () => {

  it('Matches snapshot', () => {
    const component = TestRenderer.create(<Pag2DVideoCmp>Pag 2DVideo Component Content</Pag2DVideoCmp>);
    expect(component.toJSON()).toMatchSnapshot();
  });

});
