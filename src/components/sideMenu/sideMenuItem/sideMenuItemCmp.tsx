import React from 'react';
import './sideMenuItemCmp.css';

export default class sideMenuItemCmp extends React.PureComponent {
  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}