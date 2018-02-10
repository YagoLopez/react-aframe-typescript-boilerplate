import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Loader from "./LoaderCmp";


describe('Loader Component', () => {

  const component = shallow(<Loader>Dummy content</Loader>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader/>, div);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

});