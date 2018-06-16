import 'aframe';
import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {PagIndexCmp} from './PagIndexCmp';


describe('PagIndexCmp Component', () => {

  const shallowComponent = shallow(<PagIndexCmp history={null} isFirstTimeVisited={false}>Mock content</PagIndexCmp>);

  it('renders without crashing', () => {
    expect(shallowComponent).toBeInstanceOf(ShallowWrapper);
  });

  it('matches snapshot', () => {
    expect(shallowComponent).toMatchSnapshot();
  });

  it("renders content", () => {
    expect(shallowComponent.find('Loader').children().length).toBe(1);
    expect(shallowComponent.find('Dialog').children().length).toBe(5);
    expect(shallowComponent.find('SideMenu').children().length).toBe(2);
    expect(shallowComponent.find('TopMenu').children().length).toBe(3);
    expect(shallowComponent.find('a-scene').children().length).toBe(4);
  });

});

