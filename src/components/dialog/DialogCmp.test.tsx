import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from "enzyme-to-json";
import Dialog from "./DialogCmp";
Enzyme.configure({ adapter: new Adapter() });

describe('Dialog Component', () => {

  const component = shallow(<Dialog>Dummy content</Dialog>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dialog />, div);
  });

  it('matches snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});