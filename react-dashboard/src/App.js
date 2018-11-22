import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuSuperior/>
        <div className="row">
          <div className = "col-md-8 offset-md-2">
            <Resumo/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
