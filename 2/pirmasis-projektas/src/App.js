import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><button className="btn btn-primary" role="button">Go to Products</button></p>
      </div>
    );
  }
  goProducts = () => this.props.router.push("products");
 //ir pats mygtukas kur nors į render() metodą
 <p><button onClick={this.goProducts}
            className="btn btn-primary"
            role="button">
                Go to Products
    </button></p>
}

export default App;
