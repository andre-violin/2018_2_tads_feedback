import React, { Component } from 'react'

import InputField from './InputField'

export default class Formulario extends Component {
  render() {
    return (
      <form>
        <InputField identificador='usuario' 
                    tipo='email' 
                    etiqueta='E-mail do estudante'
                    textoAuxiliar="Digite seu e-mail" />

        <InputField identificador='comentario'
                    tipo='text'
                    etiqueta='Comentário'
                    textoAuxiliar="Deixe seu comentário" />

        <button type='submit'>Enviar comentário</button>
      </form>
    )
  }
}