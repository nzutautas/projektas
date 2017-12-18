import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Polygon from './Modulis/Modulis';
import axios from 'axios';
console.log(new Polygon(5, 7).calcArea());
axios.get('https://itpro2017.herokuapp.com/api/products')
.then( (response) => {
console.log(response);
})
.catch( (error) => {
console.log(error);
});


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={InitialApp}>
      <IndexRoute component={App} />
      <Route path="/products" component={DemonstruotiNavigacija} />
      <Route path="/products/:id" component={DemonstruotiNavigacija} />
      <Route path="/help" component={DemonstruotiNavigacija} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root');

var DemonstruotiNavigacija = (props) => {
  var goApp = () => props.router.push("/");
  return (
    <div>
      At route: {props.router.getCurrentLocation().pathname}
      <button onClick={goApp}>Go to App</button>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};