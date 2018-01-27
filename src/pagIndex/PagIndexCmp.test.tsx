import 'aframe';
import * as React from 'react';
import {PagIndexCmp} from "./PagIndexCmp";
import TestRenderer from 'react-test-renderer';

describe('<PagIndexCmp/>', () => {

  it('Matches snapshot', () => {
    const component = TestRenderer.create(
      <PagIndexCmp>Pag Index Content</PagIndexCmp>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

});

