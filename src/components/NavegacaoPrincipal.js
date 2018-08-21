import React from 'react'
import { Link } from 'react-router-dom'

const estiloNav = {
  position: 'fixed',
  display: 'flex',
  width: '100%',
  bottom: 0,
  zIndex: 100,
  background: '#ccc',
  textAlign: 'center'
}

const estiloLink = {
  flexGrow: 1,
  padding: 10,
  textDecoration: 'none'
}

const NavegacaoPrincipal = () => {
  return (
    <nav style={ estiloNav }>
      <Link style={ estiloLink } to="/">home</Link>
      <Link style={ estiloLink } to="/relatorio">relatório</Link>
    </nav>
  )
}

export default NavegacaoPrincipal
