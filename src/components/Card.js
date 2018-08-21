import React from 'react'

const estiloCard = {
  margin: '15px auto 50px auto',
  width: '90%',
  boxShadow: '0 3px 3px #ccc',
  borderRadius: 5,
  padding: 10,
  boxSizing: 'border-box'
}

const Card = ( props ) => {
  return (
    <div style={ estiloCard }>
      <h3>Nome: <span>{ props.nome }</span></h3>
      <h3>Comentário:</h3>
      <p>{ props.comentario }</p>
    </div>
  )
}

export default Card
