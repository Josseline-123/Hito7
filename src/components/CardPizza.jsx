import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardPizza = ({pizza}) => {
    const navigate = useNavigate();
     const verPizza = () =>{ 
       navigate(`/detalle/${pizza.id}`)
     }   
    return(
        <div className='pizza'>
           <h5>{pizza.nombre}</h5>
           <hr></hr>
           <p>{pizza.price}</p>
           <img src = {pizza.img }/>
           <button onClick={verPizza}>Ver detalle</button>
        </div>
    )}
 
export default CardPizza