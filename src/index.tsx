import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import PagVideoCmp from "./pagVideo/PagVideoCmp";
// import registerServiceWorker from './registerServiceWorker';

declare var process : any;
process = {
  env: {NODE_PATH: 'node_modules'}
};

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/video" component={PagVideoCmp}/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLElement);

// registerServiceWorker();
