import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MiContexto } from '../context/MiContexto';

const Detalle = () => {
   const { id } = useParams();
   const {data} = useContext(MiContexto);
   const pizza = data.find((pizza) => pizza.id === id);

    return(

        <div className='detallePizza'>
          <div>Nombre: {pizza.nombre}</div>
            <hr></hr>
            <div>Descripcion: {pizza.descripcion}</div>
            <div>Ingredientes:{ pizza.ingredientes}</div>
            
            
            
            </div>
           
    )
}
export default Detalle