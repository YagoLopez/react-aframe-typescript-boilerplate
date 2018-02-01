//todo: transitions
//todo: animation

import * as React from 'react';

interface IProps {
  readonly shadowColor?: string;
  readonly shadowDeep?: string;
  readonly children?: any;
  readonly [otherAttrs: string]: any; // Needed to add attributes to react components whitout typescript errors
}

export default class Loader extends React.PureComponent<IProps> {

  private loaderElement: HTMLDivElement;

  private containerStyle: any = {
    zIndex: 11,
    position: 'absolute',
    width: '100%',
    top: '41%',
    textAlign: 'center',
  };

  private contentStyle: any = {
    color: 'black',
    backgroundColor: 'white',
    display: 'block',
    margin: 'auto',
    padding: '20px',
    borderRadius: '4px',
    fontFamily: 'verdana, sans-serif',
    fontSize: 'small',
    width: '70px',
    textAlign: 'center'
  };

  public constructor(props: IProps) {
    super(props);
    const shadowColor = this.props.shadowColor || 'grey';
    const shadowDeep = this.props.shadowDeep || '10';
    this.contentStyle.boxShadow = `${shadowColor} 0 0 ${shadowDeep}px 0`;
  }

  public hide() {
    this.loaderElement.classList.remove('fade-in');
    this.loaderElement.classList.add('fade-out');
    setTimeout( () => {
      this.loaderElement.style.zIndex = '-1';
    }, 1000)
  }

  public show() {
    this.loaderElement.classList.add('fade-in');
  }

  public hideWhen(entity: AFrame.Entity, eventName: string = 'loaded'): void {
    entity && entity.addEventListener(eventName, () => {
      this.hide();
    })
  }

  public render() {
    return(
      <div id="loader-element" ref={ (loader: HTMLDivElement) => this.loaderElement = loader }
        style={ this.containerStyle } className="fade-in">
        <div style={ this.contentStyle }>
          {/* IMPORTANT: loader icon must be preloaded in "index.html" header */}
          <img src="img/history3.svg" style={ {verticalAlign: 'middle'} } />
          <div style={ {paddingTop: '5px'} }>{ this.props.children }</div>
        </div>
      </div>
    )
  }
}