import React,{useState} from 'react'
import {Link} from "react-router-dom";

const LoginUser = (props) => {
  const [active, setActive]= useState(false)
  const usuarioActivo = () =>{
    if (active){
        localStorage.setItem("usuarioActivo", active)
      }
  }

  return (
        <Link className='singIn' to="/User" onClick={() => {setActive(true)}}>

            <button id="button"  onClick={()=>{
                console.log(active)
                usuarioActivo()
            }}>Sing In</button>

        </Link>

    )
}

export default LoginUser