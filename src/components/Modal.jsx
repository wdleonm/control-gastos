import { useState } from 'react' 
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ( {setModal, animarModal, setAnimarModal, guardarGasto} ) => {

    const[mensaje, setMensaje] = useState('') 
    const[nombre, setNombre] = useState('') 
    const[cantidad, setCantidad] = useState('') 
    const[categoria, setCategoria] = useState('') 

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();

        //console.log('Enviando Formulario')
        if ([ nombre, cantidad, categoria ].includes('')) {
            //console.log('Fallo la Validación')
            setMensaje('Todos los campos con obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;

        }

        guardarGasto({nombre, cantidad, categoria})
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarBtn}
                alt='cerrar modal'
                onClick={ocultarModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar': 'cerrar' }`}
        >
            <legend>Nuevo Gasto</legend>

            <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <input
                    id='nombre'
                    type='text'
                    placeholder='Añade el Nombre del Gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
                />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad Gasto</label>

                <input
                    id='cantidad'
                    type='number'
                    placeholder='Añade la Cantidfad del Gasto: ej. 300'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value)) }
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoría</label>

                <select
                    id='categoria'
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value) }
                >    
                    <option value=''>-- Seleccione --</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='gastos'>Gastos Varios</option>
                    <option value='entretenimiento'>entretenimiento</option>
                    <option value='salud'>Salud</option>  
                    <option value='suscripciones'>Suscripciones</option>                  
                </select>
            </div>

            <input
                id='categoria'
                type='submit'
                value='Añadir Gasto'
            />    

        </form>

    </div>
  )
}

export default Modal