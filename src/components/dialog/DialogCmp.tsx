import React from 'react';
import './DialogCmp.css';

interface DialogProps {
  title?: string;
  children?: any;
  [attrs: string]: any;
}

export default class Dialog extends React.PureComponent<DialogProps> {

  private dialogContainer: HTMLDivElement;
  private static cssClassOpen = 'scale-up';
  private static cssClassClosed = 'scale-out-center';

  public componentDidMount() {
    const parentElement = this.dialogContainer && this.dialogContainer.parentElement as HTMLElement;
    parentElement && parentElement.addEventListener('click', () => {
      this.hide(); // Hide dialog when click outside
    });
  }

  public show() {
    this.dialogContainer.style.display = 'flex';
    this.dialogContainer.classList.remove(Dialog.cssClassClosed);
    this.dialogContainer.classList.add(Dialog.cssClassOpen);
  }

  public hide() {
    this.dialogContainer.classList.remove(Dialog.cssClassOpen);
    this.dialogContainer.classList.add(Dialog.cssClassClosed);
  }

  public render() {
    const {title, children} = this.props;
    return (
      <div id="dialog-container" ref={ (dialogContainer: HTMLDivElement) => this.dialogContainer = dialogContainer }
        className="dialog-container">
          <div id="dialog-content" className="dialog-content">
            <div className="dialog-title">{ title }</div>
            { children }
          </div>
      </div>
    )
  }
}