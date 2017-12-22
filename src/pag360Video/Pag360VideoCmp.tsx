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

  public state = {isPlaying: false};
  public refs: {
    videoEntity: AFrame.Entity,
    sideMenu: SideMenu,
    assets: AFrame.Entity,
    loader: Loader
  };

  public componentDidMount() {
    this.refs.assets.addEventListener('loaded', () => {
      this.refs.loader.hide();
    })
  }

  private playVideo() {
    this.setState({isPlaying: true});
    this.refs.videoEntity.play();
  }

  private pauseVideo() {
    this.setState({isPlaying: false});
    this.refs.videoEntity.pause();
  }

  private togglePlayVideo = () => {
    //todo: revisar
    // Note: "this.videoSphere.isPlaying" seems not to work (it seems "isPlaying" is always true)
    // Thats why it is needed to use "this.state.isPlaying"
    if (!this.state.isPlaying) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }

  private openSideMenu = () => {
    this.refs.sideMenu.show();
  }

  public render() {
    return(
      <div>

        <Loader ref="loader">Loading</Loader>

        <SideMenu ref="sideMenu" title="React + AFrame" items={ SIDE_MENU_ITEMS } itemActive="2"/>

        <TopMenu onClickLeftIcon={ this.openSideMenu }>
          <a onClick={ this.togglePlayVideo.bind(this) } className="top-menu-item">Play</a>
          <a onClick={ this.togglePlayVideo.bind(this) } className="top-menu-item">Pause</a>
        </TopMenu>

        <a-scene>
          <a-assets ref="assets">
            <video id="videoEntity" ref="videoEntity" src="video/360-fractal-4.mp4"/>
          </a-assets>
          <a-camera reverse-mouse-drag="true" />
          <a-videosphere src="#videoEntity" rotation="0 -90 0"/>
        </a-scene>

      </div>
    )
  }
}