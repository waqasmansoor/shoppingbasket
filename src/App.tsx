import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Home from './components/pages/home/Home'
import Products from './components/pages/products/Products'
import Item from './components/pages/items/Item'
import Cart from './components/pages/cart/Cart'
import NoMatch from './components/pages/404/NoMatch'
import './App.css';




function App() {
  

  return (

    <Router>
        <div className='app'>
          <NavBar/>
          
            
            <Switch>
              <Route path="/" exact><Home/></Route>
              <Route path="/products" exact><Products/></Route>
              <Route path="/products/:slug"><Item/></Route>
              <Route path="/cart"><Cart/></Route>
              <Route path='*'><NoMatch/></Route>
            </Switch>
          
        </div>
      </Router>
  );
}

export default App;
