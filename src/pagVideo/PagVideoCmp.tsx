//todo: comprobar si se ha cargadoo aframe.js

import * as React from 'react';
import '../../node_modules/aframe-video-controls/dist/aframe-video-controls.js';

declare global {
  namespace JSX {

    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-box'?: any;
      'a-camera'?: any;
      'a-circle'?: any;
      'a-collada-model'?: any;
      'a-cone'?: any;
      'a-cursor'?: any;
      'a-curvedimage'?: any;
      'a-cylinder'?: any;
      'a-dodecahedron'?: any;
      'a-gltf-model'?: any;
      'a-icosahedron'?: any;
      'a-image'?: any;
      'a-light'?: any;
      'a-link'?: any;
      'a-obj-model'?: any;
      'a-octahedron'?: any;
      'a-plane'?: any;
      'a-ring'?: any;
      'a-sky'?: any;
      'a-sound'?: any;
      'a-sphere'?: any;
      'a-tetrahedron'?: any;
      'a-text'?: any;
      'a-torus-knot'?: any;
      'a-torus'?: any;
      'a-triangle'?: any;
      'a-video'?: any;
      'a-videosphere'?: any;
      'a-assets'?: any;
      'a-animation'?: any;
    }
  }
}

interface IState {}

export default class PagVideoCmp extends React.Component<any, any> {

  state = {};

  public componentDidMount() {

  }

  onClickBtnPause = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.pause();
    video2El.pause();
  };

  onClickBtnPlay = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.play();
    video2El.play();
  };

  public render() {
    return (
      <div>
        <button onClick={ this.onClickBtnPlay } style={ {padding: '10px;position:absolute;top:10px;right:10px'} }>Play</button>
        <button onClick={ this.onClickBtnPause } style={ {padding: '10px;position:absolute;top:50px;right:10px'} }>Pause</button>
        <a-scene>

          <a-assets>
            <video id="video1">
              <source type="video/mp4" src="video/echo-hereweare.mp4"/>
            </video>
            <video id="video2">
              <source type="video/mp4" src="video/canguros.mp4"/>
            </video>
            <img id="video-play-image" src="img/play-video-btn.png"/>
            <img id="video-pause-image" src="img/pause-video-btn.png"/>
          </a-assets>

          <a-camera position="0 0.5 1">
            {/*<a-cursor id="cursor" color="yellow"/>*/}
          </a-camera>

          <a-videosphere src="#video2" material="" geometry=""/>

          <a-video src="#video1" position="0 2.5 -1" scale="2 1 0" material="" geometry=""/>

          <a-entity video-controls="src:#video1;distance:1;size:2"/>

        </a-scene>
      </div>
    );
  }
}
