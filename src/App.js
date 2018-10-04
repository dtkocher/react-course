import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </header>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox" /> Create Static UI
              </li>
              <li>
                <input type="checkbox" /> Create Initial State
              </li>
              <li>
                <input type="checkbox" /> Used State to Render UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
