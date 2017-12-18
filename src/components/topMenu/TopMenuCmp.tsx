import React from 'react';
import './TopMenuCmp.css';
import any = jasmine.any;

interface IProps {
  leftIcon?: string;
  onClickLeftIcon?: Function;
  [attrs: string]: any;
}

export default class TopMenu extends React.PureComponent<IProps> {

  private onClickLeftIcon(): void {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon();
  }

  public render(){
    return (
      <div className="top-menu">
        <img src={ this.props.leftIcon } className="top-menu-icon" onClick={ this.onClickLeftIcon.bind(this) }/>
        { this.props.children }
      </div>
    )
  }
}