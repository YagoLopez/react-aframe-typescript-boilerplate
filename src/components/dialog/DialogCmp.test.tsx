import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from "./DialogCmp";
import renderer from 'react-test-renderer';

describe('<Dialog/>', () => {

  it('Smoke test: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dialog />, div);
  });

  it('Matches snapshot', () => {
    const componentSnapshot = renderer.create(<Dialog>Dialog Content</Dialog>).toJSON();
    expect(componentSnapshot).toMatchSnapshot();
  });
});