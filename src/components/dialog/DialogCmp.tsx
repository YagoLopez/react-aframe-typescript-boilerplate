import React from 'react';
import './DialogCmp.css';

export default class Dialog extends React.PureComponent<{children?: any, [attrs: string]: any}> {

  private dialogContainer: HTMLDivElement;

  /* Css class name for animation when showing Dialog */
  private static classShowAnimation = 'scale-in-ver-center';

  /* Css class name for animation when hidding Dialog */
  private static classHideAnimation = 'scale-out-vertical';

  public hide() {
    this.dialogContainer.classList.remove(Dialog.classShowAnimation);
    this.dialogContainer.classList.add(Dialog.classHideAnimation);
  }

  public show() {
    this.dialogContainer.style.display = 'block';
    this.dialogContainer.classList.remove(Dialog.classHideAnimation);
    this.dialogContainer.classList.add(Dialog.classShowAnimation);
  }

  public render() {
    return (
      <div ref={ (dialogContainer: HTMLDivElement) => this.dialogContainer = dialogContainer }
        className="dialogContainer">
        <div className={ `dialogContent ${Dialog.classShowAnimation}` }>{ this.props.children }</div>
      </div>
    )
  }
}