/// <reference path="../index.d.ts"/>
import * as React from 'react';
import {urlComponentConfig} from "../componentsAframe/url";

export default class PagModel3d extends React.Component<{}, {}> {

  private videoSphere: HTMLVideoElement = document.getElementById('videoSphere') as HTMLVideoElement;

  public componentWillMount() {
  // Aframe components must be registered before scene be created
    AFRAME.registerComponent('url', urlComponentConfig);
  }

  public componentWillUnmount() {
    // It is needed to delete the component instance in unmount life-cycle method
    delete AFRAME.components['url'];
  }

  private onClickBtnPlay = () => {
    (document.getElementById('video1') as any).play();
  }

  private onClickBtnPause = () => {
    (document.getElementById('video1') as any).pause();
  }

  public render() {
    return(
      <div>
        <button onClick={ this.onClickBtnPlay }>Play</button>
        <button onClick={ this.onClickBtnPause }>Pause</button>
        <a-scene raycaster="far: 100" cursor="rayOrigin: mouse">
            {/*<a-camera><a-cursor></a-cursor></a-camera>*/}
            {/*<a-box color="red" url="http://www.google.com" position="0 2 -3"/>*/}

            <a-assets>
            </a-assets>


            {/*<a-collada-model src="/models/room.dae" position="0 0 -5"></a-collada-model>*/}
            {/*<a-entity obj-model="obj: /models/headset.obj; mtl: /models/headset.mtl" position="0 1 -12" rotation="0, 45, 0">*/}
               {/*<a-animation attribute="rotation"  dur="5000" fill="both" to="0, 360, 0" repeat="indefinite"*/}
                {/*direction="alternate"/>*/}
            {/*</a-entity>*/}
            <a-gltf-model src="/models/CesiumMan.gltf" position="0, 1, -2" rotation="0, -90, 0"/>



          </a-scene>
      </div>
    )
  }
}