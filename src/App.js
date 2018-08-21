import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Formulario from './components/Formulario'
import NavegacaoPrincipal from './components/NavegacaoPrincipal'
import Relatorio from './components/Relatorio'

class App extends Component {  

  render() {
    return (
      <Router>
        <div>
          <NavegacaoPrincipal />
          <h1>feedback</h1>
          <Route exact path="/" component={ Formulario } />
          <Route exact path="/relatorio" component={ Relatorio } />
        </div>
      </Router>
    )
  }
}

export default App
