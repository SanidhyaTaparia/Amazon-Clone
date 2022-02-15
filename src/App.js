import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { auth } from './firebase';
import { useContext, useEffect } from 'react';

import userContext from './Context/userContext';

function App() {

  const context2=useContext(userContext);

  console.log("context2=",context2);
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth().onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        context2.changeUser(authUser);
      } else {
        // the user is logged out
        context2.changeUser(null);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>

        <Route path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
            <Header/>
            <Home/> 
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Payment/>
          </Route>

        </Switch>
      </div>
    </Router>       
  );
}

export default App;
