import React, {useContext, useState } from 'react'
import { MiContexto } from '../context/MiContexto';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [usuario, setUsuario]= useState('');
    const [password, setPassword]= useState('');

    const navigate =useNavigate();
    const{ setUser } = useContext(MiContexto);

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(usuario ==='Josseline' && password === 'josse'){ 
        setUser(true);
        navigate('/');
    } else {
        setUser(false);

    } 

}
  return (
    <div>
        <form action="">
            <div>
           <input placeholder ='usuario' type={'text'} onChange = {(e) => setUsuario (e.target.value)}></input>
           </div>
           <div>
           <input placeholder ='password' type={'password'} onChange = {(e) => setPassword (e.target.value)}></input>
           </div>
           <button onClick = {handleSubmit} >Acceder</button>
        </form>
    </div>
  )

}
export default Login