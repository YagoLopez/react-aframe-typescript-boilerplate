import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Dialog from "./DialogCmp";


describe('Dialog Component', () => {

  const shallowComponent = shallow(<Dialog>Dummy content</Dialog>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dialog />, div);
  });

  it('matches snapshot', () => {
    expect(shallowComponent).toMatchSnapshot();
  });

});