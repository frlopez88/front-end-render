import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'

export const InfoComidas = ( {tokenInfo} ) => {

  const [comidas, setComidas] = useState([]);

  const cargarComidas = async () =>{

    const url = "https://back-end-render-kq2b.onrender.com/api/comida";

    const result = await axios.get(url, {
        headers: {
            'Authorization' : `Bear ${tokenInfo}`
        }
    });

    const dataResult = (await result).data;

    setComidas(dataResult);

  }

  const cerrarSesion = ()=>{

    window.localStorage.removeItem("token-render");
    location.reload();

  }

  useEffect(()=>{
    cargarComidas();
  }, []);

  return (
    <>
        <div className="container">

            <h1>Listado de Comidas</h1>
            <ul>
                {
                    comidas.map( item=>(

                        <li key={item.id} > {item.nombre} </li>

                    ) )
                }
            </ul>

        </div>

        <button onClick={cerrarSesion} >Cerrar Sesion</button>
    
    </>
  )
}
