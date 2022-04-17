import React from 'react'
import {Link} from "react-router-dom";

const LoginUser = () => {

  return (
        <Link className='singIn' to="/User" >
            <button id="button" onClick={()=>{
                localStorage.setItem("usuarioActivo", true);
            }} type="submit">Sing In</button>

        </Link>
    )
}

export default LoginUser