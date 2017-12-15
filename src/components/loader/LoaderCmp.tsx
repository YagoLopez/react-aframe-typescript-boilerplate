//todo: transitions
//todo: animation
//todo: eliminar codigo imperativo?

import * as React from 'react';

interface IProps {
  shadowColor?: string;
  shadowDeep?: string;
  children?: any;
  [otherAttrs: string]: any; // Needed to add attributes to react component whitout typescript errors
}

export default class Loader extends React.PureComponent<IProps> {

  public props: IProps;

  private loaderElement: HTMLDivElement;

  private containerStyle: any = {
    zIndex: 10,
    position: 'absolute',
    width: '100%',
    top: '45%',
    textAlign: 'center',
  };

  private contentStyle: any = {
    color: 'grey',
    backgroundColor: 'white',
    display: 'block',
    margin: 'auto',
    width: '100px',
    padding: '20px',
    borderRadius: '1px',
    fontFamily: 'sans-serif',
    fontSize: 'large',
  };

  public constructor(props: IProps) {
    super(props);
    const shadowColor = this.props.shadowColor || 'black';
    const shadowDeep = this.props.shadowDeep || '1';
    this.contentStyle.boxShadow = `0 0 ${shadowDeep}px 0 ${shadowColor}`;
  }
  public componentDidMount() {

    const assets = document.querySelector('a-assets') as AFrame.Entity;
    const scene = document.querySelector('a-scene') as AFrame.Entity;

    if(assets) {
      assets.addEventListener('loaded', () => {
        this.hide();
      });
      assets.addEventListener('timeout', () => {
        this.hide();
      })
    } else {
      scene.addEventListener('loaded', () => {
        this.hide();
      })
    }
  }

  public hide() {
    setTimeout( () => {
      this.loaderElement.style.display = 'none';
      // this.loaderElement.classList.add('fade-out');
    }, 200)
  }

  public show() {
    this.loaderElement.style.display = 'block';
  }

  public render() {
    return(
      <div id="loader-element" ref={ (loader: HTMLDivElement) => this.loaderElement = loader }
      style={ this.containerStyle }>
        <div style ={ this.contentStyle }>{ this.props.children }</div>
      </div>
    )
  }
}