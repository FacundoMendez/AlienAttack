import React from 'react'
import {Link} from "react-router-dom";

import "./login.css"
const Login = () => {
  return (
    <div className="boxFormulario">
      <section className='formularioContacto'>
        <div className="form">
          <div className="input">
            <div className="inputBox">
              <label>Username</label>
              <input type="email" placeholder="Example@gmail.com" required />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input type="password" placeholder="........"required />
            </div>
            <div className="inputBox">
              <button id="button">
                <Link className='singIn' to="/User">Sing In</Link>
              </button>
            </div>
          </div>
          <p>Forget password? <a href="#">Click Here</a></p>
        </div>
    </section>
    </div>

  )
}

export default Login