import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import PagRoot from './pagRoot/PagRoot';
import PagVideoCmp from "./pagVideo/PagVideoCmp";
import PagModel3d from "./pagModel3d/PagModel3d";
import Pag360Video from "./pag360Video/Pag360Video";
import './globals.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={PagRoot}/>
      <Route path="/video" component={PagVideoCmp}/>
      <Route path="/model3d" component={PagModel3d}/>
      <Route path="/360video" component={Pag360Video}/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLElement);
// registerServiceWorker();


/*

// Intent of hot module reloading
// https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad

declare let module: any;

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={PagRoot}/>
      <Route path="/video" component={PagVideoCmp}/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLElement);

if (module.hot) {
  module.hot.accept('./pagRoot/PagRoot', () => {
    debugger
    const NextApp = require('./pagRoot/PagRoot').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}
*/
