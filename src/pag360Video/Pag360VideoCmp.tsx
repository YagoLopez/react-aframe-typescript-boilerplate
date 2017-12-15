/// <reference path="../index.d.ts"/>
//todo: crear componente react para incrustar videos 360 grados. Estaria basado en Aframe o en threejs
//todo: dialog/over imposed div
//todo: this.state.isPlaying (click to toggle play/pause)
//todo: open issue en aframe reepo: isPlaying = true inicialmente
import * as React from 'react';
import Loader from "../components/loader/LoaderCmp";

export default class Pag360VideoCmp extends React.Component<{}, {isPlaying: boolean}> {

  private video360: HTMLVideoElement;
  public state = {isPlaying: false};

  playVideo() {
    this.setState({isPlaying: true});
    this.video360.play();
  }

  pauseVideo() {
    this.setState({isPlaying: false});
    this.video360.pause();
  }
  constructor(props: {}) {
    super(props);
    // Recommended way to create events to get a reference to "this" while debugging
    this.togglePlayVideo = this.togglePlayVideo.bind(this);
  }

  private togglePlayVideo() {
    // Note: AFrame.Entity.isPlaying seems not to work ("isPlaying = true" when scene is just started)
    // Thats why this imperative way of managin state is needed
    if (this.state.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  public render() {
    return(
      <div>

        <Loader>Loading...</Loader>

        <div className="top-menu">
          <a onClick={ this.togglePlayVideo } className="top-menu-item">Play</a>
          <a onClick={ this.togglePlayVideo } className="top-menu-item">Pause</a>
        </div>

        <a-scene>

          <a-assets>
            <video id="video1"
              ref={ (video: HTMLVideoElement) => this.video360 = video }
              src="video/360-fractal-4.mp4"/>
          </a-assets>

          <a-videosphere id="videoSphere" src="#video1" rotation="0 -90 0"/>

        </a-scene>
      </div>
    )
  }
}