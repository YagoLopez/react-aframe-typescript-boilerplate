//todo: hacer componente con raycaster para que entidad sea clicable (ejemplo: btn play videoplayer)
//todo: usar parte del video pnau going bang
//todo: usar raycaster para interaccion de raton con video player controls

/// <reference path="../index.d.ts"/>
import React from 'react';
import 'aframe-video-controls/dist/aframe-video-controls';
import Loader from "../components/loader/LoaderCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";
const burgerIcon = require('../components/topMenu/burger-icon.svg');
const playerBtn: any = {width: '50px'};

interface IProps {
  readonly history?: any;
}

export default class Pag2DVideoCmp extends React.PureComponent<IProps> {

  public refs: {loader: Loader, sideMenu: SideMenu};

  public componentDidMount() {
    const assets = document.getElementById('assets') as AFrame.Entity;
    assets && assets.addEventListener('loaded', () => {
      this.refs.loader.hide();
    })
  }

  private onClickBtnPause = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.pause();
    video2El.pause();
  };

  private onClickBtnPlay = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.play();
    video2El.play();
  };

  private onClickLeftIcon = () => {
    this.refs.sideMenu.show();
  };

  private onClickBurgerIcon = () => {
    this.refs.sideMenu.show();
  };

  public render() {
    return (
      <div>

        <Loader ref="loader">Loader</Loader>

        <SideMenu ref="sideMenu" title="2D/3D Video" items={ SIDE_MENU_ITEMS } itemActive="1" />

        <TopMenu leftIcon={ burgerIcon } onClickMenuBtn={ this.onClickLeftIcon }>
          <a onClick={ this.onClickBtnPlay } className="top-menu-item" style={ playerBtn }>Play</a>
          <a onClick={ this.onClickBtnPause } className="top-menu-item" style={ playerBtn }>Pause</a>
        </TopMenu>

        <a-scene raycaster="far: 100; objects: [src='#video-play-image']; interval: 150" cursor="rayOrigin: mouse">

            <a-assets id="assets">
              <video id="video1"><source type="video/mp4" src="video/echo-hereweare.mp4"/></video>
              <video id="video2"><source type="video/mp4" src="video/canguros.mp4"/></video>
              <img id="video-play-image" src="img/play-video-btn.png"/>
              <img id="video-pause-image" src="img/pause-video-btn.png"/>
            </a-assets>

            <a-camera position="0 0.5 1" reverse-mouse-drag="true"><a-cursor id="cursor" color="yellow"/></a-camera>

            <a-videosphere src="#video2"/>

            <a-entity rotation="0 -45 0">
              <a-video src="#video1" position="0 2.5 -1" scale="2 1 0"/>
              <a-entity video-controls="src:#video1; distance:1; size:2"/>
            </a-entity>

          </a-scene>

      </div>
    )
  }
}
