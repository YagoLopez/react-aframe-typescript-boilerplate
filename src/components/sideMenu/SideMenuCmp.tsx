//todo: cuando el side menu este abierto añadir un event listener a la escena para que al hacer click fuera del
// side menu (en la escena) se oculte el side menu. Eliminar el event listener (donde?)
//todo: menu state
import React from 'react';
import './SideMenuCmp.css';
const btnCloseSvg = require('./close-btn.svg');

interface IItem {
  readonly name: string;
  readonly url: string;
}

interface IProps {
  readonly title?: any,
  readonly items?: IItem[],
  readonly [otherAttrs: string]: any
}

export default class SideMenu extends React.PureComponent<IProps> {

  private sideMenuContainer: HTMLDivElement;

  // private closeSideMenuEventListener: EventListener;

  public show() {
    //todo: crear event listener: cuando se haga click fuera de side menu en pantalla, cerrar side menu

    this.sideMenuContainer.style.display = 'block';
    this.sideMenuContainer.classList.remove('slide-out-left');
    this.sideMenuContainer.classList.add('slide-in-left');
  }

  public hide() {
    //todo: borrar event listener cread en show()
    this.sideMenuContainer.classList.add('slide-out-left');
    this.sideMenuContainer.classList.remove('slide-in-left');
  }

  public render() {
    return (
      <div ref={ (sideMenuContainer: HTMLDivElement) => this.sideMenuContainer = sideMenuContainer }
        className="sideMenuContainer slide-in-left">
        <div className="sideMenuContent">
          <h1 className="side-menu-title">{ this.props.title }</h1>
          <div className="side-menu-btn-close" onClick={ this.hide.bind(this) }>
            <img src={ btnCloseSvg } className="vertical-center"/>
          </div>
            <div className="items-container">
            {
              this.props.items && this.props.items.map( (item: IItem) => {
                return <div key={ item.name } className="side-menu-item"><a href={ item.url }>{ item.name }</a></div>
              })
            }
            </div>
        </div>
      </div>
    )
  }
  
}
