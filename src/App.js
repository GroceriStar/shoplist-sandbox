// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';


import { HeaderShowcase }   from '@groceristar/antd-showcase-components';

// import {
//   IngredientList,
//   DefaultList
// } from '@groceristar/grocery-component';

import {
  RadioPanelWrapper
} from '@groceristar/shoplist-blocks-component';

import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        {/*<HeaderShowcase />*/}

        <Router />
      </div>
    );
  }
}

export default App;


//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
