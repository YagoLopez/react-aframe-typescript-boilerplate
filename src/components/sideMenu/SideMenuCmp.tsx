//todo: cuando el side menu este abierto añadir un event listener a la escena para que al hacer click fuera del
// side menu (en la escena) se oculte el side menu. Eliminar el event listener (donde?)
//todo: menu state
import React from 'react';
import {ISideMenuItem} from "./SideMenuItems";
import './SideMenuCmp.css';
import {escape} from "querystring";
const btnCloseSvg = require('./icons/close-btn.svg');


interface IProps {
  readonly title?: any,
  readonly items?: ISideMenuItem[],
  readonly itemActive: string,
  readonly [otherAttrs: string]: any
}

export default class SideMenu extends React.PureComponent<IProps> {

  private sideMenuContainer: HTMLDivElement;

  public componentWillMount() {

    if (this.props.items) {
      // Initialize all sideMenuItems to inactive
      this.props.items.forEach( item => {
        item.active = false;
      });

      // If itemActive is a text string => search item by name to activate
      if (isNaN(parseInt(this.props.itemActive))) {
        this.props.items.forEach( item => {
          if (item.name.toLowerCase() === this.props.itemActive.toLowerCase()) {
            item.active = true;
          }
        })
      // If itemActive is a number => use array index to set item as active
      } else {
        this.props.items[this.props.itemActive].active = true;
      }
    }
  }

  public componentDidMount() {
    const parentElement = this.sideMenuContainer.parentElement as HTMLElement;
    parentElement.addEventListener('click', () => {
      this.hide(); // Hide side menu when click outside
    });
  }

  public show() {
    this.sideMenuContainer.style.display = 'block';
    this.sideMenuContainer.classList.remove('slide-out-left');
    this.sideMenuContainer.classList.add('slide-in-left');
  }

  public hide() {
    this.sideMenuContainer.classList.add('slide-out-left');
    this.sideMenuContainer.classList.remove('slide-in-left');
  }

  public render() {
    return (
      <div ref={ (sideMenuContainer: HTMLDivElement) => this.sideMenuContainer = sideMenuContainer }
        className="sideMenuContainer slide-in-left">
        <div className="sideMenuContent">
          <h1 className="side-menu-title">{ this.props.title }</h1>
          <hr/>
          <div className="side-menu-btn-close" onClick={ this.hide.bind(this) }>
            <img src={ btnCloseSvg } className="vertical-center"/>
          </div>
          <div className="items-container">
            {
              this.props.items && this.props.items.map( (item: ISideMenuItem) => {
                return (
                  <div key={ item.name } className={ item.active ? "side-menu-item active" : "side-menu-item" }>
                      <img src={ item.ico } className="icon-item" />
                      <a href={ item.url }>{ item.name }</a>
                  </div>
                )
              })
            }
            <div className="side-menu-item">{ this.props.children }</div>
          </div>
        </div>
      </div>
    )
  }
  
}