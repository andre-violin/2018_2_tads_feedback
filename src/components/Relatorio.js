import React, { Component } from 'react'

import { firestore } from '../firebase/firebase'
import Card from "./Card"

class Relatorio extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       feedbacks: [],
       error: null
    }
  }
  
  componentWillMount = () => {
    firestore.collection('feedbacks')
      .onSnapshot( collection => {
        this.setState({
          feedbacks: collection.docs.map( doc => doc.data() )
        })
      },
      err => {
        console.log(err)
      })
  }
  

  mostraDados = (dado, index) => 
    <Card key={ index } nome={dado.email} comentario={dado.comentario} />

  render() {
    return (
      <div>
        <h1>Relatório</h1>
          { this.state.feedbacks.map( (dado, index) => this.mostraDados(dado, index)) }
      </div>
    )
  }
}

  

export default Relatorio
