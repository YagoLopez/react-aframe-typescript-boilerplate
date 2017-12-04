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
      button.addEventListener('click', this.rotateTo);
    });
    // debugger
    // const link = document.getElementById('link1') as HTMLAnchorElement;
    // link.addEventListener('click', () => this.onClickLink());
  }


  private stopAnimation(): void {
    this.setState({orbitControls: 'autoRotate: false; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100'})
  }

  private startAnimation(): void {
    this.setState({orbitControls: 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100'})
  }

  private rotateTo(event: any): void {
    const position = event.target.dataset.position;
    (document.querySelector("#camera") as any).setAttribute("orbit-controls", "rotateTo", position);
    // this.stopAnimation();
  }

  private onClickLink(): void {
    // debugger
    // (document.querySelector('a-link') as any).navigate('test.html');
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

        <a-scene raycaster="far: 100; objects: [link];" cursor="rayOrigin: mouse" camera-position>

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
            <a-cylinder id="cylinder" position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D">
              <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"/>
            </a-cylinder>
            <a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"/>
          </a-entity>

          <a-link href="test.html" title="Link 1" position="-3.5 0 -1.0" image="img/sea.jpg" highlighted="true"/>
          <a-link href="img/2.jpg" title="Link 2" position="0 0 -1.0" image="img/2.jpg"/>
          <a-link href="img/7.jpg" title="Link 3" position="3.5 0 -1.0" image="img/7.jpg"/>

        </a-scene>
      </div>
    );
  }
}
