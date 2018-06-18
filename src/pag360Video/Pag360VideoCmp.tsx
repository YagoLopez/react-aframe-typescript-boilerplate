//todo: crear componente react para incrustar videos 360 grados. Estaria basado en Aframe o en threejs
//todo: open issue en aframe reepo: isPlaying = true inicialmente
import * as React from 'react';
import Loader from "../components/loader/LoaderCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";
import './pag360VideoCmp.css';


export class Pag360VideoCmp extends React.Component<{}, {isPlaying: boolean}> {

  playVideoDelay = 2000;

  // todo: "document.querySelector('a-videosphere').isPlaying" seems not working ("isPlaying" always true)
  public refs: {
    videoEntity: AFrame.Entity,
    sideMenu: SideMenu,
    assets: AFrame.Entity,
    loader: Loader,
    loader2: Loader
  };

  public componentDidMount() {
    this.refs.loader2 && this.refs.loader2.hide();
    this.refs.assets && this.refs.assets.addEventListener('loaded', _ => {
      setTimeout(_ => this.refs.loader.hide(), this.playVideoDelay);
    })
  }

  private playVideo = () => {
    this.refs.loader2.show();
    this.refs.videoEntity.play();
    setTimeout(_ => {
      this.refs.loader2.hide();
      this.playVideoDelay = 0;
    }, this.playVideoDelay);
  };

  private pauseVideo = () => {
    this.refs.videoEntity.pause();
  };

  private openSideMenu = () => {
    this.refs.sideMenu.show();
  };

  public render() {
    return(
      <div>

        <Loader ref="loader">Loading</Loader>

        <Loader ref="loader2">Preparing 360 Video</Loader>

        <SideMenu ref="sideMenu" title="Video 360º" items={ SIDE_MENU_ITEMS } itemActive="2"/>

        <TopMenu onClickMenuBtn={ this.openSideMenu }>
          <a onClick={ this.playVideo } className="top-menu-item player-btn">Play</a>
          <a onClick={ this.pauseVideo } className="top-menu-item player-btn">Pause</a>
        </TopMenu>

        <a-scene>
          <a-assets ref="assets">
            <video id="videoEntity" ref="videoEntity" src="video/360-fractal-4.mp4" preload="auto"/>
          </a-assets>
          <a-camera reverse-mouse-drag="true" />
          <a-videosphere src="#videoEntity" rotation="0 -90 0"/>
        </a-scene>

      </div>
    )
  }
}