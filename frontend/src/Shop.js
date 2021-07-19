import React from 'react';

import {  Route, Switch, BrowserRouter} from "react-router-dom";
import WearContent from "./components/shop/wearContent";
import EquipContent from "./components/shop/equipContent";
import MainContent from "./components/shop/mainContent";
import Tabnavb from './components/shop/tabs';
import Cart from './components/shop/Cart';



const Shop = () => {
  return (
    <div className="shop">

    <BrowserRouter>
    <Tabnavb/>

      <Switch>
      
        <Route path="/sup">
          
          <MainContent/>
        </Route>

        <Route path="/wear">
          <WearContent/>
        </Route>

        <Route path="/equip">
          <EquipContent/>
        </Route>

        <Route path="/Cart">
          <Cart/>
        </Route>

      </Switch>
      

    </BrowserRouter>
    <MainContent/>
    </div>
  );
}

export default Shop;