import React from 'react';
import CardPizza from '../components/CardPizza';
import { MiContexto } from '../context/MiContexto';
import { useContext } from 'react';

const Home = () => {
    const {data} = useContext(MiContexto);

    return(
        <div className='d_flex'>
            {
                data.map((p) =>{

                    return <CardPizza pizza={p} key={p.id}></CardPizza>
                } )
                }
            
        </div>
    )
}
export default Home