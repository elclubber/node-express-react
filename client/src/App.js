import React, { Component } from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

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
    <Header />
    <Navigation />
    </main>
    );
  }
}

export default App;