//todo: able to choose to run with or without tslint
import  'aframe';
import * as React from 'react';
import './App.css';

declare global {
  export namespace JSX {

    interface IComponent {
      geometry?: string;
      position?: string;
      rotation?: string;
      material?: string;
      color?: string;
      radius?: string;
      width?: string;
      height?: string;
      [index: string]: any
    }

    interface IntrinsicElements {
      'a-scene': any;
      'a-box'?: IComponent;
      'a-camera'?: IComponent;
      'a-circle'?: IComponent;
      'a-collada-model'?: IComponent;
      'a-cone'?: IComponent;
      'a-cursor'?: IComponent;
      'a-curvedimage'?: IComponent;
      'a-cylinder'?: IComponent;
      'a-dodecahedron'?: IComponent;
      'a-gltf-model'?: IComponent;
      'a-icosahedron'?: IComponent;
      'a-image'?: IComponent;
      'a-light'?: IComponent;
      'a-link'?: IComponent;
      'a-obj-model'?: IComponent;
      'a-octahedron'?: IComponent;
      'a-plane'?: IComponent;
      'a-ring'?: IComponent;
      'a-sky'?: IComponent;
      'a-sound'?: IComponent;
      'a-sphere'?: IComponent;
      'a-tetrahedron'?: IComponent;
      'a-text'?: IComponent;
      'a-torus-knot'?: IComponent;
      'a-torus'?: IComponent;
      'a-triangle'?: IComponent;
      'a-video'?: IComponent;
      'a-videosphere'?: IComponent;
    }
  }
}

interface IState {
  color: string;
  rotation: string;
}

export default class App extends React.Component<{}, IState> {

  state = {color: 'red', rotation: '0 45 0'};

  componentDidMount () {
    console.log('component did mount');
    this.setState({color: 'blue'});
  };

  render() {
    return (
      <a-scene>

        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"/>

        <a-sphere position="0 1.25 -5" radius="1.25" color={this.state.color}/>

        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"/>

        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"/>

        <a-sky src='img/1.jpg' />

      </a-scene>
    );
  }
}
