//todo: crear componente react para incrustar videos 360 grados. Estaria basado en Aframe o en threejs
//todo: open issue en aframe reepo: isPlaying = true inicialmente
import React from 'react';
import Loader from "../components/loader/LoaderCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";
import './pag360VideoCmp.css';


export default class Pag360VideoCmp extends React.Component<{}, {isPlaying: boolean}> {

  // todo: "document.querySelector('a-videosphere').isPlaying" seems not to work ("isPlaying" always true)
  public refs: {
    videoEntity: AFrame.Entity,
    sideMenu: SideMenu,
    assets: AFrame.Entity,
    loader: Loader
  };

  public componentDidMount() {
    this.refs.assets && this.refs.assets.addEventListener('loaded', () => {
      this.refs.loader.hide();
    })
  }

  private playVideo = () => {
    this.refs.videoEntity.play();
  }

  private pauseVideo = () => {
    this.refs.videoEntity.pause();
  }

  private openSideMenu = () => {
    this.refs.sideMenu.show();
  }

  public render() {
    return(
      <div>

        <Loader ref="loader">Loading</Loader>

        <SideMenu ref="sideMenu" title="React + AFrame" items={ SIDE_MENU_ITEMS } itemActive="2"/>

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