import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Durvesh';

  render() {
    return (
      <div>
      Hello My First Class Based Component {this.c}!
      </div>
    )
  }
}

