//todo: unificar en este fichero estilos css
import * as React from 'react';
import './LoaderCmp.css';


export default class Loader extends React.PureComponent {

  public componentWillMount() {

    // registrar aqui componente en aframe
    AFRAME.registerComponent('loader', {
      schema: {'default': ''},
      /**
       * Do not use arrow function here
       * "this: any" is needed for the typescript compiler
       * https://github.com/Microsoft/TypeScript/issues/16016#issuecomment-303462193
       */
      init: function(this: any) {
        const loader = document.getElementById('loader') as HTMLDivElement;
        // Wait a few miliseconds to remove loader. For a better visual experience with transition
        //todo: fade transition aqui
        this.el.addEventListener('loaded', () => {
          setTimeout( () => {
            (loader.parentElement as HTMLDivElement).removeChild(loader);
          }, 100)
        })
      },
      /**
       * It is important unregister/delete component from aframe to avoid error on page reload
       */
      remove: function (this: any) {
        delete AFRAME.components[this.attrName];
      }
    });
  }

  public render() {
    return(
      <div id="loader" className="loader2-container">
        <div className="loader2-content">{ (this as any).props.children }</div>
      </div>
    )
  }
}