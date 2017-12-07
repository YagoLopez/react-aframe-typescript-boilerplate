import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PagRoot from './PagRoot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PagRoot />, div);
});
