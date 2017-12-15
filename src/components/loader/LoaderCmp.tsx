//todo: transitions
//todo: animation

import * as React from 'react';

interface IProps {
  shadowColor?: string;
  shadowDeep?: string;
  children?: any;
  [otherAttrs: string]: any; // Needed to add attributes to react component whitout typescript errors
}

export default class Loader extends React.PureComponent<IProps> {

  public props: IProps;

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

    const loader = document.getElementById('loader') as HTMLDivElement;
    const assets = document.querySelector('a-assets') as AFrame.Entity;
    const scene = document.querySelector('a-scene') as AFrame.Entity;

    const removeLoader = (loader: HTMLDivElement): void => {
      const parentLoader = loader.parentElement as HTMLElement;
      setTimeout( () => {
        parentLoader && parentLoader.removeChild(loader);
        scene.classList.add('fade-in-long');
      }, 150)
    };

    if(assets) {
      assets.addEventListener('loaded', () => {
        removeLoader(loader);
      });
      assets.addEventListener('timeout', () => {
        removeLoader(loader);
      })
    } else {
      scene.addEventListener('loaded', () => {
        removeLoader(loader);
      })
    }
  }

  public render() {
    return(
      <div id="loader" style={ this.containerStyle }>
        <div style ={ this.contentStyle }>{ this.props.children }</div>
      </div>
    )
  }
}