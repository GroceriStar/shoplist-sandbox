import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// @TODO - we trying to get rid of screens approach.
// we should use views instead


import List        from './screens/List/List';



import Ingredients from './screens/Ingredients/Ingredients';










class OldRouter extends Component {

  render() {

    return (
        <Switch>

        <Route path='/list'        component={List} />

          <Route path='/ingredients' component={Ingredients} exact />












      </Switch>
    );
  }

}



export default OldRouter;
