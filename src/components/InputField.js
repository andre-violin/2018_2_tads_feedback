import React from "react"

const __input = {
  borderRadius: 50,
  width: '100%',
  padding: 10
}

const __containerInput = {
  marginTop: 30,
  width: '80%'
}

const InputField = props => {
  return (
    <div style={ __containerInput }>
      <label htmlFor={ props.identificador }>{ props.etiqueta }</label>
      <input 
        style={ __input } 
        id={ props.identificador } 
        type={ props.tipo } 
        placeholder={ props.textoAuxiliar } />
    </div>
  )
}

export default InputField
