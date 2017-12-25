import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './LoaderCmp';
import renderer from 'react-test-renderer';

describe('<Loader/>', () => {

  it('Smoke test: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader/>, div);
  });

  it('Matches snapshot', () => {
    const componentSnapshot = renderer.create(<Loader>Loading</Loader>).toJSON();
    expect(componentSnapshot).toMatchSnapshot();
  });

});