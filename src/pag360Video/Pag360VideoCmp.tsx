/// <reference path="../index.d.ts"/>
//todo: crear componente react para incrustar videos 360 grados. Estaria basado en Aframe o en threejs
//todo: dialog/over imposed div
//todo: this.state.isPlaying (click to toggle play/pause)
//todo: open issue en aframe reepo: isPlaying = true inicialmente
import React from 'react';
import Loader from "../components/loader/LoaderCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";

export default class Pag360VideoCmp extends React.Component<{}, {isPlaying: boolean}> {

  private video360: HTMLVideoElement;
  public state = {isPlaying: false};
  public refs: {video360: HTMLVideoElement, sideMenu: SideMenu};

  playVideo() {
    this.setState({isPlaying: true});
    this.refs.video360.play();
  }

  pauseVideo() {
    this.setState({isPlaying: false});
    this.refs.video360.pause();
  }
  constructor(props: {}) {
    super(props);
    // Recommended way to create events to get a reference to "this" while debugging
    // this.togglePlayVideo = this.togglePlayVideo.bind(this);
  }

  private togglePlayVideo = () => {
    //todo: revisar
    // Note: AFrame.Entity.isPlaying seems not to work ("isPlaying = true" when scene is just started)
    // Thats why this imperative way of managin state is needed
    if (this.state.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  };

  private openSideMenu = () => {
    this.refs.sideMenu.show();
  };

  public render() {
    return(
      <div>

        <Loader>Loading</Loader>

        <SideMenu ref="sideMenu" title="React + AFrame" items={ SIDE_MENU_ITEMS } itemActive="2"/>

        <TopMenu onClickLeftIcon={ this.openSideMenu }>
          <a onClick={ this.togglePlayVideo } className="top-menu-item">Play</a>
          <a onClick={ this.togglePlayVideo } className="top-menu-item">Pause</a>
        </TopMenu>

        <a-scene>
          <a-assets>
            <video id="video1"
              ref="video360"
              src="video/360-fractal-4.mp4"/>
          </a-assets>
          <a-videosphere id="videoSphere" src="#video1" rotation="0 -90 0"/>
        </a-scene>

      </div>
    )
  }
}