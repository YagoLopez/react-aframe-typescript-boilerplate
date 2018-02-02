import React from 'react';
import './TopMenuCmp.css';
const burgerIconSvg = require('./burger-icon.svg');
const leftArrowSvg = require('./left-arrow.svg');


export default class TopMenu extends React.PureComponent {

  public props: {
    leftIcon?: string;
    onClickMenuBtn?: Function;
    children?: any;
    [attrs: string]: any;
  };

  private onClickMenuBtn = () => {
    this.props.onClickMenuBtn && this.props.onClickMenuBtn();
  };

  private onClickBtnGoBack = () => {
    window.history.back();
  };

  public render(){
    //todo: refactor
    // Not root route => Render top left arrow button
    if (window.location.hash !== "#/") {
      return(
        <div className="top-menu">
          <img src={ leftArrowSvg } className="top-menu-icon-left" onClick={ this.onClickBtnGoBack }/>
          { this.props.children }
          <img src={ this.props.leftIcon || burgerIconSvg } className="top-menu-icon-right"
            onClick={ this.onClickMenuBtn }/>
        </div>
      )
      // In root route => not to render top left arrow button
    } else {
      return (
        <div className="top-menu">
          { this.props.children }
          <img src={ this.props.leftIcon || burgerIconSvg } className="top-menu-icon-right"
            onClick={ this.onClickMenuBtn }/>
        </div>
      )
    }
  }
}