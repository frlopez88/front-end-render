import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const InicioSesion = () => {

    const [data, setData] = useState({});

    const changeHanlder = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });

    }

    const iniciaSesion = async (event)=>{

        event.preventDefault();

        const url = "https://back-end-render-kq2b.onrender.com/api/auth";

        const result = await axios.post(url, data);
        const dataResult = (await result).data;

        const {token} = dataResult;

        if (token){
            window.localStorage.setItem("token-render", token);
            location.reload();
        }

        

        

    }

    return (
        <>

            <div className='container'>

                <h1>Inicio de Sesion</h1>

                <form onSubmit={iniciaSesion} >
                    <div>
                        <label>Nombre Usuario</label>
                        <input onChange={changeHanlder} name="user_name" type='text' />
                    </div>
                    <div>
                        <label>Pass</label>
                        <input onChange={changeHanlder} name="pass" type='password' />
                    </div>
                    <button type='submit'>Iniciar Sesion</button>
                </form>

            </div>

        </>
    )
}
