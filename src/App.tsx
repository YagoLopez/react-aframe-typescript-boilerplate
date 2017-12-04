//todo: link to aframe lib in index.html instead of loading it using import
//todo: add aframe typings or reseach to put in its on file jsx namespace
//todo: probar a eliminar completamente tslint del proyecto
//todo: able to choose to run with or without tslint
//todo: revisar css style boton "enter-vr"
//todo: mejorar el manejo del estado "orbitControls"
//todo: crear this.camera
//todo: añadir react router
//todo: añadir pagina de video
//todo: añadir pagina con controles material design
//todo: usar aframe.js no minificado durante development time
//todo: reducir tamaño de imagenes

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
  orbitControls: string;
}

export default class App extends React.Component<{}, IState> {

  state = {
    orbitControls: 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; rotateSpeed:0.25; minDistance:3; maxDistance:100',
  };

  public componentDidMount() {

    // A-frame events must be defined here. The rest of react events are defined in elements as always

    const buttons = document.querySelectorAll(".position-selector") as HTMLCollection;
    Array.from(buttons).forEach( (button) => {
      button.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        const orbitControls = 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; ' +
          'rotateSpeed:0.25; minDistance:3; maxDistance:100; rotateTo: ' + position;
        // camera.setAttribute('orbit-controls', 'rotateTo', position);
        this.setState({orbitControls: orbitControls})
      });
    });

    const links = document.querySelectorAll('a-link') as HTMLCollection;
    Array.from(links).forEach( (link) => {
      link.addEventListener('mouseenter', (event: any) => {
        event.target.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
      });
      link.addEventListener('mouseleave', (event: any) => {
        event.target.setAttribute('scale', {x: 1, y: 1, z: 1})
      })
    });
  }

  private stopAnimation(): void {
    const orbitControls = 'autoRotate: false; target: #target; enableDamping: true; dampingFactor: 1.5; ' +
      'rotateSpeed:0.25; minDistance:3; maxDistance:100';
    this.setState({orbitControls: orbitControls});
  }

  private startAnimation(): void {
    const orbitControls = 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; ' +
      'rotateSpeed:0.25; minDistance:3; maxDistance:100'
    this.setState({orbitControls: orbitControls});
  }

  private rotateTo(event: any): void {
    const position = event.target.dataset.position;
    const camera = document.getElementById('camera') as any;
    const orbitControls = 'autoRotate: true; target: #target; enableDamping: true; dampingFactor: 1.5; ' +
      'rotateSpeed:0.25; minDistance:3; maxDistance:100; rotateTo: ' + position;
    // camera.setAttribute('orbit-controls', 'rotateTo', position);
    this.setState({orbitControls: orbitControls})
  }

  render() {
    return (
      <div>

        <div className="intro-loader">Loading...</div>

        <div className="buttons">
          <button className="position-selector" data-position="0.17 4.14 2.79">Position 1</button>
          <button className="position-selector" data-position="3.48 0.57 0.15">Position 2</button>
          <button className="position-selector" data-position="-2.89 -2.51 3.20">Position 3</button>
        </div>
        <div className="buttons" style={{marginTop: '52px'}}>
          <button onClick={ () => this.startAnimation() }>Start Animation</button>
          <button onClick={ () => this.stopAnimation() }>Stop Animation</button>
        </div>

        <a-scene id="scene" raycaster="far: 100; objects: [link]" cursor="rayOrigin: mouse" camera-position>

          <a-assets>
            <img id="sky" src="img/1.jpg"/>
            <img id="link1" src="img/sea.jpg"/>
            <img id="link2" src="img/4.jpg"/>
            <img id="link3" src="img/7.jpg"/>
          </a-assets>

          <a-sky src="#sky"></a-sky>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 2 5" orbit-controls={ this.state.orbitControls }/>

          <a-entity id="target">
            <a-box id="box" position="-1 -0.5 -1" rotation="0 45 0" color="#4CC3D9">
              <a-animation attribute="rotation" delay="0" to="0 360 0" dur="5000" repeat="10" direction="alternate"/>
            </a-box>
            <a-cylinder id="cylinder" position="1 -0.5 -1" radius="0.5" height="0.5" color="#FFC65D">
              <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"/>
            </a-cylinder>
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="img/aframeArena.png"/>
            <a-link href="test.html" title="Link 1" position="-3 1 0" image="#link1"/>
            <a-link href="img/4.jpg" title="Link 2" position="0 1 0" image="#link2"/>
            <a-link href="img/7.jpg" title="Link 3" position="3 1 0" image="#link3"/>
          </a-entity>

        </a-scene>
      </div>
    );
  }
}
