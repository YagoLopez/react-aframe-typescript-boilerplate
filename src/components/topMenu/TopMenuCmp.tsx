import React from 'react';
import './TopMenuCmp.css';
const leftIconSvg = require('./burger-icon.svg');

interface IProps {
  readonly leftIcon?: string;
  readonly onClickLeftIcon?: Function;
  readonly [attrs: string]: any;
}

export default class TopMenu extends React.PureComponent<IProps> {

  private onClickLeftIcon(): void {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon();
  }

  public render(){
    return (
      <div className="top-menu">
        <img src={ this.props.leftIcon || leftIconSvg } className="top-menu-icon"
          onClick={ this.onClickLeftIcon.bind(this) }/>
        { this.props.children }
      </div>
    )
  }
}