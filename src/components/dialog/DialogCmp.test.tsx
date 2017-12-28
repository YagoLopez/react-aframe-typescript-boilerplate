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
    const component = renderer.create(<Dialog>Dialog Content</Dialog>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});