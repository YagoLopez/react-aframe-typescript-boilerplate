import React from 'react';
import ReactDOM from 'react-dom';
import PagIndexCmp from './PagIndexCmp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PagIndexCmp />, div);
});
