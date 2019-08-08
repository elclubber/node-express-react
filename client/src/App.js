import React, { Component } from 'react';
import './App.css';
import Navitation from './Components/Navigation';
import Formulaire from './Components/Formulaire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
    <main class="main">
    <Navitation />
    <Formulaire />
    </main>
    );
  }
}

export default App;