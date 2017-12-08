import * as React from 'react';
import {urlComponentConfigObject} from "../componentsAframe/url";

export default class PagModel3d extends React.Component<any, {}> {

  componentWillMount() {
  // Aframe components must be registered before scene be created
    AFRAME.registerComponent('url', urlComponentConfigObject);
  }

  componentWillUnmount() {
    // It is needed to delete the component instance in unmount life-cycle method
    delete AFRAME.components['url'];
  }

  render() {
    return(
      <a-scene raycaster="far: 100" cursor="rayOrigin: mouse">
        {/*<a-camera><a-cursor></a-cursor></a-camera>*/}
        <a-box id="box1" url="http://www.google.com" color="red" position="0 1 -4"></a-box>
      </a-scene>
    )
  }
}