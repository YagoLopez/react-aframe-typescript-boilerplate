import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import PagIndexCmp from './pagIndex/PagIndexCmp';
import Pag2DVideoCmp from "./pag2DVideo/Pag2DVideoCmp";
import Pag3DModel from "./pag3DModel/Pag3DModel";
import Pag360VideoCmp from "./pag360Video/Pag360VideoCmp";
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={ PagIndexCmp }/>
      <Route path="/2dvideo" component ={ Pag2DVideoCmp }/>
      <Route path="/3dmodel" component ={ Pag3DModel }/>
      <Route path="/360video" component ={ Pag360VideoCmp }/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLDivElement
);

// registerServiceWorker();



/*

// hot module reloading
// https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad

declare let module: any;

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={PagRoot}/>
      <Route path="/2dvideo" component={PagVideoCmp}/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLElement);

if (module.hot) {
  module.hot.accept('./pagIndex/PagRoot', () => {
    debugger
    const NextApp = require('./pagIndex/PagRoot').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}
*/
