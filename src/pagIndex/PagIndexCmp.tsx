//todo: test con jest
//todo: crear button close component para dialogo y side menu
//todo: notificar al usuario manejo de controles: rueda del raton hace zoom, etc. en cuadro de dialogo
//todo: crear jerarquia de componentes (usar herencia): dialog, sideMenu, loader a partir de un componente base abstracto
//todo: crear un component de react que sea un link con imagen (parecido al componente portal)
//todo: arreglar lo de que da errores al poner atributos no html5. Por ejemplo <img crossorigin="anonymous">
//todo: cambiar color de theme de chrome android en index.html (color de barra superior de chrome android)
//todo: añadir click de mouse (raytracer component) a boton play de video 2d control
//todo: gestionar mejor el estado de la entidad camara
//todo: poner attributos que faltan a <video> en forma de props
//todo: camera position as component state
//todo: probar a eliminar completamente tslint del proyecto
//todo: able to choose to run with or without tslint
//todo: mejorar el manejo del estado "orbitControls"
//todo: reducir tamaño de imagenes
//todo: creditos
//todo: usar una imagen de fondo mejor
//todo: hacer test
//todo: custom event polyfill
//todo: mouse cursor pointer on <a-link>

/// <reference path="../index.d.ts"/>
import React from 'react';
import 'aframe-orbit-controls-component-2/dist/aframe-orbit-controls-component';
import Loader from "../components/loader/LoaderCmp";
import Dialog from "../components/dialog/DialogCmp";
import SideMenu from "../components/sideMenu/SideMenuCmp";
import TopMenu from "../components/topMenu/TopMenuCmp";
import {SIDE_MENU_ITEMS} from "../components/sideMenu/SideMenuItems";
const helpIcon = require('../components/sideMenu/icons/help.svg');

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

export default class PagIndexCmp extends React.Component<{}, IState> {

  public state = {
    orbitControls: {
      autoRotate: true,
      target: '#entityGroup',
      enableDamping: true,
      dampingFactor: 0.14,
      rotateSpeed: 0.1,
      autoRotateSpeed: 0.25,
      zoomSpeed: 0.5,
      minDistance: 3,
      maxDistance: 100
    }
  };

  public refs: {loader: Loader, scene: AFrame.Entity, dialog: Dialog, sideMenu: SideMenu};

  public componentDidMount() {

    // AFRAME Events must be defined in componentDidMount().
    // The others React Events are defined in React elements as always

    const aHtmlTags = document.querySelectorAll(".rotate-camera") as HTMLCollection;
    Array.from(aHtmlTags).forEach( (aTag: HTMLAnchorElement) => {
      aTag.addEventListener('click', (event: any) => {
        const position = event.target.dataset.position;
        //todo: revisar esto, se producen estados incosistentes
        //El estado deberia de contener las coordenadas de rotacion de la camara
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

    this.refs.loader.hideWhen(this.refs.scene, 'loaded');

    // this.openDialogDelayed(2000);

    this.refs.scene.addEventListener('click', () => {
      this.stopAnimation();
    })

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

  public render() {
    return (
      <div>

        <Loader ref="loader">Loading</Loader>

        <Dialog ref="dialog">
          Dialog
          <br/><br/>
          <div onClick={ this.closeDialog } style={ {cursor: 'pointer', textDecoration: 'underline'} }>
            Close
          </div>
        </Dialog>

        {/*todo: definir SIDE_MENU_ITEMS aqui. de esta forma puedo definir la funcion*/}
        {/*openDialog en sideMenuItem*/}
        <SideMenu ref="sideMenu" title="React + AFrame" items={ SIDE_MENU_ITEMS } itemActive="0">
          <img src={ helpIcon } className="icon-item" /><a href="#" onClick={ this.openDialog }>Help</a>
        </SideMenu>

        <TopMenu onClickLeftIcon={ this.openSideMenu }>
          <a className="top-menu-item rotate-camera" data-position="0.17 4.14 2.79">Position 1</a>
          <a className="top-menu-item rotate-camera" data-position="3.48 0.57 0.15">Position 2</a>
          {/*<a className="top-menu-item rotate-camera" data-position="-2.89 -2.51 3.20">Position 3</a>*/}
          <a className="top-menu-item" onClick={ this.openDialog }>Dialog</a>
        </TopMenu>

        <a-scene id="scene" ref="scene" raycaster="far: 100; objects: [link], [url]; interval: 200" cursor="rayOrigin: mouse">

          <a-assets>
            <img id="sky" src="img/1.jpg"/>
            <img id="link1" src="img/sea.jpg"/>
            <img id="link2" src="img/4.jpg"/>
            <img id="link3" src="img/7.jpg"/>
            <img id="aframeArena" src="img/aframeArena.png"/>
          </a-assets>

          <a-sky src="#sky" rotation="0 -90 0"/>

          <a-entity id="camera" camera="fov: 80; zoom: 1" position="0 -0.2 5"
            orbit-controls={ this.objToString(this.state.orbitControls) }/>

          <a-entity id="entityGroup">
            <a-plane position="0 -1 0" rotation="-90 0 0" width="6" height="6" src="#aframeArena"/>
            <a-link id="link1" image="#link1" href="#/2dvideo" title="2D Video" position="-3 1 0"/>
            <a-link id="link2" image="#link2" href="#/360video" title="360 Video" position="0 1 0"/>
            <a-link id="link3" image="#link3" href="#/3dmodel" title="3D Model Animation" position="3 1 0"/>
          </a-entity>

        </a-scene>
      </div>
    );
  }
}