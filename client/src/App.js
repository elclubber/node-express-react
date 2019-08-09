import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
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
    <main className="main">
    <Navigation />
    <Formulaire />
    </main>
    );
  }
}

export default App;