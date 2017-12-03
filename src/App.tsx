//todo: link to aframe lib in index.html instead of loading it using import
//todo: add aframe typings or reseach to put in its on file jsx namespace
//todo: probar a eliminar completamente tslint del proyecto
//todo: able to choose to run with or without tslint
//todo: revisar css style boton "enter-vr"


import * as React from 'react';
import './App.css';

declare global {
  namespace JSX {

    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-box'?: any;
      'a-camera'?: any;
      'a-circle'?: any;
      'a-collada-model'?: any;
      'a-cone'?: any;
      'a-cursor'?: any;
      'a-curvedimage'?: any;
      'a-cylinder'?: any;
      'a-dodecahedron'?: any;
      'a-gltf-model'?: any;
      'a-icosahedron'?: any;
      'a-image'?: any;
      'a-light'?: any;
      'a-link'?: any;
      'a-obj-model'?: any;
      'a-octahedron'?: any;
      'a-plane'?: any;
      'a-ring'?: any;
      'a-sky'?: any;
      'a-sound'?: any;
      'a-sphere'?: any;
      'a-tetrahedron'?: any;
      'a-text'?: any;
      'a-torus-knot'?: any;
      'a-torus'?: any;
      'a-triangle'?: any;
      'a-video'?: any;
      'a-videosphere'?: any;
      'a-assets'?: any;
      'a-animation'?: any;
    }
  }
}

interface IState {
  cameraPosition: string;
  orbitControls: string;
}

export default class App extends React.Component<{}, IState> {

  state = {
    cameraPosition: '0 2 5',
    orbitControls: 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100'
  };


  public componentDidMount() {
    console.log('component did mount');
    const buttons = document.querySelectorAll(".position-selector") as HTMLCollection;
    Array.from(buttons).forEach( (button) => {
      button.addEventListener("click", this.rotateTo);
    });
  }

  private rotateTo(event: any): void {
    const position = event.target.dataset.position;
    (document.querySelector("#camera") as any).setAttribute("orbit-controls", "rotateTo", position);
  }

  private stopAnimation() {
    this.setState({orbitControls: 'autoRotate: false; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100'})
  }

  private startAnimation() {
    // console.log('orbit controls before animation', this.state.orbitControls);
    this.setState({orbitControls: 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100'})
    // console.log('orbit controls after animation', this.state.orbitControls);
  }

  render() {
    return (
      <div>
        <div className="buttons">
          <button className="position-selector" data-position="0.17 4.14 2.79">Position 1</button>
          <button className="position-selector" data-position="3.48 0.57 0.15">Position 2</button>
          <button className="position-selector" data-position="-2.89 -2.51 3.20">Position 3</button>
          <button onClick={ () => this.stopAnimation() }>Stop Animation</button>
          <button onClick={ () => this.startAnimation() }>Start Animation</button>
          <div>Camera position: { this.state.cameraPosition }</div>
        </div>
        <a-scene>

        <a-assets>
          <img id="sky" src="img/1.jpg"/>
        </a-assets>

        <a-sky src="#sky"></a-sky>

        <a-entity
          id="camera"
          camera="fov: 80; zoom: 1;"
          position={ this.state.cameraPosition }
          orbit-controls={ this.state.orbitControls }>
        </a-entity>

        <a-entity id="target">
          <a-box id="box" position="-1 0.5 1" rotation="0 45 0" color="#4CC3D9">
            <a-animation attribute="rotation" delay="0" to="0 360 0" dur="5000" repeat="10" direction="alternate"/>
          </a-box>
          <a-sphere id="sphere" position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-cylinder id="cylinder" position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D">
            <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"></a-animation>
          </a-cylinder>
          <a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        </a-entity>
        
      </a-scene>
      </div>
    );
  }
}
