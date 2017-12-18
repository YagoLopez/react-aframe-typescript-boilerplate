import React from 'react';
import './sideMenuTitleCmp.css';

export default class sideMenuTitleCmp extends React.PureComponent {
  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}