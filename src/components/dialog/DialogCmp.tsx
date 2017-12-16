import React from 'react';
import './DialogCmp.css';


export default class Dialog extends React.PureComponent {

  private dialogContainer: HTMLDivElement;

  public props: {children?: any, [otherAttrs: string]: any};

  public hide() {
    this.dialogContainer.style.display = 'none';
    this.dialogContainer.classList.remove('fade-in');
    this.dialogContainer.classList.add('fade-out');
  }

  public show() {
    this.dialogContainer.style.display = 'block';
    this.dialogContainer.classList.remove('fade-out');
    this.dialogContainer.classList.add('fade-in');
  }

  public render() {
    return (
      <div ref={ (dialogContainer: HTMLDivElement) => this.dialogContainer = dialogContainer }
        className="dialogContainer fade-in">
        <div className="dialogContent">{ this.props.children }</div>
      </div>
    )
  }
  
}