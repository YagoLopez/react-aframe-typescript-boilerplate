/// <reference path="../index.d.ts"/>
//todo: crear componente react para incrustar videos 360 grados. Estaria basado en Aframe o en threejs
import * as React from 'react';

export default class Pag360Video extends React.Component<{}, {}> {

  private video360: HTMLVideoElement;

  constructor(props: {}){
    super(props);
    // Recommended way to create events to get a reference to "this" while debugging
    this.onClickBtnPlay = this.onClickBtnPlay.bind(this);
    this.onClickBtnPause = this.onClickBtnPause.bind(this);
  }

  public componentWillMount() {
  }

  public componentWillUnmount() {
  }

  private onClickBtnPlay() {
    this.video360.play();
  }

  private onClickBtnPause() {
    this.video360.pause();
  }

  public render() {
    return(
      <div>
        <div className="buttons">
          <button onClick={ this.onClickBtnPlay }>Play</button>
          <button onClick={ this.onClickBtnPause }>Pause</button>
        </div>
        <a-scene raycaster="far: 100" cursor="rayOrigin: mouse">
          {/*<a-camera><a-cursor></a-cursor></a-camera>*/}

          <a-assets>
            <video id="video1"
              ref={ (video: HTMLVideoElement) => this.video360 = video }
              src="video/360-aurora.mp4"/>
          </a-assets>

          <a-videosphere id="videoSphere" src="#video1"/>

        </a-scene>
      </div>
    )
  }
}