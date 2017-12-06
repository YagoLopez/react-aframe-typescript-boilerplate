import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import PagVideoCmp from "./pagVideo/PagVideoCmp";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/video" component={PagVideoCmp}/>
    </div>
  </BrowserRouter>
  , document.getElementById('root') as HTMLElement);

// registerServiceWorker();
