/// <reference path="../index.d.ts"/>
//todo: comprobar si se ha cargadoo aframe.js
//todo: usar parte del video pnau going bang
//todo: usar raycaster para interaccion de raton con video player controls

import * as React from 'react';
import 'aframe-video-controls/dist/aframe-video-controls.js';

interface IState {}

export default class PagVideoCmp extends React.Component<{}, {}> {

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

          <a-videosphere src="#video2"/>

          <a-video src="#video1" position="0 2.5 -1" scale="2 1 0"/>

          <a-entity video-controls="src:#video1;distance:1;size:2"/>

        </a-scene>
        <button onClick={ this.onClickBtnPlay } style={ {padding: '10px;position:absolute;top:10px;right:10px'} }>Play</button>
        <button onClick={ this.onClickBtnPause } style={ {padding: '10px;position:absolute;top:50px;right:10px'} }>Pause</button>
      </div>
    );
  }
}
