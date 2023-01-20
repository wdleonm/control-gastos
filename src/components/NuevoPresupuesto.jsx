import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje]= useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();

    //console.log('enviando formulario')
    if(!Number(presupuesto) || Number(presupuesto) <0 ){
        setMensaje('No es un presupuesto válido')
    }else {
        console.log('Si es un presupuesto válido')    
    }

  }

  return (
    <div className='contenedor-presupuest contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Añade tu prssupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(e.target.value) }
                />
            </div>

            <input type='submit' value='Añadir'/>

            {mensaje && <Mensaje tipo= 'error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto