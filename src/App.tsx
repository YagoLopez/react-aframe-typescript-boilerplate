//todo: poner attributos que faltan a <video> en forma de props
//todo: App.tsx en carpeta pagStart
//todo: camera position as component state
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
//todo: usar algun objeto 3d no demasiado complejo
//todo: usar la pagina de los videos de canguros y el reproductor de video
//todo: creditos
//todo: usar una imagen de fondo mejor
//todo: notificar al usuario: rueda del raton hace zoom
//todo: hacer test
//todo: convertir la navegacion programatica de react en un componente de aframe
//todo: custom event polyfill

import * as React from 'react';
import '../node_modules/aframe-orbit-controls-component-2/dist/aframe-orbit-controls-component.js';
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

declare var AFRAME: any;

interface IState {
  orbitControls: {
    autoRotate?: boolean,
    target?: string,
    enableDamping?: boolean,
    dampingFactor?: number,
    rotateSpeed?: number,
    minDistance?: number,
    maxDistance?: number,
    rotateTo?: {x: number, y: number, z: number}
  };
}

export default class App extends React.Component<{}, IState> {

  state = {
    orbitControls: {
      autoRotate: true,
      target: '#entityGroup',
      enableDamping: true,
      dampingFactor: 1.5,
      rotateSpeed: 0.25,
      minDistance: 3,
      maxDistance: 100,
    }
  };

  public componentDidMount() {

    // AFRAME EVENTS must be defined here. The rest of REACT EVENTS are defined in elements as always

    const buttons = document.querySelectorAll(".position-selector") as HTMLCollection;
    Array.from(buttons).forEach( (button) => {
      button.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        this.setState( {orbitControls: {rotateTo: position}} )
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

  private stringify(component: Object): string {
    return AFRAME.utils.styleParser.stringify(component);
  }

  private stopAnimation = (): void => {
    this.setState({orbitControls: {autoRotate: false}});
  }

  private startAnimation = (): void => {
    this.setState({orbitControls: {autoRotate: true}});
  }

  private onClickLink1 = () => {
    (this.props as any).history.push("/video")
  }

  public render(): any {
    return (
      <div>

        <div className="loading">Loading...</div>

        <div className="buttons">
          <button className="position-selector" data-position="0.17 4.14 2.79">Position 1</button>
          <button className="position-selector" data-position="3.48 0.57 0.15">Position 2</button>
          <button className="position-selector" data-position="-2.89 -2.51 3.20">Position 3</button>
          <button onClick={ this.startAnimation }>Start Rotation</button>
          <button onClick={ this.stopAnimation }>Stop Rotation</button>
        </div>

        <a-scene id="scene" raycaster="far: 100; objects: [link]" cursor="rayOrigin: mouse" camera-position>

          <a-assets>
            <img id="sky" src="img/1.jpg"/>
            <img id="link1" src="img/sea.jpg"/>
            <img id="link2" src="img/4.jpg"/>
            <img id="link3" src="img/7.jpg"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"></a-sky>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 2 5"
            orbit-controls={ this.stringify(this.state.orbitControls) }/>

          <a-entity id="entityGroup">
            <a-box id="box" position="-1 -0.5 -1" rotation="0 45 0" color="#4CC3D9">
              <a-animation attribute="rotation" delay="0" to="0 360 0" dur="5000" repeat="10" direction="alternate"/>
            </a-box>
            <a-cylinder id="cylinder" position="1 -0.5 -1" radius="0.5" height="0.5" color="#FFC65D">
              <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"/>
            </a-cylinder>
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="img/aframeArena.png"/>

            <a-link onClick={ this.onClickLink1 } id="link1" href="javascript:o" title="Link 1" position="-3 1 0" image="#link1"/>
            <a-link id="link2" href="index4.html" title="360 Video" position="0 1 0" image="#link2"/>
            <a-link id="link3" href="img/7.jpg" title="Link 2" position="3 1 0" image="#link3"/>

          </a-entity>

        </a-scene>
      </div>
    );
  }
}
