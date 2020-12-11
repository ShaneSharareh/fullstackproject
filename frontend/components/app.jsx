import React from 'react';
import GreetingContainer from "./greeting_container";
import SignupContainer from './session_form/signup_container'
import LoginContainer  from './session_form/login_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <div className ="header">
       <Link className ="logo" to="/">BetterCraft</Link>
       <div className="search-container">
          <form action="/action_page.php">
          <input type="text" placeholder="Search for anything" name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
          </form>
      </div>
      <div className = "header-right">
      <GreetingContainer/>
      </div>
    </div>
    <div className = "nav">
      <ul>
        <li><a href="#"> Holiday Shop</a></li>
        <li><a href="#">Jewelry & Accessories</a></li>
        <li><a href="#">Clothing & Shoes</a></li>
        <li><a href="#">Home & Living</a></li>
        <li><a href="#">Wedding & Party</a></li>
        <li><a href="#">Toys & Entertainment</a></li>
        <li><a href="#">Art & Collectibles</a></li>
        <li><a href="#">Craft Supplies</a></li>
        <li><a href="#">Gifts & Gift Cards</a></li>
      </ul>
    </div>
    <Redirect to="/" />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />

  </div>
);


export default App