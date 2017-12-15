//todo: crear un component de react que sea un link con imagen (parecido al componente portal)
//todo: transitions with fade: fade in/out on page load/unload
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
//todo: creditos
//todo: usar una imagen de fondo mejor
//todo: notificar al usuario: rueda del raton hace zoom
//todo: hacer test
//todo: custom event polyfill
//todo: mouse cursor pointer on <a-link>

/// <reference path="../index.d.ts"/>
import * as React from 'react';
import 'aframe-orbit-controls-component-2/dist/aframe-orbit-controls-component';
import Loader from "../components/loader/LoaderCmp";

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
      autoRotate: false,
      target: '#entityGroup',
      enableDamping: true,
      dampingFactor: 0.14,
      rotateSpeed: 0.1,
      autoRotateSpeed: 0.25,
      zoomSpeed: 0.5,
      minDistance: 3,
      maxDistance: 100,
    }
  };

  public props: any;

  public refs: {
    loader: Loader;
  }

  public constructor(props: any) {
    super(props);
    this.onClickLink1 = this.onClickLink1.bind(this);
    this.onClickLink2 = this.onClickLink2.bind(this);
    this.onClickLink3 = this.onClickLink3.bind(this);
  }

  public componentDidMount() {

    // AFRAME Events must be defined in componentDidMount().
    // The others React Events are defined in elements as always

    const aHtmlTags = document.querySelectorAll(".rotate-camera") as HTMLCollection;
    Array.from(aHtmlTags).forEach( (aTag: HTMLAnchorElement) => {
      aTag.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        //todo: revisar esto, se producen estados incosistentes
        this.setState( {orbitControls: {rotateTo: position}} )
      });
    });

    const aFrameLinks = document.querySelectorAll('a-link') as HTMLCollection;
    Array.from(aFrameLinks).forEach( (aLink: AFrame.Entity) => {
      aLink.addEventListener('mouseenter', () => {
        aLink.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
      });
      aLink.addEventListener('mouseleave', () => {
        aLink.setAttribute('scale', {x: 1, y: 1, z: 1})
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
    this.refs.loader.show();
    this.props.history.push('/2dvideo');
  }

  private onClickLink2 = (event: Event) => {
    event.preventDefault();
    this.refs.loader.show();
    this.props.history.push('/360video');
  }

  private onClickLink3 = (event: Event) => {
    event.preventDefault();
    this.refs.loader.show();
    this.props.history.push('/3dmodel');
  }

  loader: any;

  public render() {
    return (
      <div className="fade-in">

        <Loader ref="loader">Loading</Loader>

        <div className="top-menu">
          <a className="top-menu-item rotate-camera" data-position="0.17 4.14 2.79">Position 1</a>
          <a className="top-menu-item rotate-camera" data-position="3.48 0.57 0.15">Position 2</a>
          <a className="top-menu-item rotate-camera" data-position="-2.89 -2.51 3.20">Position 3</a>
          <a onClick={ this.startAnimation } className="top-menu-item">Start Rotation</a>
          <a onClick={ this.stopAnimation } className="top-menu-item">Stop Rotation</a>
        </div>

        <a-scene id="scene" raycaster="far: 100; objects: [link], [url]" cursor="rayOrigin: mouse">

          <a-assets>
            <img id="sky" src="img/1.jpg"/>
            <img id="link1" src="img/sea.jpg"/>
            <img id="link2" src="img/4.jpg"/>
            <img id="link3" src="img/7.jpg"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"/>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 -0.2 5"
            orbit-controls={ this.objToString(this.state.orbitControls) }/>

          <a-entity id="entityGroup">
            <a-box id="box" position="-1 -0.5 -1" rotation="0 45 0" color="#4CC3D9">
              <a-animation attribute="rotation" delay="0" to="0 360 0" dur="5000" repeat="10" direction="alternate"/>
            </a-box>
            <a-cylinder id="cylinder" position="1 -0.5 -1" radius="0.5" height="0.5" color="#FFC65D">
              <a-animation attribute="scale" from="1 1 1" to="2 0.5 1" repeat="50" direction="alternate"/>
            </a-cylinder>
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="img/aframeArena.png"/>

            <a-link id="link1" image="#link1" onClick={ this.onClickLink1 } href="#" title="2D Video" position="-3 1 0"/>
            <a-link id="link2" image="#link2" onClick={ this.onClickLink2 } href="#" title="360 Video" position="0 1 0"/>
            <a-link id="link3" image="#link3" onClick={ this.onClickLink3 } href="#" title="Model Animation" position="3 1 0"/>

          </a-entity>

        </a-scene>
      </div>
    );
  }
}