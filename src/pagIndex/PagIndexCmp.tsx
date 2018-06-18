//todo: usar service worker
//todo: ampliar test segun code coverage report y enzyme
//todo: mostrar dialogo en pagindexcmp solo una vez (usar localstorage)
//todo: añadir click de mouse (raytracer component) a boton play de video 2d control
//todo: cambiar video de canguros
//todo: reducir tamaño de imagenes
//todo: Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-poly
//todo: comentar en stackoverflow aframe y abrir issue en aframe-extras. hay una dependencia defectuosa
//todo: crear componente button close para dialogo y side menu
//todo: crear un component de react que sea un link con imagen (parecido al componente portal)
//todo: arreglar errores al poner atributos no html5. Por ejemplo <img crossorigin="anonymous">
//todo: gestionar mejor el estado de la entidad camara
//todo: probar a eliminar completamente tslint del proyecto
//todo: creditos
//todo: custom event polyfill
//todo: mouse cursor pointer on <a-link>

import * as React from 'react';
import 'aframe-orbit-controls-component-2/dist/aframe-orbit-controls-component.min';
import Loader from "../components/loader/LoaderCmp";
import Dialog from "../components/dialog/DialogCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";
import './PagIndexCmp.css';
const helpIcon = require('../components/sideMenu/icons/help.svg');
const mouseMove = require('./icons/mouse-move.svg');
const mouseGesture = require('./icons/move-gesture.svg');
const mouseWheel = require('./icons/mouse-wheel.svg');
const zoomGesture = require('./icons/zoom-gesture.svg');
const urlVRviewer = 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=vr+viewer';

interface IState {
  orbitControls: {
    autoRotate?: boolean;
    target?: string;
    enableDamping?: boolean;
    dampingFactor?: number;
    rotateSpeed?: number;
    autoRotateSpeed?: number;
    zoomSpeed?: number;
    minDistance?: number;
    maxDistance?: number;
    invertZoom?: boolean;
    rotateTo?: {x: number, y: number, z: number}
  }
}

interface IProps {history: any, isFirstTimeVisited: boolean}

export class PagIndexCmp extends React.Component<IProps, IState> {

  public state = {
    orbitControls: {
      autoRotate: true,
      target: '#entityGroup',
      enableDamping: true,
      dampingFactor: 0.1,
      rotateSpeed: 0.1,
      autoRotateSpeed: 0.15,
      zoomSpeed: 0.5,
      minDistance: 3,
      maxDistance: 100,
      invertZoom: true,
    }
  };

  public refs: {loader: Loader, scene: AFrame.Entity, dialog: Dialog, sideMenu: SideMenu};
  
  public componentDidMount() {

    // AFrame Events must be defined in componentDidMount().

    const aBtnLinks = document.querySelectorAll('.position-button') as HTMLCollection;
    Array.from(aBtnLinks).forEach( (aBtnLink: HTMLAnchorElement) => {
      aBtnLink.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        //todo: revisar esto, se pueden producir estados inconsistentes
        //El estado deberia contener las coordenadas de rotacion de la camara
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

    this.refs.loader && this.refs.loader.hideWhen(this.refs.scene, 'loaded');

    this.refs.scene && this.refs.scene.addEventListener('click', () => {
      this.stopAnimation();
    });

    if (window.isFirstVisit) {
      this.openDialogDelayed(2000);
      window.isFirstVisit = false;
    }
  }

  private objToString(component: Object): string {
    return AFRAME.utils.styleParser.stringify(component);
  }

  private stopAnimation(): void {
    this.setState({orbitControls: {autoRotate: false}});
  }

  private startAnimation(): void {
    this.setState({orbitControls: {autoRotate: true}});
  }

  private openDialog = () => {
    this.refs.dialog.show();
    this.closeSideMenu();
  }

  private openDialogDelayed = (delayTime: number) => {
    setTimeout( () => {
      this.refs.dialog.show();
    }, delayTime)
  }

  private closeDialog = () => {
    this.refs.dialog.hide();
  }

  private openSideMenu = () => {
    this.refs.sideMenu.show();
  }

  private closeSideMenu = () => {
    this.refs.sideMenu.hide();
  }

  private onClickALink = (event: any, route: string) => {
    event.preventDefault();
    this.props.history.push(route);
  }

  public render() {
    return (
      <div>

        <Loader ref="loader">Loading</Loader>

        <Dialog ref="dialog">
          <div className="dialog-subtitle">This is a demostration of ReactJS, AFrame and TypeScript integration.
            No real functionality has been implemented</div>
          <div className="dialog-subtitle">For a full experience, use a
            <a href={ urlVRviewer } className="dialog-link" target="_blank"> VR HeadSet.</a>
            <div>Yellow circle is the pointer when VR HeadSet is on</div>
          </div>
          <fieldset>
            <legend>Pan</legend>
            <div><img className="icon-info" src={ mouseMove } /> Mouse Pointer</div>
            <div><img className="icon-info" src={ mouseGesture } /> Hand Gesture</div>
          </fieldset>
          <fieldset>
            <legend>Zoom</legend>
            <div><img className="icon-info" src={ mouseWheel } /> Mouse Wheel</div>
            <div><img className="icon-info" src={ zoomGesture } /> Hand Gesture</div>
          </fieldset>
          <div onClick={ this.closeDialog } className="dialog-close-bottom">Close</div>
        </Dialog>

        <SideMenu ref="sideMenu" title="React + AFrame" items={ SIDE_MENU_ITEMS } itemActive="0">
          <img src={ helpIcon } className="icon-item" /><a href="#" onClick={ this.openDialog }>Help</a>
        </SideMenu>

        <TopMenu onClickMenuBtn={ this.openSideMenu }>
          <a className="top-menu-item position-button" data-position="0.17 4.14 2.79">Position 1</a>
          <a className="top-menu-item position-button" data-position="3.48 0.57 0.15">Position 2</a>
          <a className="top-menu-item position-button" data-position="-2.89 -2.51 3.20">Position 3</a>
        </TopMenu>

        <a-scene id="scene" ref="scene" raycaster="far: 100; objects: [link], [url]; interval: 200"
                 cursor="rayOrigin: mouse">

          <a-assets>
            <img id="sky" src="img/1.jpg"/>
            <img id="link1" src="img/sea.jpg"/>
            <img id="link2" src="img/4.jpg"/>
            <img id="link3" src="img/7.jpg"/>
            <img id="aframeArena" src="img/aframeArena.png"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"/>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 -0.2 5"
            orbit-controls={ this.objToString(this.state.orbitControls) }>
            <a-cursor position="0 -0.5 -3"
                    geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.05;"
                    material="color: yellow; shader: flat"
                    raycaster="far: 20; interval: 1000; objects: a-link"/>
          </a-entity>

          <a-entity id="entityGroup">
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="#aframeArena"/>
            <a-link image="#link1" onClick={ () => this.onClickALink(event, '/2dvideo') }
              href="#" title="2D/360 Video" position="-3 1 0"/>
            <a-link image="#link2" onClick={ () => this.onClickALink(event, '/360video') }
              href="#" title="360 Video" position="0 1 0"/>
            <a-link image="#link3" onClick={ () => this.onClickALink(event, '/3dmodel') }
              href="#" title="3D Model Animation" position="3 1 0"/>
          </a-entity>

        </a-scene>
      </div>
    )
  }
}