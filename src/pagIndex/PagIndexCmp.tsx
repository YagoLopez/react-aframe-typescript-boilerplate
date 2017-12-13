//todo: react loader
//todo: react dialog
//todo: react menu
//todo: probar a hacer menu superior y botones con stencil como componentes
//todo: arreglar lo de que da errores al poner atributos no html5. Por ejemplo <img crossorigin="anonymous">
//todo: cambiar color de theme de chrome android en index.html
//todo: añadir click de mouse (raytracer component) a video 2d control
//todo: hacer un pull request en repositorio de "aframe.d.ts" (tipos de aframe) añadiendo tipos para "THREEJS"
//todo: usar "ref" en <a-camera> a ver si se arregla el funcionamiento de las animaciones
//todo: a ver si se puede simplificar algu usando (bind) en los eventos
//todo: gestionar mejor el estado de la entidad camara
//todo: poner attributos que faltan a <video> en forma de props
//todo: camera position as component state
//todo: probar a eliminar completamente tslint del proyecto
//todo: able to choose to run with or without tslint
//todo: mejorar el manejo del estado "orbitControls"
//todo: añadir pagina con controles material design
//todo: usar aframe.js no minificado durante development time
//todo: reducir tamaño de imagenes
//todo: usar algun objeto 3d no demasiado complejo
//todo: creditos
//todo: usar una imagen de fondo mejor
//todo: notificar al usuario: rueda del raton hace zoom
//todo: hacer test
//todo: convertir la navegacion programatica de react en un componente de aframe
//todo: custom event polyfill
//todo: mouse pointer on <a-link>

/// <reference path="../index.d.ts"/>
import * as React from 'react';
import 'aframe-orbit-controls-component-2/dist/aframe-orbit-controls-component';

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

export default class PagIndexCmp extends React.Component<any, IState> {

  public state = {
    orbitControls: {
      autoRotate: true,
      target: '#entityGroup',
      enableDamping: true,
      dampingFactor: 0.15,
      rotateSpeed: 0.1,
      autoRotateSpeed: 0.25,
      zoomSpeed: 0.1,
      minDistance: 3,
      maxDistance: 100,
    }
  };

  public props: any;

  public componentDidMount() {

    // AFRAME EVENTS must be defined here. The rest of REACT EVENTS are defined in elements as always

    const aHtmlTags = document.querySelectorAll(".btn-rotate") as HTMLCollection;
    Array.from(aHtmlTags).forEach( (button) => {
      button.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        //todo: revisar esto, se producen estados incosistentes
        this.setState( {orbitControls: {rotateTo: position}} )
      });
    });

    const aFrameLinks = document.querySelectorAll('a-link') as HTMLCollection;
    Array.from(aFrameLinks).forEach( (link: HTMLElement) => {
      link.addEventListener('mouseenter', (event: any) => {
        event.target.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
      });
      link.addEventListener('mouseleave', (event: any) => {
        event.target.setAttribute('scale', {x: 1, y: 1, z: 1})
      })
    });
  }

  private objToString(component: Object): string {
    return AFRAME.utils.styleParser.stringify(component);
  }

  private stopAnimation = (): void => {
    this.setState({orbitControls: {autoRotate: false}});
  }

  private startAnimation = (): void => {
    this.setState({orbitControls: {autoRotate: true}});
  }

  private onClickLink1 = (event: Event) => {
    event.preventDefault();
    this.props.history.push('/2dvideo');
  }

  private onClickLink2 = (event: Event) => {
    event.preventDefault();
    this.props.history.push('/3dmodel');
  }

  private onClickLink3 = (event: Event) => {
    event.preventDefault();
    this.props.history.push('/360video');
  }

  public render(): any {
    return (
      <div>

        <div className="loading">Loading...</div>

        <div className="top-menu">
          <a className="btn-rotate top-menu-item" data-position="0.17 4.14 2.79">Position 1</a>
          <a className="btn-rotate top-menu-item" data-position="3.48 0.57 0.15">Position 2</a>
          <a className="btn-rotate top-menu-item" data-position="-2.89 -2.51 3.20">Position 3</a>
          <a onClick={ this.startAnimation } className="top-menu-item">Start Rotation</a>
          <a onClick={ this.stopAnimation } className="top-menu-item">Stop Rotation</a>
        </div>

        <a-scene id="scene" raycaster="far: 100; objects: [link], [url]" cursor="rayOrigin: mouse">

          <a-assets>
            <img id="sky" src="img/1.jpg" attr-crossorigin="anonymous"/>
            <img id="link1" src="img/sea.jpg" attr-crossorigin="anonymous"/>
            <img id="link2" src="img/4.jpg" attr-crossorigin="anonymous"/>
            <img id="link3" src="img/7.jpg" attr-crossorigin="anonymous"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"/>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 1 5"
            orbit-controls={ this.objToString(this.state.orbitControls) }/>

          <a-entity id="entityGroup">
            <a-box id="box" position="-1 -0.5 -1" rotation="0 45 0" color="#4CC3D9">
              <a-animation attribute="rotation" delay="0" to="0 360 0" dur="5000" repeat="10" direction="alternate"/>
            </a-box>
            <a-cylinder id="cylinder" position="1 -0.5 -1" radius="0.5" height="0.5" color="#FFC65D">
              <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"/>
            </a-cylinder>
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="img/aframeArena.png"/>

            <a-link id="link1" image="#link1" onClick={ this.onClickLink1 } href="#" title="Link 1" position="-3 1 0"/>
            <a-link id="link2" image="#link2" onClick={ this.onClickLink2 } href="#" title="360 Video" position="0 1 0"/>
            <a-link id="link3" image="#link3" onClick={ this.onClickLink3 } href="#" title="Link 3" position="3 1 0"/>

          </a-entity>

        </a-scene>
      </div>
    );
  }
}
