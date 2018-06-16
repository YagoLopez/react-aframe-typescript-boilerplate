import * as React from 'react';
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

  it("renders content", () => {
    expect(component.find('div#loader-element').length).toBe(1);
    expect(component.find('div#loader-element > div').children().length).toBe(2);
    expect(component.find('div#loader-element > div > div').length).toBe(1);
    expect(component.find('img#loader-image').length).toBe(1);
  });

});