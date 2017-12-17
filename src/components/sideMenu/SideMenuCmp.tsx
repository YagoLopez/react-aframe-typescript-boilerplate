//todo: cuando el side menu este abierto añadir un event listener a la escena para que al hacer click fuera del
// side menu (en la escena) se oculte el side menu. Eliminar el event listener (donde?)
//todo: menu state
import React from 'react';
import './SideMenuCmp.css';


export default class SideMenu extends React.PureComponent {

  private sideMenuContainer: HTMLDivElement;

  public props: {children?: any, [otherAttrs: string]: any};

  public hide() {
    this.sideMenuContainer.classList.add('slide-out-left');
    this.sideMenuContainer.classList.remove('slide-in-left');
  }

  public show() {
    this.sideMenuContainer.style.display = 'block';
    this.sideMenuContainer.classList.remove('slide-out-left');
    this.sideMenuContainer.classList.add('slide-in-left');
  }

  public render() {
    return (
      <div ref={ (sideMenuContainer: HTMLDivElement) => this.sideMenuContainer = sideMenuContainer }
        className="sideMenuContainer slide-in-left">
        <div className="sideMenuContent">
          { this.props.children }
          <div className="closeBtn" onClick={ this.hide.bind(this) }>X</div>
        </div>
      </div>
    )
  }
  
}
