import React, { Component } from 'react'

import InputField from './InputField'
import { firestore } from '../firebase/firebase'

export default class Formulario extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      email: '',
      comentario: ''
    }
  }

  salvarDados = ( event ) => {
    event.preventDefault()
    firestore.collection( 'feedbacks' ).add( this.state )
    console.log( this.state )
  }

  render() {
    return (
      <form onSubmit={ this.salvarDados } >
        <InputField identificador='usuario' 
                    tipo='email' 
                    etiqueta='E-mail do estudante'
                    textoAuxiliar="Digite seu e-mail"
                    alterar={ event => this.setState({ email: event.target.value }) } />

        <InputField identificador='comentario'
                    tipo='text'
                    etiqueta='Comentário'
                    textoAuxiliar="Deixe seu comentário"
                    alterar={ event => this.setState({ comentario: event.target.value }) } />

        <button type='submit'>Enviar comentário</button>
      </form>
    )
  }
}