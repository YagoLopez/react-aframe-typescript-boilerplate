//todo: sonido inicial

/// <reference path="../index.d.ts"/>
import * as React from 'react';
import 'aframe-extras/dist/aframe-extras.loaders'; // for json loader
import Loader from "../components/loader/LoaderCmp";

enum botStatus {IDLE = 'idle', RUN = 'run', WALK = 'walk', JUMP = 'jump'}

export default class Pag3DModel extends React.Component<{}, {botStatus: botStatus}> {

  public state = {botStatus: botStatus.IDLE};

  // crossFadeDuration: delay between bot animation transition. For example: walk -> run
  private crossFadeDuration = 0.5;

  private orbitControls = {
    autoRotate: true,
    target: '#bot',
    enableDamping: true,
    dampingFactor: 0.15,
    rotateSpeed: 0.15,
    autoRotateSpeed: 0.25,
    zoomSpeed: 0.1,
    minDistance: 0,
    maxDistance: 100
  };

  private onClickBtnRun = () => {
    this.setState({botStatus: botStatus.RUN});
  };

  private onClickBtnIdle = () => {
    this.setState({botStatus: botStatus.IDLE})
  };

  private onClickBtnWalk = () => {
    this.setState({botStatus: botStatus.WALK})
  };

  private onClickBtnJump = () => {
    this.setState({botStatus: botStatus.JUMP})
  };

  public render() {
    return (
      <div>

        <Loader>Loading...</Loader>

        <div className="top-menu">
          <a id="btnIdle" onClick={ this.onClickBtnWalk } className="top-menu-item">Walk</a>
          <a id="btnRun" onClick={ this.onClickBtnRun } className="top-menu-item">Run</a>
          <a id="btnIdle" onClick={ this.onClickBtnJump } className="top-menu-item">Jump</a>
          <a id="btnIdle" onClick={ this.onClickBtnIdle } className="top-menu-item">Stop</a>
        </div>

        <a-scene>

          <a-assets>
            <img id="sky" src="img/square.jpg"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"/>

          <a-entity position="0 1 0">
            <a-entity position="0 -0.5 1.25" camera="userHeight: 0; near: 0.5; fov: 100"
            orbit-controls={ AFRAME.utils.styleParser.stringify(this.orbitControls) }/>
          </a-entity>

          <a-entity id="bot"
            scale="1 1 1"
            position="0 0 0"
            animation-mixer={ `clip: ${this.state.botStatus}; crossFadeDuration: ${this.crossFadeDuration}` }
            json-model="src: models/bot4.json">
          </a-entity>

          <a-plane height="100" width="33" color="#4d672b" rotation="-90 0 0"></a-plane>

        </a-scene>
      </div>
    )
  }
}