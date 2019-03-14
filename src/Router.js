import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  // Examples,
  DeleteLink,
  EditLink
} from '@groceristar/shoplist-blocks-component'

import Examples from "./views/Examples"
import HomeView from "./views/HomeView"

class OldRouter extends Component {

  render() {
    console.log("this is");
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/'    component={HomeView} exact />
          <Route path='/examples'    component={Examples} exact />
          <Route path='/examples/delete/:id' component={DeleteLink} />
          <Route path='/examples/edit/:id' component={EditLink} />
        </Switch>
      </BrowserRouter>
    );
  }

}



export default OldRouter;
