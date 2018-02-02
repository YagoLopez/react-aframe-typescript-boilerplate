import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, ShallowWrapper} from 'enzyme';
import {shallowToJson} from "enzyme-to-json";
import Loader from "./LoaderCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('Loader Component', () => {

  const component = shallow(<Loader>Dummy content</Loader>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader/>, div);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

});