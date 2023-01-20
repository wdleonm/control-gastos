import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div> 
    // sintaxis para mezclar calse fija alerta con clase dinamica tipo
  )
}

export default Mensaje