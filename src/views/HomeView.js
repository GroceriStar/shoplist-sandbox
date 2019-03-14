import React, { Component, Fragment } from 'react';


// import _        from "lodash";

import "antd/dist/antd.css";


// import Header from '../components/Header/Header';
// import Header   from '@groceristar/antd-showcase-components';
// import Main   from '@groceristar/antd-showcase-components';

import { getIngredients } from "../selectors/selector";
import { Em }   from '@groceristar/cards-wrapper';

class HomeView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };
    getRecipes(recipes){
      if(recipes != undefined && recipes.length > 0){
        return ({recipes})
      } else {
        return (<Em />)
      }
    }

  render() {


    // const data = this.state.data;
    // let fiveRecipes = getFirstFiveRecipes()



    return (
      <Fragment>
        <div className="main">

            {/*<Header />*/}

            {this.getRecipes()}

        </div>
      </Fragment>

    );
  }
}

export default HomeView;
